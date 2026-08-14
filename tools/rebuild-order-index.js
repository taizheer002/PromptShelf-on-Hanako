// tools/rebuild-order-index.js
export const name = 'rebuild-order-index';
export const description = '重建排序索引：按磁盘扫描重建 .order.json；keepCorrupt 为 true 时保留损坏索引副本';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Rebuild order index (keepCorrupt=${input.keepCorrupt !== false})`,
    ruleId: 'promptshelf-rebuild-index',
  }),
};
export const parameters = {
  type: 'object',
  properties: {
    keepCorrupt: { type: 'boolean', description: '重建前是否将损坏索引保留为 .corrupt 副本，默认 true' },
  },
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.rebuildIndex(input.keepCorrupt !== false);
  return { content: [{ type: 'text', text: r.ok ? '索引已重建' : r.error }] };
}
