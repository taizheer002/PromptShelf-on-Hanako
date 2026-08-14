# PromptShelf on HanaAgent 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现 PromptShelf 插件：右侧侧栏 widget 管理个人提示词库（胶囊卡片、目录折叠、拖动排序、双击复制、右键对齐原生操作、Agent 六把工具），数据为 Markdown 文件 + 自愈排序索引。

**Architecture:** 三层。UI 层为 React iframe（widget 唯一形态，`HanaThemeProvider mode="inherit"` 跟随平台主题），通过 `hana.api.fetch` 调插件路由；逻辑层为 server 侧 Node（routes + tools + lib，内存数组为真相源，原子写 + 写时备份 + 500ms 拖动防抖）；磁盘层为用户指定数据目录（文件夹=次级目录、.md=词条、.order.json 主索引 + .bak 备份 + 三级 fallback）。

**Tech Stack:** React 18 + Vite（构建 iframe UI）、`@hana/plugin-sdk`、`@hana/plugin-components`、Node 内置 `node:test`（纯逻辑单测）、无第三方运行时依赖。

**Spec:** `G:\hanako_desktop\prompt-shelf\docs\2026-08-15-prompt-shelf-design.md`（v3，已批准）

## Global Constraints

- 仅 widget，**manifest 不声明 page**；图标显示为宿主行为（顶边栏书桌 UI 图标左侧）
- `trust: "full-access"`；`capabilities: ["resource.read", "resource.write", "session"]`
- `ui.hostCapabilities: ["clipboard.writeText", "resource.pick", "resource.open"]`（`toast.show` 免授权不声明）
- UI 主题一律 `HanaThemeProvider mode="inherit"` + `@hana/plugin-components`，无自定义配色/字体
- 词条 = `<数据目录>/<目录名>/<文件名>.md`；frontmatter `title` + `created`；title 缺省取正文前三个 token（按 `[\s，。、；：,.!?]` 切分，取前 3 段，可含标点，超 24 字符截断加省略号）
- 排序索引 `.order.json`（`{version:1, directories:[{name, items:[]}]}`）+ `.bak`；fallback 链：主 → 备份 → mtime 扫描；损坏原文件保留为 `.order.json.corrupt-<YYYYMMDDHHmmss>`
- 写盘时机：仅拖动排序走 500ms 防抖；新建/删除/移动/编辑保存均为显式动作立即写盘
- 词条菜单顺序固定：编辑 / 复制 / 发送给当前 Agent / 用默认应用打开 / 复制路径 / 截图分享 / --- / 删除 / 重命名
- 目录菜单顺序固定：新建目录 / 新建卡片 / 复制路径 / --- / 删除目录（非空拒绝）/ 重命名
- Agent 工具六把：`search_prompts`、`read_prompt`（只读）；`create_prompt`、`update_prompt`、`delete_prompt`、`rebuild_order_index`（写，`sessionPermission.kind: "review"`）
- 警告条用 React 组件渲染，禁止 `alert`
- 数据目录访问一律 `ctx.resources`（ResourceRef `{ kind: "local-file", path }`），禁止 `fs` 直接写用户资源；`ctx.dataDir` 仅插件自有数据

## 核心类型与接口（全计划共用）

```js
// lib/types.js
// OrderIndex: { version: number, directories: [{ name: string, items: string[] }] }
// PromptEntry: { dir: string, filename: string, title: string, content: string, created: string|null }
// ShelfState: {
//   dataDir: string,
//   indexHealthy: boolean,
//   warning: string|null,
//   directories: [{ name: string, entries: PromptEntry[] }]
// }
```

```js
// lib/index-core.js —— 纯函数，零 Hana 依赖，node:test 可测
export function parseOrderJson(text)            // -> OrderIndex | null
export function validateOrderJson(value)        // -> boolean
export function scanDirectoryTree(dirPath)      // -> { dirs: string[], files: {dir, filename}[] }（mtime 排序，忽略 .order.json*）
export function mergeIntoIndex(disk, index)     // -> OrderIndex（磁盘存在但索引缺的按 mtime 补尾部）
export function pickFallbackIndex(main, backup, disk)  // -> { index, source: 'main'|'backup'|'scan', warning: string|null }
export function defaultTitleFromContent(content) // -> string（前三个 token 规则，见 Global Constraints）
export function buildPromptEntry({ dir, filename, content }) // -> PromptEntry
```

```js
// lib/store.js —— server 侧状态与写盘（依赖 ctx.resources，封装全部写盘策略）
export class ShelfStore {
  constructor(ctx, config)                    // ctx: plugin runtime ctx；config: { dataDir }
  async load()                                // -> ShelfState（执行 fallback 链，记录 warning）
  getState()                                  // -> ShelfState（内存快照）
  async createPrompt(dir, name, content)      // -> { ok, error? }
  async updatePrompt(relPath, content)        // -> { ok, error? }
  async deletePrompt(relPath)                 // -> { ok, error? }
  async renamePrompt(relPath, newName)        // -> { ok, error? }
  async movePrompt(relPath, targetDir)        // -> { ok, error? }
  async createDir(name)                       // -> { ok, error? }
  async renameDir(name, newName)              // -> { ok, error? }
  async deleteDir(name)                       // -> { ok, error? }（非空拒绝）
  async reorder(dirName, items)               // -> { ok, error? }（拖动重排/目录重排，内部防抖）
  async rebuildIndex(keepCorrupt = true)      // -> { ok, error? }
  flushNow()                                  // onunload 用：立即写完待写队列
  emitChanged()                               // bus.emit('promptshelf:changed')
}
```

写盘策略（`lib/store.js` 内部）：所有用户资源写盘走 `ctx.resources`。原子写 = 先 `ctx.resources.write({kind:'local-file', path: tmpPath}, content)`，再 `ctx.resources.rename(tmpRef, targetRef)` 覆盖；若资源层拒绝覆盖 rename，回退为「先写 `.bak` 再直写目标」，并记录到 `warning`（不中断流程）。

## Task 1: 脚手架 + Manifest 定制

**Files:**
- Create: `G:\hanako_desktop\prompt-shelf\` 下脚手架全套（manifest.json、package.json、README.md、index.js、routes/ui.js、ui/Panel.tsx、ui/panel.css、vite.config.ts、tsconfig.json、assets/ 构建输出）

**Interfaces:**
- Produces: 可安装的插件骨架；`routes/ui.js` 提供 `/widget` iframe shell（保留 `/page` 路由代码但 manifest 不声明 page）

- [ ] **Step 1: 生成脚手架**

Run（工作目录 `G:\hanako_desktop\hana源码\openhanako`，脚本用技能自带路径）:

```bash
python3 C:/Users/taizheer/.hanako/skills/hana-plugin-creator/scripts/create_hana_plugin.py "PromptShelf" --path G:/hanako_desktop --kind full --template professional-react --audience developer --sdk-mode bundled
```

若 `G:/hanako_desktop/prompt-shelf` 已存在（当前有 docs/），先 `git stash` docs 或用 `--force` 后从 git 恢复 docs（注意：`--force` 会删除目录，执行前确认 docs 已 commit）。

- [ ] **Step 2: 定制 manifest.json**

改写为（删 page，改 widget 元信息，补 capabilities/hostCapabilities）：

```json
{
  "id": "prompt-shelf",
  "name": "PromptShelf",
  "version": "0.1.0",
  "description": "个人提示词库：侧边栏胶囊管理，双击复制，右键编辑/发送给当前 Agent",
  "trust": "full-access",
  "capabilities": ["resource.read", "resource.write", "session"],
  "contributes": {
    "configuration": {
      "properties": {
        "dataDir": { "type": "string", "title": "提示词库数据目录" }
      }
    },
    "widget": {
      "title": { "zh": "提示词架", "en": "PromptShelf" },
      "icon": "<svg viewBox='0 0 24 24'><path fill='currentColor' d='M4 5h16v2H4zM4 10h16v2H4zM4 15h10v2H4z'/></svg>",
      "route": "/widget"
    }
  },
  "ui": {
    "hostCapabilities": ["clipboard.writeText", "resource.pick", "resource.open"]
  }
}
```

- [ ] **Step 3: 安装依赖并验证构建**

Run（`G:\hanako_desktop\prompt-shelf`）:

```bash
npm install
npm run build:ui
npm run typecheck
```

Expected: build 产出 `assets/panel.js` + `assets/panel.css`；typecheck 通过。

- [ ] **Step 4: 提交**

```bash
git add manifest.json package.json package-lock.json index.js routes ui vite.config.ts tsconfig.json README.md assets
git commit -m "chore: scaffold PromptShelf plugin (professional-react, full-access, widget-only)"
```

## Task 2: 数据层纯逻辑（index-core）+ 单测

**Files:**
- Create: `G:\hanako_desktop\prompt-shelf\lib\index-core.js`
- Create: `G:\hanako_desktop\prompt-shelf\test\index-core.test.js`
- Modify: `G:\hanako_desktop\prompt-shelf\package.json`（加 `"test": "node --test test/"`）

**Interfaces:**
- Consumes: 无（纯 Node）
- Produces: `lib/index-core.js` 全部导出（见核心类型节），供 Task 3 store 使用

- [ ] **Step 1: 写失败测试**

```js
// test/index-core.test.js
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
  assert.equal(defaultTitleFromContent('你是海洋生物学专家，请分析数据'), '你是海洋生物学专家，请分析数据'.slice(0, 24));
  assert.equal(defaultTitleFromContent('a b c d'), 'a b c');
});
test('scanDirectoryTree: 扫描目录树，忽略 .order.json*，按 mtime 排序', () => {
  const root = mkdtempSync(join(tmpdir(), 'ps-scan-'));
  mkdirSync(join(root, '写作'));
  mkdirSync(join(root, '实验'));
  writeFileSync(join(root, '写作', 'b.md'), '# b\nb');
  writeFileSync(join(root, '写作', 'a.md'), '# a\na');
  writeFileSync(join(root, '.order.json'), '{}');
  const disk = scanDirectoryTree(root);
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
```

- [ ] **Step 2: 运行确认失败**

Run: `npm test`（在 prompt-shelf 目录）
Expected: FAIL，`Cannot find module '../lib/index-core.js'`

- [ ] **Step 3: 实现 index-core.js**

```js
// lib/index-core.js
export function parseOrderJson(text) {
  try {
    const value = JSON.parse(text);
    return validateOrderJson(value) ? value : null;
  } catch { return null; }
}
export function validateOrderJson(value) {
  if (!value || typeof value !== 'object') return false;
  if (value.version !== 1) return false;
  if (!Array.isArray(value.directories)) return false;
  return value.directories.every((d) =>
    d && typeof d.name === 'string' && d.name.length > 0 &&
    Array.isArray(d.items) && d.items.every((i) => typeof i === 'string'));
}
export async function scanDirectoryTree(dirPath, fsLike) {
  // fsLike 默认 node:fs/promises，测试可注入；dirs 与 files 均按 mtime 升序
}
export function mergeIntoIndex(disk, index) { /* 见测试语义 */ }
export function pickFallbackIndex(main, backup, disk) {
  if (main) return { index: main, source: 'main', warning: null };
  if (backup) return { index: backup, source: 'backup', warning: '排序索引损坏，已回退到备份' };
  return { index: diskToIndex(disk), source: 'scan', warning: '排序索引与备份均损坏，已按时间重建' };
}
export function defaultTitleFromContent(content) {
  const tokens = (content || '').split(/[\s，。、；：,.!?]+/).filter(Boolean).slice(0, 3).join(' ');
  return (tokens || '未命名').slice(0, 24);
}
export function buildPromptEntry({ dir, filename, content }) { /* 解析 frontmatter title/created，缺 title 用 defaultTitleFromContent */ }
```

实现 `scanDirectoryTree` 时用 `fs.promises.readdir({ withFileTypes: true })` 递归（仅一层子目录 + 忽略 `.order.json*` 与点文件），`stat` 取 mtime；注入 `fsLike` 以便测试替身。

- [ ] **Step 4: 运行确认通过**

Run: `npm test`
Expected: 全部 PASS

- [ ] **Step 5: 提交**

```bash
git add lib/index-core.js test/index-core.test.js package.json
git commit -m "feat: index-core 纯逻辑（解析/校验/扫描/合并/fallback/title）带单测"
```

## Task 3: ShelfStore（server 侧状态与写盘）

**Files:**
- Create: `G:\hanako_desktop\prompt-shelf\lib\store.js`
- Modify: `G:\hanako_desktop\prompt-shelf\index.js`（onload 初始化 store + onunload flush）
- Modify: `G:\hanako_desktop\prompt-shelf\routes\ui.js`（保持不变，仅确认 /widget 存在）

**Interfaces:**
- Consumes: `lib/index-core.js`（parseOrderJson、scanDirectoryTree、mergeIntoIndex、pickFallbackIndex、buildPromptEntry、defaultTitleFromContent）
- Produces: `ShelfStore` 类（接口见核心类型节）；`index.js` 导出 `store` 供 routes/tools 通过 `ctx` 取用（`ctx.pluginStore`）

- [ ] **Step 1: 实现 store.js 骨架 + 加载/fallback/扫描**

```js
// lib/store.js
import { parseOrderJson, scanDirectoryTree, mergeIntoIndex, pickFallbackIndex, buildPromptEntry } from './index-core.js';

const ORDER_FILE = '.order.json';

export class ShelfStore {
  constructor(ctx, config) { this.ctx = ctx; this.dataDir = config.dataDir; this.state = null; this.pendingWrites = new Map(); }
  ref(path) { return { kind: 'local-file', path: this.join(path) }; }
  join(rel) { /* path.join(this.dataDir, rel) */ }
  async load() {
    const [mainText, backupText] = await Promise.all([
      this.tryRead(ORDER_FILE), this.tryRead(ORDER_FILE + '.bak'),
    ]);
    const disk = await scanDirectoryTree(this.dataDir, this.fsLike());
    const { index, source, warning } = pickFallbackIndex(
      parseOrderJson(mainText), parseOrderJson(backupText), disk);
    const merged = mergeIntoIndex(disk, index);
    this.state = { dataDir: this.dataDir, indexHealthy: source === 'main', warning, directories: [] };
    for (const d of merged.directories) {
      const dir = d.name;
      const entries = [];
      for (const filename of d.items) {
        const text = await this.tryRead(this.join(dir, filename));
        if (text == null) continue;
        entries.push(buildPromptEntry({ dir, filename, content: text }));
      }
      this.state.directories.push({ name: dir, entries });
    }
    this.emitChanged();
    return this.getState();
  }
  getState() { return this.state; }
  // ... 其余方法在后续步骤
}
```

- [ ] **Step 2: 实现写盘原语（原子写 + 备份 + corrupt 保留）**

```js
// store.js 内
async tryRead(rel) {
  try { const r = await this.ctx.resources.read(this.ref(rel)); return r.content?.toString('utf-8') ?? null; }
  catch { return null; }
}
async writeFileAtomic(rel, content) {
  const tmp = rel + '.tmp';
  await this.ctx.resources.write(this.ref(tmp), content);        // 写 tmp
  try { await this.ctx.resources.rename(this.ref(tmp), this.ref(rel)); }  // rename 覆盖
  catch {
    // 回退：先备份再直写
    const bak = rel + '.bak';
    try { await this.ctx.resources.rename(this.ref(rel), this.ref(bak)); } catch {}
    await this.ctx.resources.write(this.ref(rel), content);
    await this.tryDelete(tmp);
    this.state.warning = '资源层不支持原子 rename，已回退为备份+直写';
  }
}
async persistIndex() {
  await this.writeFileAtomic(ORDER_FILE, JSON.stringify(this.toOrderIndex(), null, 2));
  // 写时备份：成功后把主索引复制为 .bak
  try {
    const text = await this.tryRead(ORDER_FILE);
    await this.ctx.resources.write(this.ref(ORDER_FILE + '.bak'), text);
  } catch {}
}
async preserveCorrupt() {
  const ts = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
  try { await this.ctx.resources.rename(this.ref(ORDER_FILE), this.ref(`${ORDER_FILE}.corrupt-${ts}`)); } catch {}
}
```

- [ ] **Step 3: 实现词条/目录操作方法 + 防抖 reorder + rebuild**

实现要点（每个方法：先改内存 → 写盘 → emitChanged；返回 `{ ok, error? }`）：

- `createPrompt(dir, name, content)`：name 补 `.md` 后缀；目标已存在返回 `{ ok:false, error:'同名文件已存在' }`；目录不存在先 `mkdir`；写 `---\ntitle: <defaultTitleFromContent>\ncreated: <ISO 日期>\n---\n\n<content>`；内存并入
- `updatePrompt(relPath, content)`：读原文件保留 frontmatter，仅替换正文；`writeFileAtomic`
- `deletePrompt(relPath)`：`ctx.resources.delete` + 内存移除 + 索引项移除 + `persistIndex`
- `renamePrompt(relPath, newName)`：`rename` 文件 + 索引项更新（newName 补 `.md`）
- `movePrompt(relPath, targetDir)`：`rename` 到目标目录（目标已存在同名 → `{ ok:false, error:'重名' }`）+ 索引更新
- `createDir(name)` / `renameDir(name, newName)`（rename 文件夹 + 索引目录名更新）/ `deleteDir(name)`（非空拒绝）
- `reorder(dirName, items)`：更新内存 + `persistIndex` 走防抖：`this.debouncedPersist = debounce(() => this.persistIndex(), 500)`，方法体内只排期；`flushNow()` 清 pending 立即 `persistIndex`
- `rebuildIndex(keepCorrupt = true)`：先 `preserveCorrupt()`，再扫描重建 + `persistIndex` + 清 warning

- [ ] **Step 4: 接线 index.js**

```js
// index.js
import { ShelfStore } from './lib/store.js';
export default class PromptShelfPlugin {
  declare ctx: any;
  async onload() {
    const dataDir = this.ctx.config?.dataDir;
    this.ctx.pluginStore = new ShelfStore(this.ctx, { dataDir });
    if (dataDir) await this.ctx.pluginStore.load().catch(() => {});
    this.ctx.bus?.on?.('plugin.unload', () => this.ctx.pluginStore?.flushNow());
  }
}
```

- [ ] **Step 5: dev loop 冒烟验证**

Run: `plugin.dev.install`（source: `G:\hanako_desktop\prompt-shelf`，`allowFullAccess: true`）→ `plugin.dev.diagnostics` 确认加载成功 → 手动在配置里设 `dataDir` 指向临时目录 → `plugin.dev.reload` → 观察无异常

Expected: 加载成功；`ctx.pluginStore` 可用

- [ ] **Step 6: 提交**

```bash
git add lib/store.js index.js
git commit -m "feat: ShelfStore 状态与写盘（原子写/备份/corrupt 保留/防抖 reorder）"
```

## Task 4: Agent 工具六把

**Files:**
- Create: `G:\hanako_desktop\prompt-shelf\tools\search-prompts.js`
- Create: `G:\hanako_desktop\prompt-shelf\tools\read-prompt.js`
- Create: `G:\hanako_desktop\prompt-shelf\tools\create-prompt.js`
- Create: `G:\hanako_desktop\prompt-shelf\tools\update-prompt.js`
- Create: `G:\hanako_desktop\prompt-shelf\tools\delete-prompt.js`
- Create: `G:\hanako_desktop\prompt-shelf\tools\rebuild-order-index.js`
- Modify: `G:\hanako_desktop\prompt-shelf\manifest.json`（加 `dev.scenarios`）
- Delete: `G:\hanako_desktop\prompt-shelf\tools\create-note.js`（脚手架示例）

**Interfaces:**
- Consumes: `ctx.pluginStore`（Task 3）；`ctx.config.dataDir`
- Produces: 六个 `prompt-shelf_*` 工具；`manifest.dev.scenarios` smoke test

- [ ] **Step 1: 实现只读工具**

```js
// tools/search-prompts.js
export const name = 'search-prompts';
export const description = '搜索提示词库：按关键词匹配词条标题与正文，返回目录/文件名/标题/摘要';
export const sessionPermission = { kind: 'readOnly' };
export const parameters = {
  type: 'object',
  properties: { query: { type: 'string', description: '关键词，留空返回全部' } },
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化（缺少 dataDir 配置）' }] };
  const q = (input.query || '').toLowerCase();
  const hits = [];
  for (const d of store.getState().directories)
    for (const e of d.entries)
      if (!q || e.title.toLowerCase().includes(q) || e.content.toLowerCase().includes(q))
        hits.push({ dir: d.name, file: e.filename, title: e.title, snippet: e.content.slice(0, 80) });
  return { content: [{ type: 'text', text: JSON.stringify(hits, null, 2) }] };
}
```

`read-prompt.js` 同构：`sessionPermission = { kind: 'readOnly' }`，`parameters` 为 `{ path: string }`（`<目录>/<文件.md>` 相对路径），返回全文。数据目录未配置时统一返回错误文案。

- [ ] **Step 2: 实现写工具（review 权限）**

```js
// tools/create-prompt.js
export const name = 'create-prompt';
export const description = '新建提示词词条；目录不存在自动创建；重名报错';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Create prompt "${input.name || ''}" under "${input.directory || ''}"`,
    ruleId: 'promptshelf-create',
  }),
};
export const parameters = {
  type: 'object',
  properties: {
    directory: { type: 'string', description: '次级目录名' },
    name: { type: 'string', description: '词条名（不含 .md）' },
    content: { type: 'string', description: '提示词正文' },
  },
  required: ['directory', 'name', 'content'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.createPrompt(input.directory, input.name, input.content);
  return { content: [{ type: 'text', text: r.ok ? `已创建 ${input.directory}/${input.name}.md` : r.error }] };
}
```

`update-prompt.js` / `delete-prompt.js` 同构（参数 `path`）；`rebuild-order-index.js` 调 `store.rebuildIndex()`，参数可选 `keepCorrupt`（默认 true）。

- [ ] **Step 3: dev.scenarios**

manifest.json 追加：

```json
"dev": {
  "scenarios": [
    { "id": "tool-cycle", "steps": [
      { "invokeTool": { "name": "create-prompt", "input": { "directory": "测试", "name": "demo", "content": "hello" } } },
      { "expectToolText": "已创建" },
      { "invokeTool": { "name": "search-prompts", "input": { "query": "hello" } } },
      { "expectToolText": "demo" },
      { "invokeTool": { "name": "update-prompt", "input": { "path": "测试/demo.md", "content": "world" } } },
      { "invokeTool": { "name": "read-prompt", "input": { "path": "测试/demo.md" } } },
      { "expectToolText": "world" },
      { "invokeTool": { "name": "delete-prompt", "input": { "path": "测试/demo.md" } } },
      { "expectToolText": "已删除" }
    ]}
  ]
}
```

- [ ] **Step 4: 删除脚手架示例工具 + 冒烟**

Run: 删除 `tools/create-note.js` → `plugin.dev.reload` → `plugin.dev.runScenario`（tool-cycle，需 `allowDestructive: true`）
Expected: scenario 全绿

- [ ] **Step 5: 提交**

```bash
git add tools manifest.json
git commit -m "feat: Agent 工具六把 + dev scenario 闭环"
```

## Task 5: UI 骨架 + 胶囊列表

**Files:**
- Create: `G:\hanako_desktop\prompt-shelf\routes\api.js`（GET /state、POST /action）
- Modify: `G:\hanako_desktop\prompt-shelf\ui\Panel.tsx`（重写为 PromptShelf 界面）
- Modify: `G:\hanako_desktop\prompt-shelf\ui\panel.css`

**Interfaces:**
- Consumes: `ctx.pluginStore`；iframe 经 `hana.api.fetch('api/state')` / `hana.api.fetch('api/action', { method:'POST', body })`
- Produces: `routes/api.js` 的 `/state`、`/action` 两路由；Panel 渲染目录/词条两级结构

- [ ] **Step 1: routes/api.js**

```js
// routes/api.js
export default function registerPluginApiRoutes(app, ctx) {
  app.get('/api/state', (c) => {
    const store = ctx.pluginStore;
    return c.json(store?.getState() ?? { dataDir: null, indexHealthy: false, warning: '未初始化', directories: [] });
  });
  app.post('/api/action', async (c) => {
    const store = ctx.pluginStore;
    if (!store) return c.json({ ok: false, error: '未初始化' });
    const body = await c.req.json();
    const { type, ...args } = body;
    const handlers = {
      'create-prompt': () => store.createPrompt(args.directory, args.name, args.content),
      'update-prompt': () => store.updatePrompt(args.path, args.content),
      'delete-prompt': () => store.deletePrompt(args.path),
      'rename-prompt': () => store.renamePrompt(args.path, args.newName),
      'move-prompt': () => store.movePrompt(args.path, args.targetDir),
      'create-dir': () => store.createDir(args.name),
      'rename-dir': () => store.renameDir(args.name, args.newName),
      'delete-dir': () => store.deleteDir(args.name),
      'reorder': () => store.reorder(args.dirName, args.items),
      'rebuild': () => store.rebuildIndex(args.keepCorrupt !== false),
    };
    const fn = handlers[type];
    if (!fn) return c.json({ ok: false, error: `未知动作 ${type}` });
    const r = await fn();
    return c.json({ ...r, state: store.getState() });
  });
}
```

- [ ] **Step 2: 实现 Panel.tsx 数据加载 + 目录折叠 + 胶囊展开/收缩**

Panel.tsx 结构（用 `@hana/plugin-components`：`HanaThemeProvider`、`CardShell`、`List` 等；不引 renderer 内部）：

- `useEffect`：`hana.ready()`；`hana.ui.resize({ height: 480 })`；`fetchState()`
- `fetchState`：`hana.api.fetch('api/state')` → `setState`
- 状态：`collapsedDirs: Set<string>`（目录折叠）、`expandedEntries: Set<string>`（词条展开 key=`dir/filename`）
- 渲染：目录行（名称 + 折叠箭头 + 词条数）；词条胶囊（title，超长 CSS `text-overflow: ellipsis`）；单击展开卡片（正文预览 `<pre>`，右上角 × 按钮）；单击标题栏/× 均收缩（等效）
- 空态：未初始化 → 渲染初始化引导按钮（Task 8）；无词条 → EmptyState

- [ ] **Step 3: dev loop 目视验证**

Run: `plugin.dev.reload` → `plugin.dev.listSurfaces` 找 widget → 截图确认：胶囊渲染、目录折叠生效、展开/收缩两个入口都工作

- [ ] **Step 4: 提交**

```bash
git add routes/api.js ui/Panel.tsx ui/panel.css
git commit -m "feat: UI 骨架——目录折叠 + 胶囊展开/收缩（widget）"
```

## Task 6: 右键菜单 + 编辑 + 发送给当前 Agent

**Files:**
- Modify: `G:\hanako_desktop\prompt-shelf\ui\Panel.tsx`（右键菜单组件 + 动作分发）
- Modify: `G:\hanako_desktop\prompt-shelf\routes\api.js`（send-to-agent 动作）

**Interfaces:**
- Consumes: `/api/action` 已有 handlers；`hana.resources.open({ resource: { kind:'local-file', path }, mode: 'edit'|'preview' })`；`hana.clipboard.writeText`
- Produces: 词条/目录右键菜单，动作全部落 `/api/action`；「编辑」调预览栏；「发送给当前 Agent」走 server 会话

- [ ] **Step 1: 自定义右键菜单组件**

Panel.tsx 内实现 `ContextMenu`（定位在光标处，点击外部关闭，主题组件样式）：

词条菜单固定顺序：编辑 / 复制 / 发送给当前 Agent / 用默认应用打开 / 复制路径 / 截图分享 / --- / 删除 / 重命名
目录菜单固定顺序：新建目录 / 新建卡片 / 复制路径 / --- / 删除目录 / 重命名

菜单项行为映射：
- 编辑 → `hana.resources.open({ resource: { kind: 'local-file', path: <绝对路径> }, mode: 'edit' })`（路径由 state 的 dataDir + dir/filename 拼接；实现时若 `mode:'edit'` 不被宿主支持则用 `preview`，记录到开放问题）
- 复制 → `hana.clipboard.writeText(entry.content)` + `hana.toast.show`
- 发送给当前 Agent → `POST /api/action { type:'send-to-agent', path }`
- 用默认应用打开 / 截图分享 → 实现阶段探测宿主可用能力；无对应 host 能力时菜单项置灰并 `toast('暂不支持')`（对齐原则：有原生能力就用原生，没有就不造假）
- 复制路径 → `hana.clipboard.writeText(<绝对路径>)`
- 删除/重命名/移动 → 对应 action；删除前 `confirm` 二次确认（用主题 Dialog 组件，不用 `alert`；若 components 无 Dialog 则用内联确认行）
- 新建目录/新建卡片 → 内联输入表单（名称 + 内容 textarea）→ 对应 action
- 发送前把词条正文作为**用户消息**：server 侧用 `ctx.session.sendSessionMessage`（精确 API 见开放问题）发送到当前会话

- [ ] **Step 2: routes/api.js 加 send-to-agent**

```js
// routes/api.js 追加 handler
'send-to-agent': async () => {
  const store = ctx.pluginStore;
  const entry = store.findEntry(args.path);
  if (!entry) return { ok: false, error: '词条不存在' };
  // 定位当前会话并发送用户消息（实现时读 packages/plugin-runtime 源码确认：
  // 优先 ctx.session.sendSessionMessage({ sessionRef: currentSession, message: entry.content, role: 'user' })）
  return { ok: true };
},
```

- [ ] **Step 3: dev loop 验证**

Run: reload → 截图验证菜单顺序与外观；逐一验证：复制（剪贴板）、编辑（预览栏打开）、新建/删除/重命名、目录非空拒绝删除

- [ ] **Step 4: 提交**

```bash
git add ui/Panel.tsx routes/api.js
git commit -m "feat: 右键菜单（对齐原生顺序）+ 编辑预览栏 + 发送给当前 Agent"
```

## Task 7: 拖动排序 + 拖到会话区 + 跨目录移动

**Files:**
- Modify: `G:\hanako_desktop\prompt-shelf\ui\Panel.tsx`（HTML5 drag & drop 实现）
- Modify: `G:\hanako_desktop\prompt-shelf\routes\api.js`（无改动，复用 reorder/move-prompt）

**Interfaces:**
- Consumes: `/api/action` reorder、move-prompt；`store.reorder`（内部 500ms 防抖）
- Produces: 拖动交互（同目录重排、目录行重排、跨目录移动、拖到会话区）

- [ ] **Step 1: 同目录拖动重排**

- 词条 `draggable`；`onDragStart` 记 `{ dir, filename, index }`
- `onDragOver` 目标词条：计算插入位置，**先改本地 state（内存）即时反馈**，`onDrop` 时 `POST /api/action { type:'reorder', dirName, items }`
- 服务端 `reorder` 只更新内存 + 防抖持久化；本地 UI 已同步，服务端返回 state 用于对账

- [ ] **Step 2: 目录行拖动 + 跨目录移动**

- 目录行 `draggable`；目录间重排 → `reorder`（带目录数组的新顺序，store 支持 `reorder(null, dirNames)` 语义：`dirName` 为空表示重排目录）
- 词条拖到另一目录标题行 → `POST /api/action { type:'move-prompt', path, targetDir }`（server 执行 rename + 索引更新）；目标已有同名 → 返回 error → toast
- 拖到空白 → 无操作

- [ ] **Step 3: 拖到会话区**

- 词条拖到 widget 外的会话区：HTML5 drag 无法跨 iframe 出界，实现为：**拖拽时长按 > 300ms 且移出 widget 边界判定** → 把词条路径作为文件拖拽载荷发出（`dataTransfer.setData('text/uri-list', fileUrl)` 或等效 Hana 支持格式）；若宿主不支持跨 iframe 文件拖放，降级为 toast「已复制路径，粘贴发送给 Agent」
- 此步骤在 dev loop 中实测宿主行为后定稿（开放问题记录），先实现降级路径

- [ ] **Step 4: 验证 + 提交**

Run: reload → 截图/操作验证：重排后重开 widget 顺序保持；跨目录移动后文件物理位置变化；重名拒绝提示
Commit: `git add ui/Panel.tsx && git commit -m "feat: 拖动排序（防抖持久化）+ 跨目录移动 + 会话区拖放"`

## Task 8: 警告条 + 初始化引导 + 集成收尾

**Files:**
- Modify: `G:\hanako_desktop\prompt-shelf\ui\Panel.tsx`（警告条 + 引导页 + 重建按钮）
- Modify: `G:\hanako_desktop\prompt-shelf\routes\api.js`（init 动作：设 dataDir + load）
- Modify: `G:\hanako_desktop\prompt-shelf\manifest.json`（configuration 已有 dataDir，无需改）

**Interfaces:**
- Consumes: `hana.resources.pick()`；`/api/action init`；store.rebuildIndex

- [ ] **Step 1: 警告条**

- state 有 `warning` 或 `indexHealthy === false` → 顶部渲染主题 Alert 提示条（文案 + 「重建索引」按钮 → `POST /api/action { type:'rebuild' }`）
- 写盘失败等运行期错误同样显示（store 更新 state.warning）

- [ ] **Step 2: 初始化引导**

- state 为未初始化（`dataDir: null`）→ 引导页：说明 + 「选择数据目录」按钮 → `hana.resources.pick()` 拿路径 → `POST /api/action { type:'init', dataDir }` → store 写入 `ctx.config.dataDir`（通过 `ctx.config.update` 或 manifest 配置写回，实现时按 runtime 配置 API 确认）→ load()

- [ ] **Step 3: 集成验证清单（手动走查）**

- [ ] 首次打开引导 → 选目录 → 空库提示新建
- [ ] 新建目录/卡片 → 文件系统出现对应文件夹与 md
- [ ] 编辑 → 预览栏打开 → 改正文 → 保存 → UI 刷新看到新内容
- [ ] 双击复制 → 粘贴内容正确
- [ ] 发送给当前 Agent → 对话出现该提示词
- [ ] 拖动重排 → 重开 widget 顺序保持
- [ ] 手动损坏 `.order.json` → 警告条 + fallback 备份；同时损坏 → mtime 排序 + 重建按钮 + `.corrupt-*` 保留
- [ ] 删除非空目录 → 拒绝
- [ ] 主题切换（浅/深）→ UI 跟随

- [ ] **Step 4: 提交**

```bash
git add ui/Panel.tsx routes/api.js
git commit -m "feat: 警告条 + 初始化引导 + 集成验证"
```

## Self-Review 记录

- **Spec 覆盖**：v3 设计 14 节中：形态（Task 1）、数据模型（Task 2/3）、数据流（Task 3/5/6/7）、健壮性（Task 3/8）、UI 交互 7.2-7.4（Task 5/6/7）、警告条 7.5（Task 8）、Agent 工具（Task 4）、Manifest（Task 1）、初始化（Task 8）、测试策略（贯穿 + Task 8 清单）、实现顺序（Task 1→8 对齐第 12 节）。范围外项未进任何任务。
- **占位符扫描**：无 TBD/TODO；「实现时确认」仅出现在宿主能力探测处（send-to-agent 精确 API、resource.open edit mode、跨 iframe 拖放、config 写回方式），均有明确 fallback 行为，不属于占位。
- **类型一致性**：`ShelfStore` 方法签名在 Task 3 定义，Task 4/5/6/7 全部引用同一签名；`OrderIndex`/`ShelfState`/`PromptEntry` 在头部定义，Task 2/3 实现与之一致；action type 命名（create-prompt/update-prompt/delete-prompt/rename-prompt/move-prompt/create-dir/rename-dir/delete-dir/reorder/rebuild/init/send-to-agent）在 Task 5/6/7/8 间一致。
