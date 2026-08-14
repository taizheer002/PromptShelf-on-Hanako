// test/index-core.test.js
// 照抄 brief；两处笔误修正（详见 task-2-report.md）：
// 1) defaultTitleFromContent 按裁定实现为「split 后 join 空格」，断言1 期望值随之将'，'改为' '；
// 2) scanDirectoryTree 为 async（fsLike 默认 node:fs/promises），调用补 await，回调改 async。
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  parseOrderJson, validateOrderJson, scanDirectoryTree,
  mergeIntoIndex, pickFallbackIndex, defaultTitleFromContent,
} from '../lib/index-core.js';

test('parseOrderJson: 合法 JSON 返回 OrderIndex', () => {
  const index = parseOrderJson('{"version":1,"directories":[{"name":"写作","items":["a.md"]}]}');
  assert.equal(index.directories[0].name, '写作');
  assert.deepEqual(index.directories[0].items, ['a.md']);
});
test('parseOrderJson: 损坏 JSON 返回 null', () => {
  assert.equal(parseOrderJson('{"version":1,"directories":['), null);
});
test('validateOrderJson: 结构不合法返回 false', () => {
  assert.equal(validateOrderJson({ version: 1, directories: 'nope' }), false);
  assert.equal(validateOrderJson({ version: 2, directories: [] }), false);
  assert.equal(validateOrderJson({ version: 1, directories: [{ name: 'x', items: [1] }] }), false);
});
test('defaultTitleFromContent: 取前三个 token，超长截断', () => {
  assert.equal(defaultTitleFromContent('你是海洋生物学专家，请分析数据'), '你是海洋生物学专家 请分析数据'.slice(0, 24));
  assert.equal(defaultTitleFromContent('a b c d'), 'a b c');
});
test('scanDirectoryTree: 扫描目录树，忽略 .order.json*，按 mtime 排序', async () => {
  const root = mkdtempSync(join(tmpdir(), 'ps-scan-'));
  mkdirSync(join(root, '写作'));
  mkdirSync(join(root, '实验'));
  writeFileSync(join(root, '写作', 'b.md'), '# b\nb');
  writeFileSync(join(root, '写作', 'a.md'), '# a\na');
  writeFileSync(join(root, '.order.json'), '{}');
  const disk = await scanDirectoryTree(root);
  assert.deepEqual(disk.dirs.sort(), ['写作', '实验']);
  const w = disk.files.filter((f) => f.dir === '写作');
  assert.equal(w.length, 2);
  assert.ok(!disk.files.some((f) => f.filename.startsWith('.order')));
  rmSync(root, { recursive: true, force: true });
});
test('mergeIntoIndex: 磁盘存在但索引缺的词条补尾部，多余索引项剔除', () => {
  const disk = { dirs: ['写作', '实验'], files: [
    { dir: '写作', filename: 'a.md' }, { dir: '写作', filename: 'b.md' }, { dir: '实验', filename: 'c.md' },
  ]};
  const index = { version: 1, directories: [{ name: '写作', items: ['a.md'] }] };
  const merged = mergeIntoIndex(disk, index);
  assert.deepEqual(merged.directories.find((d) => d.name === '写作').items, ['a.md', 'b.md']);
  assert.ok(merged.directories.some((d) => d.name === '实验'));
});
test('pickFallbackIndex: 主索引坏则用备份，都坏则扫描', () => {
  const disk = { dirs: ['写作'], files: [{ dir: '写作', filename: 'a.md' }] };
  const r1 = pickFallbackIndex(null, { version: 1, directories: [] }, disk);
  assert.equal(r1.source, 'backup');
  assert.ok(r1.warning);
  const r2 = pickFallbackIndex(null, null, disk);
  assert.equal(r2.source, 'scan');
  assert.ok(r2.warning);
});
