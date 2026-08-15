// tools/delete-dir.js
export const name = 'delete-dir';
export const description = '删除目录（递归删除其中所有词条），确认后不可恢复；目录不存在报错';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Delete directory "${input.name || ''}" and all prompts inside it`,
    ruleId: 'promptshelf-delete-dir',
  }),
};
export const parameters = {
  type: 'object',
  properties: {
    name: { type: 'string', description: '目录名（如 写作、实验）' },
  },
  required: ['name'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.deleteDir(input.name);
  return { content: [{ type: 'text', text: r.ok ? `已删除目录 ${input.name}` : r.error }] };
}
