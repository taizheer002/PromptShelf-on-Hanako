// tools/read-prompt.js
export const name = 'read-prompt';
export const description = '读取提示词词条全文，按 <目录>/<文件.md> 相对路径定位';
export const sessionPermission = { kind: 'readOnly' };
export const parameters = {
  type: 'object',
  properties: { path: { type: 'string', description: '词条相对路径，如 写作/论文开头.md' } },
  required: ['path'],
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化（缺少 dataDir 配置）' }] };
  const entry = store.findEntry(input.path);
  if (!entry) return { content: [{ type: 'text', text: `未找到词条 ${input.path}` }] };
  return { content: [{ type: 'text', text: entry.content }] };
}
