import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { hana } from '@hana/plugin-sdk';
import {
  Button,
  CardShell,
  EmptyState,
  HanaThemeProvider,
} from '@hana/plugin-components';
import '@hana/plugin-components/styles.css';
import './panel.css';

type PromptEntry = {
  dir: string;
  filename: string;
  title: string;
  content: string;
  created: string | null;
};

type PromptDir = {
  name: string;
  entries: PromptEntry[];
};

type ShelfState = {
  dataDir: string | null;
  indexHealthy: boolean;
  warning: string | null;
  degraded: string | null;
  directories: PromptDir[];
};

const EMPTY_STATE: ShelfState = {
  dataDir: null,
  indexHealthy: false,
  warning: null,
  degraded: null,
  directories: [],
};

function entryKey(entry: PromptEntry): string {
  return `${entry.dir}/${entry.filename}`;
}

/** 展示用：剥离 frontmatter，只留正文预览（只读，不写回） */
function stripFrontmatter(content: string): string {
  const text = content ?? '';
  const m = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/.exec(text);
  return m ? text.slice(m[0].length) : text;
}

function Panel() {
  const [state, setState] = useState<ShelfState | null>(null);
  const [collapsedDirs, setCollapsedDirs] = useState<Set<string>>(new Set());
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  async function fetchState() {
    try {
      const res = await hana.api.fetch('api/state');
      const data = (await res.json()) as ShelfState;
      setState({ ...EMPTY_STATE, ...data });
    } catch {
      setState({ ...EMPTY_STATE, warning: '无法连接插件运行时，请重载插件后重试' });
    }
  }

  useEffect(() => {
    hana.ready();
    hana.ui.resize({ height: 480 });
    fetchState();
  }, []);

  function toggleDir(name: string) {
    setCollapsedDirs((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  function toggleEntry(key: string) {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  const notice = state?.warning || state?.degraded || null;

  function renderBody() {
    if (!state) {
      return <EmptyState title="加载中…" description="正在读取提示词架" />;
    }

    if (!state.dataDir) {
      return (
        <EmptyState
          title="提示词架尚未初始化"
          description="选择一个数据目录作为提示词库的存放位置，之后词条会自动出现在这里。"
          action={
            <Button
              variant="primary"
              onClick={() =>
                hana.toast.show({ message: '初始化向导将在后续版本提供', type: 'info' })
              }
            >
              选择数据目录
            </Button>
          }
        />
      );
    }

    const hasEntries = state.directories.some((d) => d.entries.length > 0);

    if (!hasEntries) {
      return (
        <EmptyState
          title="架子上还没有词条"
          description="在数据目录里创建 Markdown 文件，或通过工具写入第一个提示词。"
        />
      );
    }

    return (
      <div className="ps-shelf">
        {state.directories.map((dir) => {
          const collapsed = collapsedDirs.has(dir.name);
          return (
            <section key={dir.name} className="ps-dir">
              <button
                type="button"
                className="ps-dir-head"
                onClick={() => toggleDir(dir.name)}
                aria-expanded={!collapsed}
              >
                <span className={`ps-dir-arrow${collapsed ? ' ps-dir-arrow-collapsed' : ''}`}>
                  ▾
                </span>
                <span className="ps-dir-name" title={dir.name}>
                  {dir.name}
                </span>
                <span className="ps-dir-count">{dir.entries.length}</span>
              </button>
              {!collapsed && (
                <div className="ps-pills">
                  {dir.entries.map((entry) => {
                    const key = entryKey(entry);
                    const expanded = expandedKeys.has(key);
                    if (expanded) {
                      return (
                        <div key={key} className="ps-card">
                          <button
                            type="button"
                            className="ps-card-head"
                            onClick={() => toggleEntry(key)}
                            title="点击收起"
                          >
                            <span className="ps-card-title">{entry.title}</span>
                          </button>
                          <pre className="ps-card-body">{stripFrontmatter(entry.content)}</pre>
                          <button
                            type="button"
                            className="ps-card-close"
                            onClick={() => toggleEntry(key)}
                            aria-label="收起"
                            title="收起"
                          >
                            ×
                          </button>
                        </div>
                      );
                    }
                    return (
                      <button
                        key={key}
                        type="button"
                        className="ps-pill"
                        onClick={() => toggleEntry(key)}
                        title={entry.title}
                      >
                        <span className="ps-pill-title">{entry.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <HanaThemeProvider mode="inherit" className="plugin-panel">
      <CardShell
        title="PromptShelf"
        description="提示词架：点胶囊展开预览，点标题栏或 × 收起。"
        footer={notice ? <span className="ps-notice">{notice}</span> : undefined}
      >
        {renderBody()}
      </CardShell>
    </HanaThemeProvider>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Panel />);
