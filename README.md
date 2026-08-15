# PromptShelf · 提示词架

> HanaAgent 侧栏插件：把提示词、常用文本存成 Markdown 文件，点一下就复制走。

## 特性

- **Markdown 即数据**：一个词条一个 `.md` 文件，天然可进 Git、可备份
- **胶囊卡片**：单击展开预览，**双击复制正文**（不带 frontmatter）
- **右键菜单**：词条（编辑 / 复制 / 发送给 Agent / 打开 / 复制路径 / 删除 / 重命名）；目录（新建 / 重命名 / 删除）
- **拖动排序**：目录与词条顺序随意拖，重启不丢
- **Agent 工具**：6 个工具，让 Agent 直接搜索、读取、写入提示词
- **主题自适应**：跟随 Hana 明暗主题，滚动条与提示圈低干扰融入界面

## 安装

1. 从 Release 下载 `prompt-shelf.zip`
2. Hana 设置 → 插件 → 安装，选择 zip；或解压到用户插件目录
3. 打开插件 widget，选择数据目录完成初始化

## 快速上手

1. **初始化**：选一个数据目录（建议放同步盘或 Git 仓库）
2. 空白区右键 → **新建目录**
3. 目录内右键 → **新建卡片**，或让 Agent 用工具写入第一条
4. 单击胶囊展开预览，**双击复制正文**
5. 按住拖动排序，顺序持久化在 `.order.json`

## 数据格式

```
数据目录/
├── 目录A/
│   ├── 词条1.md
│   └── 词条2.md
└── .order.json      ← 排序索引（损坏自动重建，原文件保留为 .corrupt-*）
```

词条是带 frontmatter 的 Markdown，`---` 之后的部分就是要复制的内容。

## Agent 工具

| 工具 | 说明 |
|---|---|
| `search-prompts` | 标题 + 正文关键词搜索 |
| `read-prompt` | 按 `<目录>/<文件>.md` 读全文 |
| `create-prompt` | 新建词条（目录不存在自动创建） |
| `update-prompt` | 替换正文，保留 frontmatter |
| `delete-prompt` | 删除词条 |
| `rebuild-order-index` | 从磁盘重建排序索引 |

## 开发

```bash
npm install
npm run build:ui    # 构建 assets/panel.js / panel.css
npm run typecheck
npm test            # 核心逻辑（排序/合并/标题）单元测试
```

架构与文件说明见 [基础架构.md](./基础架构.md)。
