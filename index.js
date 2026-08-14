
import {
  defineBusHandler,
  definePlugin,
  HANA_BUS_SKIP,
} from "@hana/plugin-runtime";

const statusHandler = defineBusHandler({
  type: "promptshelf:status",
  async handle(payload, ctx) {
    if (payload?.pluginId && payload.pluginId !== ctx.pluginId) return HANA_BUS_SKIP;
    return {
      ok: true,
      pluginId: ctx.pluginId,
      name: "PromptShelf",
    };
  },
});

export default definePlugin({
  async onload(ctx, { register }) {
    if (ctx.bus.handle) {
      register(ctx.bus.handle(statusHandler.type, (payload) => statusHandler.handle(payload, ctx)));
    }
    ctx.log.info("PromptShelf loaded");
  },

  async onunload(ctx) {
    ctx.log.info("PromptShelf unloaded");
  },
});
