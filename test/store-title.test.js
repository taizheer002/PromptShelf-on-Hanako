// test/store-title.test.js —— 标题链路回归（终审 F1）+ 路径分隔符校验（终审 F4）
// 假 ctx：resources 用内存 Map（{ kind:'local-file', path } → Buffer），
// fsLike 由 Map 推导目录树，ShelfStore 全程不落真实磁盘。
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ShelfStore } from '../lib/store.js';
import { defaultTitleFromContent } from '../lib/index-core.js';

/** 路径统一正斜杠（Windows join 出反斜杠，Map key 一律规范化） */
function norm(p) {
  return String(p).replace(/\\/g, '/');
}

/** 内存假 ctx + 目录树推导 fsLike */
function makeFakeCtx(dataDir) {
  const files = new Map(); // 规范化绝对路径 → Buffer
  const root = norm(dataDir).replace(/\/+$/, '') + '/';

  const resources = {
    async read(ref) {
      const k = norm(ref.path);
      return files.has(k) ? { content: files.get(k) } : { content: null };
    },
    async write(ref, content) {
      files.set(norm(ref.path), Buffer.isBuffer(content) ? Buffer.from(content) : Buffer.from(String(content)));
    },
    async rename(from, to) {
      const k = norm(from.path);
      const t = norm(to.path);
      if (files.has(k)) {
        files.set(t, files.get(k));
        files.delete(k);
      }
    },
    async mkdir() {},
    async delete(ref) {
      files.delete(norm(ref.path));
    },
  };

  /** dirPath 下的直接子项名（文件与目录混排） */
  function children(dirPath) {
    const dir = norm(dirPath).replace(/\/+$/, '');
    const prefix = dir === root.slice(0, -1) ? root : `${dir}/`;
    const names = new Set();
    for (const k of files.keys()) {
      if (!k.startsWith(prefix)) continue;
      const rest = k.slice(prefix.length);
      const idx = rest.indexOf('/');
      if (idx === -1) {
        if (rest.length) names.add(rest);
      } else {
        names.add(rest.slice(0, idx));
      }
    }
    return [...names];
  }

  const fsLike = {
    async readdir(dirPath) {
      const dir = norm(dirPath).replace(/\/+$/, '');
      return children(dirPath).map((name) => ({
        name,
        isDirectory() {
          const base = `${dir}/${name}/`;
          for (const k of files.keys()) if (k.startsWith(base)) return true;
          return false;
        },
        isFile() {
          return files.has(`${dir}/${name}`);
        },
      }));
    },
    async stat() {
      return { mtimeMs: 0 };
    },
  };

  return { ctx: { resources }, fsLike };
}

async function setup() {
  const dataDir = 'D:/ps-shelf';
  const { ctx, fsLike } = makeFakeCtx(dataDir);
  const store = new ShelfStore(ctx, { dataDir });
  store.fsLike = () => fsLike; // 覆盖测试替身，load 走内存 Map 而非真实磁盘
  await store.load();
  return store;
}

test('F1 createPrompt 指定 name（含空格/中文）：frontmatter title 与 entry.title 都等于 name', async () => {
  const store = await setup();
  const r = await store.createPrompt('写作', '我的标题 带空格', '第一行内容\n第二行内容');
  assert.equal(r.ok, true);
  assert.equal(r.entry.title, '我的标题 带空格');
  assert.equal(r.entry.filename, '我的标题 带空格.md');
  const text = await store.tryRead('写作/我的标题 带空格.md');
  assert.match(text, /^---\ntitle: 我的标题 带空格\ncreated: \d{4}-\d{2}-\d{2}\n---\n/);
});

test('F1 createPrompt 不指定 name：title 用 defaultTitleFromContent(content)', async () => {
  const store = await setup();
  const content = '你会写诗吗？请给建议';
  const r = await store.createPrompt('写作', '', content);
  assert.equal(r.ok, true);
  const expected = defaultTitleFromContent(content);
  assert.equal(r.entry.title, expected);
  const text = await store.tryRead('写作/.md');
  assert.match(text, new RegExp(`^---\\ntitle: ${expected}\\ncreated: \\d{4}-\\d{2}-\\d{2}\\n---\\n`));
});

test('F1 renamePrompt 后 entry.title 与 frontmatter title 同步更新，created 保留', async () => {
  const store = await setup();
  const created = await store.createPrompt('写作', '旧标题', '正文内容\n在这里');
  assert.equal(created.ok, true);
  const createdDate = created.entry.created;

  const r = await store.renamePrompt('写作/旧标题.md', '新标题');
  assert.equal(r.ok, true);
  assert.equal(r.entry.title, '新标题');
  assert.equal(r.entry.filename, '新标题.md');
  // 文件已改名，旧文件不存在
  assert.equal(await store.tryRead('写作/旧标题.md'), null);
  const text = await store.tryRead('写作/新标题.md');
  assert.match(text, /^---\ntitle: 新标题\ncreated: \d{4}-\d{2}-\d{2}\n---\n\n正文内容\n在这里/);
  // created 行保留原值（不因改名重置）
  assert.ok(text.includes(`created: ${createdDate}`));
  // 内存词条与磁盘一致（buildPromptEntry 重解析）
  const state = store.getState();
  const entry = state.directories.find((d) => d.name === '写作').entries[0];
  assert.equal(entry.title, '新标题');
  assert.equal(entry.filename, '新标题.md');
});

test('F4 非法路径：name/directory 含分隔符、冒号或前导点被拒绝', async () => {
  const store = await setup();
  assert.equal((await store.createPrompt('写作', 'a/b', 'x')).ok, false);
  assert.equal((await store.createPrompt('写作', 'a\\b', 'x')).ok, false);
  assert.equal((await store.createPrompt('写作', 'a:b', 'x')).ok, false);
  assert.equal((await store.createPrompt('写作', '.hidden', 'x')).ok, false);
  assert.equal((await store.createPrompt('a/b', '正常', 'x')).ok, false);
  assert.equal((await store.createPrompt('a\\b', '正常', 'x')).ok, false);
  // relPath 的 filename 段含分隔符被拒绝
  await store.createPrompt('写作', '合法', 'x');
  assert.equal((await store.updatePrompt('写作/a/b.md', 'y')).ok, false);
  assert.equal((await store.deletePrompt('写作/a/b.md')).ok, false);
  assert.equal((await store.renamePrompt('写作/a/b.md', 'z')).ok, false);
  // 改名目标本身非法
  assert.equal((await store.renamePrompt('写作/合法.md', 'x/y')).ok, false);
  // 空 name（未指定标题）仍可创建（title 走默认），只是拒绝空目录
  assert.equal((await store.createPrompt('', '正常', 'x')).ok, false);
});
