// lib/index-core.js —— 数据层纯逻辑，零 Hana 依赖，node:test 可测
// 导出：parseOrderJson、validateOrderJson、scanDirectoryTree、mergeIntoIndex、
//       pickFallbackIndex、defaultTitleFromContent、buildPromptEntry、diskToIndex
import { promises as fsPromises } from 'node:fs';
import { join } from 'node:path';

/** 解析 .order.json 文本；JSON 损坏或结构不合法返回 null */
export function parseOrderJson(text) {
  try {
    const value = JSON.parse(text);
    return validateOrderJson(value) ? value : null;
  } catch {
    return null;
  }
}

/** 校验 OrderIndex 结构：{ version: 1, directories: [{ name, items: string[] }] } */
export function validateOrderJson(value) {
  if (!value || typeof value !== 'object') return false;
  if (value.version !== 1) return false;
  if (!Array.isArray(value.directories)) return false;
  return value.directories.every((d) =>
    d && typeof d.name === 'string' && d.name.length > 0 &&
    Array.isArray(d.items) && d.items.every((i) => typeof i === 'string'));
}

/**
 * 扫描目录树（数据目录/目录名/文件名.md 两层结构）。
 * 忽略点文件（含 .order.json*）与嵌套子目录；dirs 与 files 均按 mtime 升序。
 * @param {string} dirPath 数据目录
 * @param {{ readdir(path, opts) -> Promise<Dirent[]>, stat(path) -> Promise<{mtimeMs}> }} [fsLike]
 *   测试注入替身；不传时默认 node:fs/promises。
 * @returns {Promise<{ dirs: string[], files: {dir, filename}[] }>}
 */
export async function scanDirectoryTree(dirPath, fsLike) {
  const fs = fsLike ?? fsPromises;
  const rootEntries = await fs.readdir(dirPath, { withFileTypes: true });
  const dirs = [];
  const files = [];
  for (const entry of rootEntries) {
    if (entry.name.startsWith('.')) continue; // 忽略点文件（.order.json* 等）
    if (entry.isDirectory()) {
      const st = await fs.stat(join(dirPath, entry.name));
      dirs.push({ name: entry.name, mtimeMs: st.mtimeMs });
      const subEntries = await fs.readdir(join(dirPath, entry.name), { withFileTypes: true });
      for (const sub of subEntries) {
        if (sub.name.startsWith('.') || !sub.isFile()) continue;
        const st2 = await fs.stat(join(dirPath, entry.name, sub.name));
        files.push({ dir: entry.name, filename: sub.name, mtimeMs: st2.mtimeMs });
      }
    }
    // 根目录直接文件不属于任何目录，忽略
  }
  dirs.sort((a, b) => a.mtimeMs - b.mtimeMs);
  files.sort((a, b) => a.mtimeMs - b.mtimeMs);
  return {
    dirs: dirs.map((d) => d.name),
    files: files.map((f) => ({ dir: f.dir, filename: f.filename })),
  };
}

/**
 * 合并磁盘扫描结果与既有索引：磁盘存在但索引缺的词条按磁盘顺序补尾部，
 * 索引中磁盘已不存在的目录项与词条剔除。返回新 OrderIndex（不改入参）。
 */
export function mergeIntoIndex(disk, index) {
  const indexDirs = (index && Array.isArray(index.directories)) ? index.directories : [];
  const directories = disk.dirs.map((name) => {
    const existing = indexDirs.find((d) => d.name === name);
    const existingItems = existing && Array.isArray(existing.items) ? existing.items : [];
    const diskItems = disk.files.filter((f) => f.dir === name).map((f) => f.filename);
    const items = [
      ...existingItems.filter((i) => diskItems.includes(i)),
      ...diskItems.filter((i) => !existingItems.includes(i)),
    ];
    return { name, items };
  });
  return { version: 1, directories };
}

/** 磁盘扫描结果转 OrderIndex（mtime 顺序即磁盘文件顺序） */
export function diskToIndex(disk) {
  return {
    version: 1,
    directories: disk.dirs.map((name) => ({
      name,
      items: disk.files.filter((f) => f.dir === name).map((f) => f.filename),
    })),
  };
}

/** fallback 链：主索引 → 备份 → mtime 扫描 */
export function pickFallbackIndex(main, backup, disk) {
  if (main) return { index: main, source: 'main', warning: null };
  if (backup) return { index: backup, source: 'backup', warning: '排序索引损坏，已回退到备份' };
  return { index: diskToIndex(disk), source: 'scan', warning: '排序索引与备份均损坏，已按时间重建' };
}

/**
 * 默认标题：正文按分隔符切分取前 3 段 join 空格；超 24 字符截断加省略号。
 * 分隔符：空白 + ，。、；：,.!?
 */
export function defaultTitleFromContent(content) {
  const tokens = (content || '').split(/[\s，。、；：,.!?]+/).filter(Boolean).slice(0, 3).join(' ');
  const title = tokens || '未命名';
  return title.length > 24 ? `${title.slice(0, 24)}…` : title;
}

/**
 * 解析 frontmatter：---\ntitle: X\ncreated: Y\n---
 * @returns {{ title: string|null, created: string|null, body: string }} body 为去掉 frontmatter 后的正文
 */
export function parseFrontmatter(content) {
  const text = content || '';
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return { title: null, created: null, body: text };
  const fields = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) fields[key] = value;
  }
  return { title: fields.title || null, created: fields.created || null, body: text.slice(m[0].length) };
}

/**
 * 由磁盘文件构建 PromptEntry：{ dir, filename, title, content, created }。
 * frontmatter title 缺失时用正文（去掉 frontmatter）的默认标题；created 缺失为 null。
 */
export function buildPromptEntry({ dir, filename, content }) {
  const { title, created, body } = parseFrontmatter(content);
  return {
    dir,
    filename,
    title: title || defaultTitleFromContent(body),
    content,
    created,
  };
}
