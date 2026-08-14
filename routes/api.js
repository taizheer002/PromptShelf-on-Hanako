// routes/api.js
import { ShelfStore } from '../lib/store.js';
import { sendSessionMessage } from '@hana/plugin-runtime';

export default function registerPluginApiRoutes(app, ctx) {
  app.get('/api/state', (c) => {
    const store = ctx.pluginStore;
    return c.json(store?.getState() ?? { dataDir: null, indexHealthy: false, warning: '未初始化', directories: [] });
  });
  app.post('/api/action', async (c) => {
    const body = await c.req.json();
    const { type, ...args } = body;
    // init 是唯一允许在 store 未就绪（dataDir 未配置）时执行的动作，其余一律拒绝
    if (type !== 'init' && !ctx.pluginStore) return c.json({ ok: false, error: '未初始化' });
    const store = ctx.pluginStore; // init 时可能为 null，但 init handler 不引用它
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
      // Task 8：初始化。dataDir 写入配置（HanaPluginConfigStore.set，异步）后重建 ShelfStore
      // 并 load。校验前置：先用目标目录建临时 store 尝试 load，不可读时不落配置、不替换
      // 现有 store，避免失败后留下指向坏目录的配置（config 无属性访问，只能 await get/set）。
      'init': async () => {
        const dataDir = typeof args.dataDir === 'string' ? args.dataDir.trim() : '';
        if (!dataDir) return { ok: false, error: '数据目录无效' };
        const candidate = new ShelfStore(ctx, { dataDir });
        try {
          await candidate.load();
        } catch {
          return { ok: false, error: '数据目录不可读，请重新选择' };
        }
        try {
          await ctx.config.set('dataDir', dataDir);
        } catch {
          return { ok: false, error: '保存数据目录配置失败' };
        }
        ctx.pluginStore = candidate;
        return { ok: true };
      },
      // Task 6：把词条正文作为用户消息发送到当前会话。
      // 精确 API：@hana/plugin-runtime 的 sendSessionMessage(ctx, target, input)
      // （packages/plugin-runtime/src/index.ts L1247，内部走 bus 'session:send'）。
      // 定位「当前会话」：插件 route 请求级上下文只携带 agentId/principal，
      // 不含工作台 sessionId/sessionPath（详见 Task 6 报告 §1）；这里沿用
      // PLUGINS.md 写法 A 的约定，若宿主向插件运行时注入了会话身份
      // （ctx.sessionId / ctx.sessionRef）则直接发送，否则无法唯一定位，
      // 返回明确错误，不猜测会话。
      'send-to-agent': async () => {
        const entry = store.findEntry(args.path);
        if (!entry) return { ok: false, error: '词条不存在' };
        const sessionId = ctx.sessionId || ctx.sessionRef?.sessionId || null;
        const sessionPath = ctx.sessionPath || ctx.sessionRef?.sessionPath || ctx.sessionRef?.path || null;
        if (!sessionId && !sessionPath) {
          return { ok: false, error: '无法定位当前会话' };
        }
        const target = sessionId
          ? { sessionId, ...(sessionPath ? { sessionPath } : {}) }
          : { sessionPath };
        try {
          const result = await sendSessionMessage(ctx, target, { text: entry.content });
          if (result && result.accepted === false) {
            return { ok: false, error: '会话拒绝接收消息' };
          }
          return { ok: true };
        } catch (err) {
          return { ok: false, error: `发送失败：${err?.message ?? err}` };
        }
      },
    };
    const fn = handlers[type];
    if (!fn) return c.json({ ok: false, error: `未知动作 ${type}` });
    const r = await fn(c);
    // init 成功后 ctx.pluginStore 已重建，统一从这里取最新 state 回填给 UI
    return c.json({ ...r, state: ctx.pluginStore?.getState() ?? null });
  });
}
