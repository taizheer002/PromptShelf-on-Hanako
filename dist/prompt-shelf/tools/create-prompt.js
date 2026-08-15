// tools/create-prompt.js
export const name = 'create-prompt';
export const description = '新建提示词词条；目录不存在自动创建；重名报错';
export const sessionPermission = {
  kind: 'review',
  describeSideEffect: (input = {}) => ({
    kind: 'workspace_write',
    summary: `Create prompt "${input.name || ''}" under "${input.directory || ''}"`,
    ruleId: 'promptshelf-create',
  }),
};
export const parameters = {
  type: 'object',
  properties: {
    directory: { type: 'string', description: '次级目录名' },
    name: { type: 'string', description: '词条名（不含 .md）' },
    content: { type: 'string', description: '提示词正文' },
  },
  required: ['directory', 'name', 'content'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化' }] };
  const r = await store.createPrompt(input.directory, input.name, input.content);
  return { content: [{ type: 'text', text: r.ok ? `已创建 ${input.directory}/${input.name}.md` : r.error }] };
}
