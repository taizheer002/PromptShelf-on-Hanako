import { Fragment, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { hana } from '@hana/plugin-sdk';
import {
  Button,
  CardShell,
  EmptyState,
  HanaThemeProvider,
  TextInput,
  Textarea,
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

/** 拼接绝对路径（Windows 宿主接受正斜杠），如 D:/shelf/目录/词条.md */
function absPath(dataDir: string | null, rel: string): string {
  const base = (dataDir ?? '').replace(/[\\/]+$/, '');
  return rel ? `${base}/${rel}` : base;
}

/* ---- 菜单定义（顺序固定，见设计 v3 7.3） ---- */

type MenuItem = {
  key: string;
  label: string;
  danger?: boolean;
  disabled?: boolean;
  separatorBefore?: boolean;
};

const ENTRY_MENU: MenuItem[] = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
  { key: 'send', label: '发送给当前 Agent' },
  { key: 'open-default', label: '用默认应用打开' },
  { key: 'copy-path', label: '复制路径' },
  // 截图分享：宿主无对应能力（见 Task 6 报告 §2），置灰 + toast
  { key: 'screenshot', label: '截图分享', disabled: true },
  { key: 'delete', label: '删除', danger: true, separatorBefore: true },
  { key: 'rename', label: '重命名' },
];

const DIR_MENU: MenuItem[] = [
  { key: 'create-dir', label: '新建目录' },
  { key: 'create-prompt', label: '新建卡片' },
  { key: 'copy-path', label: '复制路径' },
  { key: 'delete-dir', label: '删除目录', danger: true, separatorBefore: true },
  { key: 'rename-dir', label: '重命名' },
];

type MenuState = {
  x: number;
  y: number;
  kind: 'entry' | 'dir';
  entry?: PromptEntry;
  dirName?: string;
};

type InlineForm =
  | { kind: 'create-dir'; anchorDir: string }
  | { kind: 'create-prompt'; dirName: string }
  | { kind: 'rename-entry'; entry: PromptEntry }
  | { kind: 'rename-dir'; dirName: string }
  | { kind: 'confirm-delete-entry'; entry: PromptEntry }
  | { kind: 'confirm-delete-dir'; dirName: string };

/* ---- 右键菜单 ---- */

function ContextMenu({
  menu,
  items,
  onSelect,
  onClose,
}: {
  menu: MenuState | null;
  items: MenuItem[];
  onSelect: (key: string) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // 打开时实测菜单真实尺寸（第一帧先渲染在视口外占位），超出视口底部/右侧
  // 时向上/向左翻转；极端情况下再钳制到边距，避免估算常量导致截断不可达
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useEffect(() => {
    if (!menu) {
      setPos(null);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const margin = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let left = menu.x;
    let top = menu.y;
    if (top + el.offsetHeight + margin > vh) {
      top = vh - el.offsetHeight - margin;
    }
    if (left + el.offsetWidth + margin > vw) {
      left = vw - el.offsetWidth - margin;
    }
    setPos({ left: Math.max(margin, left), top: Math.max(margin, top) });
  }, [menu]);

  useEffect(() => {
    if (!menu) return;
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    function onScroll() {
      onClose();
    }
    // 在菜单外右键 → 关闭（锚点自身的右键事件已 stopPropagation，不会走到这里）
    function onContextMenu(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('contextmenu', onContextMenu);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('contextmenu', onContextMenu);
    };
  }, [menu, onClose]);

  if (!menu) return null;

  return (
    <div
      ref={ref}
      className="ps-menu"
      style={pos ? { left: pos.left, top: pos.top } : { left: -9999, top: -9999 }}
      role="menu"
    >
      {items.map((item) => (
        <Fragment key={item.key}>
          {item.separatorBefore && <div className="ps-menu-sep" />}
          <button
            type="button"
            role="menuitem"
            aria-disabled={item.disabled || undefined}
            className={`ps-menu-item${item.danger ? ' ps-menu-item-danger' : ''}${item.disabled ? ' ps-menu-item-disabled' : ''}`}
            onClick={() => {
              onClose();
              onSelect(item.key);
            }}
          >
            {item.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}

/* ---- 内联表单（新建/重命名/删除确认，不用 alert） ---- */

const SUCCESS_TIPS: Record<InlineForm['kind'], string> = {
  'create-dir': '目录已创建',
  'create-prompt': '词条已创建',
  'rename-entry': '已重命名',
  'rename-dir': '目录已重命名',
  'confirm-delete-entry': '词条已删除',
  'confirm-delete-dir': '目录已删除',
};

function InlineForm({
  form,
  submit,
  done,
}: {
  form: InlineForm;
  submit: (payload: Record<string, unknown>) => Promise<{ ok: boolean; error?: string }>;
  done: () => void;
}) {
  const isDelete = form.kind === 'confirm-delete-entry' || form.kind === 'confirm-delete-dir';
  const initialName =
    form.kind === 'rename-entry'
      ? form.entry.title
      : form.kind === 'rename-dir'
        ? form.dirName
        : '';
  const [name, setName] = useState(initialName);
  const [content, setContent] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  async function run(payload: Record<string, unknown>) {
    setBusy(true);
    setError(null);
    const r = await submit(payload);
    setBusy(false);
    if (r.ok) {
      hana.toast.show({ message: SUCCESS_TIPS[form.kind], type: 'success' });
      done();
    } else {
      setError(r.error || '操作失败');
    }
  }

  function confirmPayload() {
    switch (form.kind) {
      case 'create-dir':
        return { type: 'create-dir', name: name.trim() };
      case 'create-prompt':
        return { type: 'create-prompt', directory: form.dirName, name: name.trim(), content };
      case 'rename-entry':
        return { type: 'rename-prompt', path: entryKey(form.entry), newName: name.trim() };
      case 'rename-dir':
        return { type: 'rename-dir', name: form.dirName, newName: name.trim() };
      case 'confirm-delete-entry':
        return { type: 'delete-prompt', path: entryKey(form.entry) };
      case 'confirm-delete-dir':
        return { type: 'delete-dir', name: form.dirName };
    }
  }

  const canSubmit = isDelete || name.trim().length > 0;

  return (
    <div className="ps-inline">
      {form.kind === 'create-prompt' && (
        <>
          <TextInput
            label="标题"
            placeholder="词条标题（自动生成 frontmatter）"
            value={name}
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            label="内容"
            placeholder="正文内容"
            className="ps-inline-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </>
      )}
      {form.kind === 'create-dir' && (
        <TextInput
          label="新目录名"
          placeholder="输入目录名"
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {(form.kind === 'rename-entry' || form.kind === 'rename-dir') && (
        <TextInput
          label={form.kind === 'rename-entry' ? '新名称' : '新目录名'}
          value={name}
          ref={nameRef}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {form.kind === 'confirm-delete-entry' && (
        <div className="ps-inline-hint">
          删除词条「{form.entry.title}」？此操作不可撤销。
        </div>
      )}
      {form.kind === 'confirm-delete-dir' && (
        <div className="ps-inline-hint">
          删除目录「{form.dirName}」？目录非空会被拒绝，请先清空词条。
        </div>
      )}
      {error && <div className="ps-inline-error">{error}</div>}
      <div className="ps-inline-row">
        {isDelete ? (
          <>
            <Button size="sm" variant="danger" loading={busy} onClick={() => run(confirmPayload())}>
              删除
            </Button>
            <Button size="sm" variant="ghost" onClick={done}>
              取消
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="primary"
              loading={busy}
              disabled={!canSubmit}
              onClick={() => run(confirmPayload())}
            >
              确定
            </Button>
            <Button size="sm" variant="ghost" onClick={done}>
              取消
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---- 主面板 ---- */

function Panel() {
  const [state, setState] = useState<ShelfState | null>(null);
  const [collapsedDirs, setCollapsedDirs] = useState<Set<string>>(new Set());
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [menu, setMenu] = useState<MenuState | null>(null);
  const [form, setForm] = useState<InlineForm | null>(null);

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

  /** POST /api/action；响应带 state 时回填 */
  async function postAction(payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string }> {
    try {
      const res = await hana.api.fetch('api/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string; state?: ShelfState };
      if (data.state) setState({ ...EMPTY_STATE, ...data.state });
      return { ok: data.ok === true, error: data.error };
    } catch {
      return { ok: false, error: '请求失败，请重载插件后重试' };
    }
  }

  function openMenu(e: ReactMouseEvent, kind: 'entry' | 'dir', entry?: PromptEntry, dirName?: string) {
    e.preventDefault();
    e.stopPropagation();
    setForm(null);
    setMenu({ x: e.clientX, y: e.clientY, kind, entry, dirName });
  }

  async function handleMenuSelect(key: string) {
    if (!menu) return;
    const { kind, entry, dirName } = menu;
    const dataDir = state?.dataDir ?? null;

    if (kind === 'entry' && entry) {
      const path = absPath(dataDir, entryKey(entry));
      switch (key) {
        case 'edit':
          // 宿主 resource.open 对 local-file 只区分 reveal 与非 reveal，'edit'
          // 与 'preview' 均落到默认应用打开；若宿主拒绝 edit 则回退 preview
          try {
            await hana.resources.open({ resource: { kind: 'local-file', path }, mode: 'edit' });
          } catch {
            try {
              await hana.resources.open({ resource: { kind: 'local-file', path }, mode: 'preview' });
            } catch {
              hana.toast.show({ message: '无法打开文件', type: 'error' });
            }
          }
          break;
        case 'copy':
          await hana.clipboard.writeText(entry.content);
          hana.toast.show({ message: '已复制正文', type: 'success' });
          break;
        case 'send': {
          const r = await postAction({ type: 'send-to-agent', path: entryKey(entry) });
          hana.toast.show({
            message: r.ok ? '已发送到当前会话' : r.error || '发送失败',
            type: r.ok ? 'success' : 'error',
          });
          break;
        }
        case 'open-default':
          try {
            await hana.resources.open({ resource: { kind: 'local-file', path }, mode: 'preview' });
          } catch {
            hana.toast.show({ message: '无法打开文件', type: 'error' });
          }
          break;
        case 'copy-path':
          await hana.clipboard.writeText(path);
          hana.toast.show({ message: '已复制路径', type: 'success' });
          break;
        case 'screenshot':
          hana.toast.show({ message: '暂不支持', type: 'info' });
          break;
        case 'delete':
          setForm({ kind: 'confirm-delete-entry', entry });
          break;
        case 'rename':
          setForm({ kind: 'rename-entry', entry });
          break;
      }
      return;
    }

    if (kind === 'dir' && dirName) {
      const path = absPath(dataDir, dirName);
      switch (key) {
        case 'create-dir':
          setForm({ kind: 'create-dir', anchorDir: dirName });
          break;
        case 'create-prompt':
          setForm({ kind: 'create-prompt', dirName });
          break;
        case 'copy-path':
          await hana.clipboard.writeText(path);
          hana.toast.show({ message: '已复制路径', type: 'success' });
          break;
        case 'delete-dir':
          setForm({ kind: 'confirm-delete-dir', dirName });
          break;
        case 'rename-dir':
          setForm({ kind: 'rename-dir', dirName });
          break;
      }
    }
  }

  /** 表单是否锚定在该目录行（用于决定渲染位置） */
  function formAnchoredAtDir(f: InlineForm, dirName: string): boolean {
    switch (f.kind) {
      case 'create-dir':
        return f.anchorDir === dirName;
      case 'create-prompt':
      case 'rename-dir':
      case 'confirm-delete-dir':
        return f.dirName === dirName;
      default:
        return false;
    }
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

    if (!hasEntries && !form) {
      return (
        <EmptyState
          title="架子上还没有词条"
          description="右键目录行可以新建卡片，或通过工具写入第一个提示词。"
        />
      );
    }

    return (
      <div className="ps-shelf">
        {state.directories.map((dir) => {
          const collapsed = collapsedDirs.has(dir.name);
          const dirForm = form && formAnchoredAtDir(form, dir.name) ? form : null;
          return (
            <section key={dir.name} className="ps-dir">
              <button
                type="button"
                className="ps-dir-head"
                onClick={() => toggleDir(dir.name)}
                onContextMenu={(e) => openMenu(e, 'dir', undefined, dir.name)}
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
              {dirForm && (
                <InlineForm form={dirForm} submit={postAction} done={() => setForm(null)} />
              )}
              {!collapsed && (
                <div className="ps-pills">
                  {dir.entries.map((entry) => {
                    const key = entryKey(entry);
                    const expanded = expandedKeys.has(key);
                    const entryForm =
                      form && (form.kind === 'rename-entry' || form.kind === 'confirm-delete-entry') && entryKey(form.entry) === key
                        ? form
                        : null;

                    if (entryForm) {
                      return (
                        <InlineForm key={key} form={entryForm} submit={postAction} done={() => setForm(null)} />
                      );
                    }

                    if (expanded) {
                      return (
                        <div key={key} className="ps-card">
                          <button
                            type="button"
                            className="ps-card-head"
                            onClick={() => toggleEntry(key)}
                            onContextMenu={(e) => openMenu(e, 'entry', entry)}
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
                        onContextMenu={(e) => openMenu(e, 'entry', entry)}
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
        description="提示词架：右键词条/目录操作，单击胶囊展开预览，点标题栏或 × 收起。"
        footer={notice ? <span className="ps-notice">{notice}</span> : undefined}
      >
        {renderBody()}
        <ContextMenu
          menu={menu}
          items={menu?.kind === 'entry' ? ENTRY_MENU : DIR_MENU}
          onSelect={handleMenuSelect}
          onClose={() => setMenu(null)}
        />
      </CardShell>
    </HanaThemeProvider>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Panel />);
