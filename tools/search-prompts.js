// tools/search-prompts.js
import { parseFrontmatter } from '../lib/index-core.js';

export const name = 'search-prompts';
export const description = '搜索提示词库：按关键词匹配词条标题与正文，返回目录/文件名/标题/摘要';
export const sessionPermission = { kind: 'readOnly' };
export const parameters = {
  type: 'object',
  properties: { query: { type: 'string', description: '关键词，留空返回全部' } },
};
export async function execute(input, ctx) {
  const store = ctx.pluginStore;
  if (!store?.getState()) return { content: [{ type: 'text', text: 'PromptShelf 未初始化（缺少 dataDir 配置）' }] };
  const q = (input.query || '').toLowerCase();
  const hits = [];
  for (const d of store.getState().directories)
    for (const e of d.entries)
      if (!q || e.title.toLowerCase().includes(q) || e.content.toLowerCase().includes(q))
        // 摘要取去掉 frontmatter 后的正文前 80 字，不把 title:/created: 泄漏进搜索结果
        hits.push({ dir: d.name, file: e.filename, title: e.title, snippet: parseFrontmatter(e.content).body.slice(0, 80) });
  return { content: [{ type: 'text', text: JSON.stringify(hits, null, 2) }] };
}
