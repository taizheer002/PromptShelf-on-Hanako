import { ShelfStore } from './lib/store.js';

export default class PromptShelfPlugin {
  async onload() {
    const ctx = this.ctx;
    const dataDir = await ctx.config?.get?.('dataDir');
    ctx.pluginStore = new ShelfStore(ctx, { dataDir });
    if (dataDir) {
      await ctx.pluginStore.load().catch((err) => {
        ctx.log?.warn?.('PromptShelf load failed:', err);
      });
    }
    ctx.log?.info?.('PromptShelf loaded');
  }

  async onunload() {
    await this.ctx.pluginStore?.flushNow().catch(() => {});
  }
}
