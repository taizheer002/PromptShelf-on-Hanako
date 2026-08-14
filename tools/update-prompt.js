// tools/update-prompt.js
export const name = 'update-prompt';
export const description = '更新提示词词条正文（保留 frontmatter）；词条不存在报错';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Update prompt "${input.path || ''}"`,
    ruleId: 'promptshelf-update',
  }),
};
export const parameters = {
  type: 'object',
  properties: {
    path: { type: 'string', description: '词条相对路径，如 写作/论文开头.md' },
    content: { type: 'string', description: '新正文' },
  },
  required: ['path', 'content'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.updatePrompt(input.path, input.content);
  return { content: [{ type: 'text', text: r.ok ? `已更新 ${input.path}` : r.error }] };
}
