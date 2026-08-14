# 终审修复波报告（final-fix-report）

- 日期：2026-08-15
- 范围：终审 5 个必修项 F1-F5（I-1 / I-2 / I-3 / I-4 / Task 8 M1）
- 基线：HEAD = 0c5e21a（master）
- 约束遵守：未派发 subagent；未改动 5 项之外逻辑（拖动排序其他逻辑、菜单结构、设计文案原样）；未引入新 npm 依赖

## F1（I-1 标题链路断裂）

**改了哪些函数**

- `lib/store.js · createPrompt(dir, name, content)`
  - 标题取 `const title = name ? name : defaultTitleFromContent(content)`，frontmatter 写 `title: ${title}`；filename 仍 `ensureMd(name)`。
  - name 含空格/中文时 title 原样进入 frontmatter，不再只当文件名。
  - 配合 F4：目录校验收紧为单段校验；name 为空（未指定）放行，标题回退正文默认标题。
- `lib/store.js · renamePrompt(relPath, newName)`
  - 改名后读原文件 → `splitFrontmatter` 重拼：head 存在时用 `head.replace(/^title:.*$/m, ...)` 仅替换 title 行（created 等其余行原样保留）；head 为空时补建 `---\ntitle: <newName>\ncreated: <entry.created 或今日>\n---\n\n`。
  - `Object.assign(entry, buildPromptEntry({ dir, filename: newFilename, content: text }))` 刷新 entry.title / filename / created，胶囊显示名与文件改名一致。

**测试**（新增 `test/store-title.test.js`，node:test + 假 ctx：fake ctx.resources 用内存 Map 实现 read/write/rename/mkdir/delete（`{ kind:'local-file', path }` → Buffer），fsLike 由 Map 推导目录树，ShelfStore 零磁盘依赖）：

- createPrompt 指定 name（含空格/中文）→ frontmatter `title: <name>` 且 entry.title == name ✅
- createPrompt 不指定 name（空串）→ title == `defaultTitleFromContent(content)`，frontmatter 一致 ✅
- renamePrompt 后 entry.title 与 frontmatter title 都更新为新名、created 保留、旧文件消失 ✅

## F2（I-2 = Task 7 M1 贴边误触发）

**改了哪些函数**

- `ui/Panel.tsx · finishDrag()`：会话区判定从四边收敛为仅左缘——
  `pos.x <= DRAG_EDGE_MARGIN && pos.y >= 0 && pos.y <= window.innerHeight`。
  其余三边不再触发「已复制路径」降级（会话区在 widget 左侧，右/上/下贴边是 widget 内部操作，不应误判）。

## F3（I-3 = copy/send 带 frontmatter）

**改了哪些函数**

- `ui/Panel.tsx · handleMenuSelect()` case 'copy'：`hana.clipboard.writeText(stripFrontmatter(entry.content))`（复用组件内已有 stripFrontmatter，与展开预览同一实现）。
- `routes/api.js · send-to-agent handler`：发送正文改为 `parseFrontmatter(entry.content).body`，frontmatter 不进会话消息。
- `tools/search-prompts.js · execute()`：snippet 改为 `parseFrontmatter(e.content).body.slice(0, 80)`，title:/created: 不再泄漏进搜索结果。
- `lib/index-core.js`：`parseFrontmatter` 由内部函数加 `export`，作为服务端唯一剥离函数复用（store 的 splitFrontmatter 保留写盘用途，UI 的 stripFrontmatter 为 iframe 内联版，不跨端 import）。

**说明**：brief/manifest 文案里的「双击复制」在现实现中不存在——胶囊是「单击展开预览」（正文展示早已用 stripFrontmatter），复制入口仅右键「复制」；该入口已剥离，双击路径无代码可改，不另造功能。

## F4（I-4 路径分隔符校验）

**改了哪些函数**

- `lib/store.js` 新增 `isValidPathSegment(input)`：单路径段校验，额外拒绝 `/`、`\`、`:`、前导 `.`（空串/`\0` 同样拒绝）。
- `lib/store.js` 新增 `splitValidRel(relPath)`：`isValidPathInput` 通用校验 + `splitRelPath` 后校验 dir/filename 非空、filename 段不含 `/`、`\`、`:`；非法返回 null。
- 逐方法接入，非法统一返回 `{ ok:false, error:'非法路径' }`：
  - `createPrompt`：dir 用 segment；name 空放行否则 segment。
  - `renamePrompt`：relPath 用 splitValidRel；newName 用 segment。
  - `movePrompt`：relPath 用 splitValidRel；targetDir 用 segment。
  - `updatePrompt` / `deletePrompt`：relPath 用 splitValidRel。
  - `createDir` / `renameDir` / `deleteDir`：单段 segment。
  - `findEntry`：splitValidRel，非法返回 null（send-to-agent 同链受益）。
- `isValidPathInput` 保留（多段 relPath 通用校验，防绝对路径/`..` 穿越）。

**测试**：store-title.test.js 末组断言 `a/b`、`a\b`、`a:b`、`.hidden`、目录含分隔符、relPath filename 含分隔符均拒绝 ✅

## F5（Task 8 M1 首开横幅重复）

**改了哪些函数**

- `ui/Panel.tsx · WarningBar`：`showWarning = !!dataDir && !showIndex && !!warning`（加 `!!dataDir` 门）。未初始化首屏只显示引导页 EmptyState，不叠 fallback 警告横幅。
- `routes/api.js · GET /api/state` fallback：`warning: '未初始化'` → `warning: null`（双保险，同验收语义）。

## 验证结果

| 项目 | 结果 |
| --- | --- |
| `npm run build:ui` | ✅ vite build 成功（panel.js / panel.css 产物更新） |
| `npm run typecheck` | ✅ tsc --noEmit 0 错误 |
| `npm test` | ✅ 11/11 通过（原 7 + 新增 store-title 4） |
| `node --check lib/store.js routes/api.js tools/search-prompts.js` | ✅ 语法通过 |

## 提交

单个 commit，含：lib/index-core.js、lib/store.js、routes/api.js、tools/search-prompts.js、ui/Panel.tsx、test/store-title.test.js、assets/panel.js、assets/panel.css、本报告。
