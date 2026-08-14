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
