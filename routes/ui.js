
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadPanelAssets() {
  // routes/ 的上一级是插件根目录；assets 由 vite 构建产出
  const pluginDir = path.resolve(__dirname, "..");
  const js = fs.readFileSync(path.join(pluginDir, "assets", "panel.js"), "utf-8");
  const css = fs.readFileSync(path.join(pluginDir, "assets", "panel.css"), "utf-8");
  return { js, css };
}

export default function registerPluginUiRoutes(app, ctx) {
  app.get("/page", (c) => c.html(renderShell(c, ctx, "page")));
  app.get("/widget", (c) => c.html(renderShell(c, ctx, "widget")));
}

function renderShell(c, ctx, surface) {
  const hanaCss = c.req.query("hana-css") || "";
  const theme = c.req.query("hana-theme") || "inherit";
  // assets 全部内联：widget iframe 只发一个文档请求（带 loopback token，必然 200），
  // 不再依赖 /assets/* 的凭证链路（hanako-todo-plugin 验证过的模式）。
  const { js, css } = loadPanelAssets();
  const title = "PromptShelf";

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  ${hanaCss ? `<link rel="stylesheet" href="${escapeAttr(hanaCss)}">` : ""}
  <style>${css}</style>
</head>
<body data-hana-theme="${escapeAttr(theme)}" data-surface="${surface}">
  <div id="root" data-surface="${surface}"></div>
  <script type="module">${js}</script>
</body>
</html>`;
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function escapeHtml(value) {
  return escapeAttr(value).replace(/>/g, "&gt;");
}
