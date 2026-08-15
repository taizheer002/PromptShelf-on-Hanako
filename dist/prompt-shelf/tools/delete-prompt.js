// tools/delete-prompt.js
export const name = 'delete-prompt';
export const description = '删除提示词词条；词条不存在报错';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Delete prompt "${input.path || ''}"`,
    ruleId: 'promptshelf-delete',
  }),
};
export const parameters = {
  type: 'object',
  properties: { path: { type: 'string', description: '词条相对路径，如 写作/论文开头.md' } },
  required: ['path'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.deletePrompt(input.path);
  return { content: [{ type: 'text', text: r.ok ? `已删除 ${input.path}` : r.error }] };
}
