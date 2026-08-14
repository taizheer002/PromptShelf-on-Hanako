// routes/api.js
import { sendSessionMessage } from '@hana/plugin-runtime';

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
    return c.json({ ...r, state: store.getState() });
  });
}
