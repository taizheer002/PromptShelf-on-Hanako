// lib/store.js —— server 侧状态与写盘（依赖 ctx.resources，封装全部写盘策略）
// 内存数组为真相源，磁盘为投影；写盘走原子写（tmp + rename）+ 写时备份 + corrupt 保留。
import { join as pathJoin } from 'node:path';
import { Buffer } from 'node:buffer';
import {
  parseOrderJson,
  scanDirectoryTree,
  mergeIntoIndex,
  pickFallbackIndex,
  buildPromptEntry,
  defaultTitleFromContent,
} from './index-core.js';

const ORDER_FILE = '.order.json';
const REORDER_DEBOUNCE_MS = 500;

/** 简单防抖：连续调用重置计时；带 cancel 供 flushNow 用 */
function debounce(fn, ms) {
  let timer = null;
  const wrapped = (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { timer = null; fn(...args); }, ms);
  };
  wrapped.cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
  return wrapped;
}

/** 补 .md 后缀 */
function ensureMd(name) {
  const n = String(name);
  return n.endsWith('.md') ? n : `${n}.md`;
}

/** 切分 frontmatter：返回 { head, body }；head 含前后 --- 与尾部换行，无 frontmatter 时为空串 */
function splitFrontmatter(content) {
  const text = content ?? '';
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return { head: '', body: text };
  return { head: m[0], body: text.slice(m[0].length) };
}

/** 词条相对 dataDir 的路径（dir/filename，统一正斜杠） */
function entryRel(dir, filename) {
  return `${dir}/${filename}`;
}

/** 输入路径校验：拒绝空串、含 \0、绝对路径（以 / 或 \ 开头）、含 .. 段 */
function isValidPathInput(input) {
  if (typeof input !== 'string' || input.length === 0) return false;
  if (input.includes('\0')) return false;
  if (input.startsWith('/') || input.startsWith('\\')) return false;
  if (input.split(/[\\/]/).includes('..')) return false;
  return true;
}

/** 单路径段校验（目录名/文件名/新建名）：额外拒绝分隔符、冒号、前导点，防嵌套路径破坏两级不变量 */
function isValidPathSegment(input) {
  if (typeof input !== 'string' || input.length === 0) return false;
  if (input.includes('\0')) return false;
  if (input.includes('/') || input.includes('\\') || input.includes(':')) return false;
  if (input.startsWith('.')) return false;
  return true;
}

/** 生成点前缀兄弟名（.basename{ext}），使扫描器自动忽略残留；basename 已点开头则不再重复加点 */
function dotSiblingName(rel, ext) {
  const idx = Math.max(rel.lastIndexOf('/'), rel.lastIndexOf('\\'));
  const dir = idx === -1 ? '' : rel.slice(0, idx + 1);
  const base = idx === -1 ? rel : rel.slice(idx + 1);
  const dotted = base.startsWith('.') ? base : `.${base}`;
  return `${dir}${dotted}${ext}`;
}

export class ShelfStore {
  constructor(ctx, config) {
    this.ctx = ctx;
    this.dataDir = config?.dataDir ?? null;
    this.state = null;
    this.pendingWrites = new Map(); // 待写标记：'index' → 有未落盘的索引变更
    this.debouncedPersist = debounce(() => this.persistIndex().catch(() => {}), REORDER_DEBOUNCE_MS);
  }

  /** 相对 dataDir 的路径 → 绝对路径 */
  join(...rels) { return pathJoin(this.dataDir, ...rels); }

  /** 相对 dataDir 的路径 → ResourceRef（{ kind: 'local-file', path }） */
  ref(rel) { return { kind: 'local-file', path: this.join(rel) }; }

  /** 测试注入替身占位：返回 undefined 让 scanDirectoryTree 走默认 node:fs/promises */
  fsLike() { return undefined; }

  getState() { return this.state; }

  // ---- 写盘原语 ----
  async tryRead(rel) {
    try {
      const r = await this.ctx.resources.read(this.ref(rel));
      const c = r?.content;
      if (c == null) return null;
      return typeof c === 'string' ? c : Buffer.from(c).toString('utf-8');
    } catch { return null; }
  }

  async tryDelete(rel) {
    try { await this.ctx.resources.delete(this.ref(rel)); return true; }
    catch { return false; }
  }

  /** 原子写：先写点前缀 tmp 再 rename 覆盖；rename 覆盖失败回退「备份 + 直写」。
   * 降级路径本身有备份保护（旧文件先挪为 .bak），宿主不支持覆盖 rename 时降级是
   * 常态而非错误，degraded 只在「备份也失败」时置位（那才是真风险）。 */
  async writeFileAtomic(rel, content) {
    const tmp = dotSiblingName(rel, '.tmp');
    await this.ctx.resources.write(this.ref(tmp), content);
    try {
      await this.ctx.resources.rename(this.ref(tmp), this.ref(rel));
    } catch {
      const bak = dotSiblingName(rel, '.bak');
      let backed = false;
      try { await this.ctx.resources.rename(this.ref(rel), this.ref(bak)); backed = true; } catch {}
      await this.ctx.resources.write(this.ref(rel), content);
      await this.tryDelete(tmp);
      if (!backed && this.state) this.state.degraded = '写入降级：旧文件备份失败（rename 与备份均不可用）';
    }
  }

  /** 持久化索引：原子写主索引 → 成功后复制为 .bak（写时备份）。失败只置 warning 不中断。 */
  async persistIndex() {
    if (!this.state) return;
    const json = JSON.stringify(this.toOrderIndex(), null, 2);
    try {
      await this.writeFileAtomic(ORDER_FILE, json);
      try {
        const text = (await this.tryRead(ORDER_FILE)) ?? json;
        await this.ctx.resources.write(this.ref(ORDER_FILE + '.bak'), text);
      } catch {}
      this.pendingWrites.delete('index');
      this.state.warning = null; // 瞬时写失败/fallback 警告在成功写盘后清除
    } catch {
      this.state.warning = '排序索引写入失败，已保留内存状态，稍后重试';
    }
  }

  /** 损坏索引改名保留（失败忽略） */
  async preserveCorrupt() {
    const ts = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
    try { await this.ctx.resources.rename(this.ref(ORDER_FILE), this.ref(`${ORDER_FILE}.corrupt-${ts}`)); } catch {}
  }

  // ---- 内部辅助 ----
  toOrderIndex() {
    return {
      version: 1,
      directories: (this.state?.directories ?? []).map((d) => ({
        name: d.name,
        items: d.entries.map((e) => e.filename),
      })),
    };
  }

  splitRelPath(relPath) {
    const p = String(relPath).replace(/\\/g, '/');
    const idx = p.indexOf('/');
    if (idx === -1) return { dir: null, filename: p };
    return { dir: p.slice(0, idx), filename: p.slice(idx + 1) };
  }

  /** 解析并校验 relPath：路径非法或 filename 段含分隔符时返回 null，合法返回 { dir, filename } */
  splitValidRel(relPath) {
    if (!isValidPathInput(relPath)) return null;
    const { dir, filename } = this.splitRelPath(relPath);
    if (!dir || !filename) return null;
    if (filename.includes('/') || filename.includes('\\') || filename.includes(':')) return null;
    return { dir, filename };
  }

  getEntry(dir, filename) {
    const d = this.state?.directories?.find((x) => x.name === dir);
    return d?.entries?.find((e) => e.filename === filename) ?? null;
  }

  /** 按 relPath（dir/filename）找词条（Task 6 的 api.js 会用到） */
  findEntry(relPath) {
    const rel = this.splitValidRel(relPath);
    if (!rel) return null;
    return this.getEntry(rel.dir, rel.filename);
  }

  // ---- 加载 ----
  async load() {
    const [mainText, backupText] = await Promise.all([
      this.tryRead(ORDER_FILE),
      this.tryRead(ORDER_FILE + '.bak'),
    ]);
    const disk = await scanDirectoryTree(this.dataDir, this.fsLike());
    let index, source, warning;
    let cleanInit = false;
    if (mainText == null && backupText == null) {
      // 干净初始化：主备索引均缺失，非损坏，按磁盘扫描建内存索引
      cleanInit = true;
      index = null;
      source = 'scan';
      warning = null;
    } else {
      ({ index, source, warning } = pickFallbackIndex(
        parseOrderJson(mainText), parseOrderJson(backupText), disk));
    }
    const merged = mergeIntoIndex(disk, index);
    this.state = {
      dataDir: this.dataDir,
      indexHealthy: cleanInit ? true : source === 'main',
      warning,
      degraded: null,
      directories: [],
    };
    for (const d of merged.directories) {
      const entries = [];
      for (const filename of d.items) {
        const text = await this.tryRead(entryRel(d.name, filename));
        if (text == null) continue;
        entries.push(buildPromptEntry({ dir: d.name, filename, content: text }));
      }
      this.state.directories.push({ name: d.name, entries });
    }
    this.emitChanged();
    return this.getState();
  }

  // ---- 词条操作 ----
  async createPrompt(dir, name, content) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    // 目录必须是非空合法单段；name 为空（未指定）时允许，标题回退正文默认标题
    if (!isValidPathSegment(dir)) return { ok: false, error: '非法路径' };
    if (name && !isValidPathSegment(name)) return { ok: false, error: '非法路径' };
    const filename = ensureMd(name);
    let dirEntry = this.state.directories.find((d) => d.name === dir);
    if (!dirEntry) {
      try { await this.ctx.resources.mkdir(this.ref(dir)); }
      catch { return { ok: false, error: `无法创建目录 ${dir}` }; }
      dirEntry = { name: dir, entries: [] };
      this.state.directories.push(dirEntry);
    }
    if (dirEntry.entries.some((e) => e.filename === filename)) {
      return { ok: false, error: '同名文件已存在' };
    }
    // 标题链路：用户/Agent 显式给的 name 直接进 frontmatter title（含空格/中文原样），否则用正文默认标题
    const title = name ? name : defaultTitleFromContent(content);
    const created = new Date().toISOString().slice(0, 10);
    const text = `---\ntitle: ${title}\ncreated: ${created}\n---\n\n${content}`;
    try {
      await this.writeFileAtomic(entryRel(dir, filename), text);
    } catch {
      return { ok: false, error: '写入文件失败' };
    }
    const entry = buildPromptEntry({ dir, filename, content: text });
    dirEntry.entries.push(entry);
    await this.persistIndex();
    this.emitChanged();
    return { ok: true, entry };
  }

  async updatePrompt(relPath, content) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    const rel = this.splitValidRel(relPath);
    if (!rel) return { ok: false, error: '非法路径' };
    const { dir, filename } = rel;
    const entry = this.getEntry(dir, filename);
    if (!entry) return { ok: false, error: '词条不存在' };
    const original = await this.tryRead(entryRel(dir, filename));
    if (original == null) return { ok: false, error: '读取原文件失败' };
    const { head } = splitFrontmatter(original);
    const text = head ? head + content : content;
    try {
      await this.writeFileAtomic(entryRel(dir, filename), text);
    } catch {
      return { ok: false, error: '写入文件失败' };
    }
    Object.assign(entry, buildPromptEntry({ dir, filename, content: text }));
    this.emitChanged();
    return { ok: true, entry };
  }

  async deletePrompt(relPath) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    const rel = this.splitValidRel(relPath);
    if (!rel) return { ok: false, error: '非法路径' };
    const { dir, filename } = rel;
    const dirEntry = this.state.directories.find((d) => d.name === dir);
    const idx = dirEntry?.entries.findIndex((e) => e.filename === filename) ?? -1;
    if (!dirEntry || idx === -1) return { ok: false, error: '词条不存在' };
    try { await this.ctx.resources.delete(this.ref(entryRel(dir, filename))); }
    catch { return { ok: false, error: '删除文件失败' }; }
    dirEntry.entries.splice(idx, 1);
    await this.persistIndex();
    this.emitChanged();
    return { ok: true };
  }

  async renamePrompt(relPath, newName) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    const rel = this.splitValidRel(relPath);
    if (!rel) return { ok: false, error: '非法路径' };
    if (!isValidPathSegment(newName)) return { ok: false, error: '非法路径' };
    const { dir, filename } = rel;
    const dirEntry = this.state.directories.find((d) => d.name === dir);
    const entry = this.getEntry(dir, filename);
    if (!dirEntry || !entry) return { ok: false, error: '词条不存在' };
    const newFilename = ensureMd(newName);
    if (dirEntry.entries.some((e) => e.filename === newFilename)) {
      return { ok: false, error: '同名文件已存在' };
    }
    // 改名时同步改写 frontmatter 的 title 行（保留 created 等其余行）；无 frontmatter 则补建
    const original = await this.tryRead(entryRel(dir, filename));
    if (original == null) return { ok: false, error: '读取原文件失败' };
    const { head, body } = splitFrontmatter(original);
    const newHead = head
      ? head.replace(/^title:.*$/m, () => `title: ${newName}`)
      : `---\ntitle: ${newName}\ncreated: ${entry.created ?? new Date().toISOString().slice(0, 10)}\n---\n\n`;
    const text = newHead + body;
    try {
      await this.ctx.resources.rename(
        this.ref(entryRel(dir, filename)), this.ref(entryRel(dir, newFilename)));
      await this.writeFileAtomic(entryRel(dir, newFilename), text);
    } catch { return { ok: false, error: '重命名失败' }; }
    // 刷新内存词条：胶囊显示名（title）与文件名/正文/created 保持一致
    Object.assign(entry, buildPromptEntry({ dir, filename: newFilename, content: text }));
    await this.persistIndex();
    this.emitChanged();
    return { ok: true, entry };
  }

  async movePrompt(relPath, targetDir) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    const rel = this.splitValidRel(relPath);
    if (!rel) return { ok: false, error: '非法路径' };
    if (!isValidPathSegment(targetDir)) return { ok: false, error: '非法路径' };
    const { dir, filename } = rel;
    const srcDir = this.state.directories.find((d) => d.name === dir);
    const entry = this.getEntry(dir, filename);
    if (!srcDir || !entry) return { ok: false, error: '词条不存在' };
    const dstDir = this.state.directories.find((d) => d.name === targetDir);
    if (!dstDir) return { ok: false, error: '目标目录不存在' };
    if (dstDir.entries.some((e) => e.filename === filename)) {
      return { ok: false, error: '重名' };
    }
    try {
      await this.ctx.resources.rename(
        this.ref(entryRel(dir, filename)), this.ref(entryRel(targetDir, filename)));
    } catch { return { ok: false, error: '移动失败' }; }
    srcDir.entries = srcDir.entries.filter((e) => e !== entry);
    entry.dir = targetDir;
    dstDir.entries.push(entry);
    await this.persistIndex();
    this.emitChanged();
    return { ok: true, entry };
  }

  // ---- 目录操作 ----
  async createDir(name) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    if (!isValidPathSegment(name)) return { ok: false, error: '非法路径' };
    if (this.state.directories.some((d) => d.name === name)) {
      return { ok: false, error: '目录已存在' };
    }
    try { await this.ctx.resources.mkdir(this.ref(name)); }
    catch { return { ok: false, error: '创建目录失败' }; }
    this.state.directories.push({ name, entries: [] });
    await this.persistIndex();
    this.emitChanged();
    return { ok: true };
  }

  async renameDir(name, newName) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    if (!isValidPathSegment(name) || !isValidPathSegment(newName)) return { ok: false, error: '非法路径' };
    const dirEntry = this.state.directories.find((d) => d.name === name);
    if (!dirEntry) return { ok: false, error: '目录不存在' };
    if (this.state.directories.some((d) => d.name === newName)) {
      return { ok: false, error: '同名目录已存在' };
    }
    try {
      await this.ctx.resources.rename(this.ref(name), this.ref(newName));
    } catch { return { ok: false, error: '重命名目录失败' }; }
    dirEntry.name = newName;
    for (const e of dirEntry.entries) e.dir = newName;
    await this.persistIndex();
    this.emitChanged();
    return { ok: true };
  }

  async deleteDir(name) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    if (!isValidPathSegment(name)) return { ok: false, error: '非法路径' };
    const idx = this.state.directories.findIndex((d) => d.name === name);
    if (idx === -1) return { ok: false, error: '目录不存在' };
    const dirEntry = this.state.directories[idx];
    if (dirEntry.entries.length > 0) return { ok: false, error: '目录非空，无法删除' };
    try { await this.ctx.resources.delete(this.ref(name)); }
    catch { return { ok: false, error: '删除目录失败' }; }
    this.state.directories.splice(idx, 1);
    await this.persistIndex();
    this.emitChanged();
    return { ok: true };
  }

  // ---- 排序（防抖持久化）----
  async reorder(dirName, items) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    if (!Array.isArray(items)) return { ok: false, error: 'items 必须是数组' };
    const order = new Map(items.map((x, i) => [x, i]));
    if (dirName === null || dirName === undefined) {
      this.state.directories.sort((a, b) =>
        (order.get(a.name) ?? Number.MAX_SAFE_INTEGER) - (order.get(b.name) ?? Number.MAX_SAFE_INTEGER));
    } else {
      const dirEntry = this.state.directories.find((d) => d.name === dirName);
      if (!dirEntry) return { ok: false, error: '目录不存在' };
      dirEntry.entries.sort((a, b) =>
        (order.get(a.filename) ?? Number.MAX_SAFE_INTEGER) - (order.get(b.filename) ?? Number.MAX_SAFE_INTEGER));
    }
    this.schedulePersist();
    this.emitChanged();
    return { ok: true };
  }

  schedulePersist() {
    this.pendingWrites.set('index', true);
    this.debouncedPersist();
  }

  /** onunload 用：立即写完待写队列 */
  async flushNow() {
    this.debouncedPersist.cancel();
    if (this.state) await this.persistIndex().catch(() => {});
  }

  // ---- 重建 ----
  async rebuildIndex(keepCorrupt = true) {
    if (!this.state) return { ok: false, error: '尚未初始化（dataDir 未配置）' };
    if (keepCorrupt) await this.preserveCorrupt();
    const disk = await scanDirectoryTree(this.dataDir, this.fsLike());
    const merged = mergeIntoIndex(disk, null);
    this.state.directories = [];
    for (const d of merged.directories) {
      const entries = [];
      for (const filename of d.items) {
        const text = await this.tryRead(entryRel(d.name, filename));
        if (text == null) continue;
        entries.push(buildPromptEntry({ dir: d.name, filename, content: text }));
      }
      this.state.directories.push({ name: d.name, entries });
    }
    this.state.warning = null;
    this.state.indexHealthy = true;
    await this.persistIndex();
    this.emitChanged();
    return { ok: true };
  }

  emitChanged() {
    this.ctx.bus?.emit?.('promptshelf:changed', this.getState());
  }
}
