import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type DragEvent as ReactDragEvent,
  type MouseEvent as ReactMouseEvent,
} from 'react';
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

/** 绝对路径 → file:// URI（拖拽载荷用；Windows 盘符路径拼成 file:///G:/…） */
function fileUriFromPath(path: string): string {
  const fp = path.replace(/\\/g, '/');
  return fp.startsWith('/') ? `file://${fp}` : `file:///${fp}`;
}

/* ---- 拖动排序（Task 7；设计 v3 7.4） ---- */

/** 判定「拖出 widget 边界」的边缘余量（px）：最后拖拽位置进入该区域视为拖到会话区 */
const DRAG_EDGE_MARGIN = 16;

/** 双击=复制（设计 v3 7.2）：单击延迟该毫秒数判定，双击时取消展开/收起切换 */
const DOUBLE_CLICK_DELAY_MS = 250;

/** 拖拽中的对象（含绝对路径，供会话区降级时复制） */
type DragInfo =
  | { kind: 'entry'; dir: string; filename: string; path: string }
  | { kind: 'dir'; name: string; path: string };

/** dragstart 时的本地快照：无有效落点 / 提交失败时还原 */
type DragSnapshot =
  | { kind: 'entry'; dir: string; entries: PromptEntry[] }
  | { kind: 'dir'; dirs: PromptDir[] };

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

/* 空白区右键：新建目录 / 新建卡片（空态与面板空白处均可） */
const BLANK_MENU: MenuItem[] = [
  { key: 'create-dir', label: '新建目录' },
  { key: 'create-prompt', label: '新建卡片' },
];

type MenuState = {
  x: number;
  y: number;
  kind: 'entry' | 'dir' | 'blank';
  entry?: PromptEntry;
  dirName?: string;
};

type InlineForm =
  | { kind: 'create-dir'; anchorDir?: string }
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
          确认删除目录「{form.dirName}」？将删除其中的所有词条，此操作不可撤销。
        </div>
      )}
      {error && <div className="ps-inline-error">{error}</div>}
      <div className="ps-inline-row">
        {isDelete ? (
          <>
            <Button size="sm" variant="danger" onClick={done}>
              取消
            </Button>
            <Button size="sm" variant="ghost" loading={busy} onClick={() => run(confirmPayload())}>
              确认删除
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

/* ---- 警告条（Task 8；设计 v3 7.5；用 CSS 变量随主题，不用 alert） ---- */

function WarningBar({
  state,
  rebuilding,
  onRebuild,
}: {
  state: ShelfState;
  rebuilding: boolean;
  onRebuild: () => void;
}) {
  const { dataDir, indexHealthy, warning, degraded } = state;
  // 索引损坏提示只在已初始化（dataDir 已配置）时有意义：未初始化时 /api/state 的
  // fallback 会带 indexHealthy:false，但那不是索引损坏，而是尚未初始化
  const showIndex = !!dataDir && indexHealthy === false;
  // 运行期 warning 同样只在已初始化时展示：未初始化首屏由引导页（EmptyState）承载，
  // 不再叠 fallback 警告横幅（Task 8 M1 首开横幅重复）
  const showWarning = !!dataDir && !showIndex && !!warning;
  const showDegraded = !!degraded;
  if (!showIndex && !showWarning && !showDegraded) return null;
  return (
    <div className="ps-alerts">
      {showIndex && (
        <div className="ps-alert ps-alert-warn">
          <span className="ps-alert-text">排序索引损坏，已恢复默认顺序</span>
          <Button size="sm" variant="secondary" loading={rebuilding} onClick={onRebuild}>
            重建索引
          </Button>
        </div>
      )}
      {showWarning && <div className="ps-alert ps-alert-warn">{warning}</div>}
      {showDegraded && (
        <div className="ps-alert ps-alert-degraded">写入已降级为备份+直写模式</div>
      )}
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
  // 警告条（Task 8）：重建索引请求中的 loading 态
  const [rebuilding, setRebuilding] = useState(false);
  // 拖动排序（Task 7）
  const [drag, setDrag] = useState<DragInfo | null>(null);
  const [dropTargetDir, setDropTargetDir] = useState<string | null>(null);
  const dragRef = useRef<DragInfo | null>(null); // 供 dragend/异步收尾读取的最新拖拽信息
  const dragSnapshotRef = useRef<DragSnapshot | null>(null);
  const dropHandledRef = useRef(false); // 本次拖拽是否已有有效落点（drop 已处理）
  const lastDragPosRef = useRef<{ x: number; y: number } | null>(null);

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
    // 高度传大值，宿主 clamp 到侧栏可用全高（viewportHeight - chrome）
    hana.ui.resize({ height: 9999 });
    fetchState();
  }, []);

  // Agent 工具/外部编辑写入后，聚焦或重新可见时刷新（设计 v3 5.5；
  // 宿主 route 上下文拿不到会话，工具写入走 bus 事件无订阅方，故用可见性兜底）
  useEffect(() => {
    function refreshOnVisible() {
      if (!document.hidden) fetchState();
    }
    document.addEventListener('visibilitychange', refreshOnVisible);
    window.addEventListener('focus', refreshOnVisible);
    return () => {
      document.removeEventListener('visibilitychange', refreshOnVisible);
      window.removeEventListener('focus', refreshOnVisible);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 兜底：拖拽结束事件冒泡到 window（源元素在拖拽中被重排也不丢失收尾）；
  // finishDrag 幂等（dragRef 为空即返回），与源元素上的 onDragEnd 双保险不冲突。
  useEffect(() => {
    function onWinDragEnd() {
      finishDrag();
    }
    window.addEventListener('dragend', onWinDragEnd);
    return () => window.removeEventListener('dragend', onWinDragEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // 折叠/展开时顺带刷新（宿主 widget 的 visibilitychange/focus 不触发，
    // 用用户交互兜底同步 Agent 工具/外部写入的最新内容）
    fetchState();
  }

  /* ---- 双击复制（设计 v3 7.2 遗漏补项） ---- */
  // 单击延迟 250ms 判定：双击时第二次 click 重启计时、dblclick 取消计时并复制，
  // 折叠态双击不展开、展开态双击保持展开，与「单击展开/收起」共存无闪烁
  const clickTimerRef = useRef<number | null>(null);

  function scheduleToggle(key: string) {
    if (clickTimerRef.current !== null) window.clearTimeout(clickTimerRef.current);
    clickTimerRef.current = window.setTimeout(() => {
      clickTimerRef.current = null;
      toggleEntry(key);
    }, DOUBLE_CLICK_DELAY_MS);
  }

  function handleDoubleClick(entry: PromptEntry) {
    if (clickTimerRef.current !== null) {
      window.clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
    }
    // 复制只带正文，frontmatter 不进剪贴板（与右键「复制」同语义）
    void hana.clipboard.writeText(stripFrontmatter(entry.content));
    hana.toast.show({ message: '已复制', type: 'success' });
  }

  useEffect(() => {
    return () => {
      if (clickTimerRef.current !== null) window.clearTimeout(clickTimerRef.current);
    };
  }, []);

  /* ---- 拖动排序（同目录/目录行即时重排，落点 POST；设计 v3 7.4） ---- */

  function startEntryDrag(e: ReactDragEvent<HTMLButtonElement>, entry: PromptEntry) {
    e.dataTransfer.effectAllowed = 'move';
    const path = absPath(state?.dataDir ?? null, entryKey(entry));
    try {
      // Firefox 需要 setData 才会启动拖拽；text/uri-list 留给宿主跨 iframe 文件拖放（Task 8 实测）
      e.dataTransfer.setData('text/plain', path);
      e.dataTransfer.setData('text/uri-list', fileUriFromPath(path));
    } catch {
      /* 个别环境限制 dataTransfer 格式，忽略 */
    }
    const info: DragInfo = { kind: 'entry', dir: entry.dir, filename: entry.filename, path };
    dragRef.current = info;
    setDrag(info);
    setDropTargetDir(null);
    dropHandledRef.current = false;
    lastDragPosRef.current = { x: e.clientX, y: e.clientY };
    const list = state?.directories.find((d) => d.name === entry.dir)?.entries;
    dragSnapshotRef.current = list ? { kind: 'entry', dir: entry.dir, entries: [...list] } : null;
    setMenu(null); // 拖拽期间不保留右键菜单，避免遮挡落点
  }

  function startDirDrag(e: ReactDragEvent<HTMLButtonElement>, dirName: string) {
    e.dataTransfer.effectAllowed = 'move';
    const path = absPath(state?.dataDir ?? null, dirName);
    try {
      e.dataTransfer.setData('text/plain', path);
      e.dataTransfer.setData('text/uri-list', fileUriFromPath(path));
    } catch {
      /* ignore */
    }
    const info: DragInfo = { kind: 'dir', name: dirName, path };
    dragRef.current = info;
    setDrag(info);
    setDropTargetDir(null);
    dropHandledRef.current = false;
    lastDragPosRef.current = { x: e.clientX, y: e.clientY };
    dragSnapshotRef.current = { kind: 'dir', dirs: state?.directories ? [...state.directories] : [] };
    setMenu(null);
  }

  /** 列表内重排：返回新数组；插入位置等于原位时返回 null（避免拖拽悬停抖动） */
  function reorderLocal<T>(list: T[], from: number, to: number): T[] | null {
    if (to === from || to === from + 1) return null;
    const next = [...list];
    const [item] = next.splice(from, 1);
    next.splice(to > from ? to - 1 : to, 0, item);
    return next;
  }

  function setDirEntries(dirName: string, entries: PromptEntry[]) {
    setState((prev) =>
      prev
        ? {
            ...prev,
            directories: prev.directories.map((d) => (d.name === dirName ? { ...d, entries } : d)),
          }
        : prev,
    );
  }

  /** 词条悬停：同目录词条即时重排；跨目录/目录拖拽不作为落点 */
  function dragOverEntry(e: ReactDragEvent<HTMLButtonElement>, entry: PromptEntry) {
    lastDragPosRef.current = { x: e.clientX, y: e.clientY };
    const info = dragRef.current;
    if (!info || info.kind !== 'entry' || info.dir !== entry.dir) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const list = state?.directories.find((d) => d.name === entry.dir)?.entries;
    if (!list) return;
    const from = list.findIndex((x) => x.filename === info.filename);
    const idx = list.findIndex((x) => x.filename === entry.filename);
    if (from === -1 || idx === -1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const before = e.clientY < rect.top + rect.height / 2;
    const next = reorderLocal(list, from, before ? idx : idx + 1);
    if (next) setDirEntries(entry.dir, next);
  }

  /** 同目录词条落下：以当前（已即时重排）顺序 POST reorder */
  function dropEntry(e: ReactDragEvent<HTMLButtonElement>, entry: PromptEntry) {
    const info = dragRef.current;
    if (!info || info.kind !== 'entry' || info.dir !== entry.dir) return;
    e.preventDefault();
    dropHandledRef.current = true;
    const list = state?.directories.find((d) => d.name === entry.dir)?.entries;
    if (!list) return;
    const items = list.map((x) => x.filename);
    void (async () => {
      const r = await postAction({ type: 'reorder', dirName: entry.dir, items });
      if (!r.ok) {
        restoreDragSnapshot();
        hana.toast.show({ message: r.error || '排序保存失败', type: 'error' });
      }
    })();
  }

  /** 目录标题行悬停：目录行拖拽 → 即时重排；词条跨目录拖拽 → 高亮为移动落点 */
  function dragOverDirHead(e: ReactDragEvent<HTMLButtonElement>, dirName: string) {
    lastDragPosRef.current = { x: e.clientX, y: e.clientY };
    const info = dragRef.current;
    if (!info) return;
    if (info.kind === 'dir') {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const list = state?.directories ?? [];
      const from = list.findIndex((d) => d.name === info.name);
      const idx = list.findIndex((d) => d.name === dirName);
      if (from === -1 || idx === -1) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const before = e.clientY < rect.top + rect.height / 2;
      const next = reorderLocal(list, from, before ? idx : idx + 1);
      if (next) setState((prev) => (prev ? { ...prev, directories: next } : prev));
    } else if (info.kind === 'entry' && info.dir !== dirName) {
      // 词条跨目录移动：仅标记落点，不本地移动（成败以服务端为准）
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      setDropTargetDir(dirName);
    }
  }

  /** 离开目录标题行：若移出该行则清除高亮（标题行内部子元素间移动不触发） */
  function dragLeaveDirHead(e: ReactDragEvent<HTMLButtonElement>) {
    const related = e.relatedTarget;
    if (related && e.currentTarget.contains(related as Node)) return;
    const name = e.currentTarget.dataset.dirname;
    setDropTargetDir((prev) => (prev === name ? null : prev));
  }

  /** 目录标题行落下：目录重排 / 词条跨目录移动 */
  function dropDirHead(e: ReactDragEvent<HTMLButtonElement>, dirName: string) {
    const info = dragRef.current;
    if (!info) return;
    e.preventDefault();
    dropHandledRef.current = true;
    setDropTargetDir(null);
    if (info.kind === 'dir') {
      const names = (state?.directories ?? []).map((d) => d.name);
      void (async () => {
        const r = await postAction({ type: 'reorder', dirName: null, items: names });
        if (!r.ok) {
          restoreDragSnapshot();
          hana.toast.show({ message: r.error || '排序保存失败', type: 'error' });
        }
      })();
    } else if (info.kind === 'entry' && info.dir !== dirName) {
      const oldKey = `${info.dir}/${info.filename}`;
      void (async () => {
        const r = await postAction({ type: 'move-prompt', path: oldKey, targetDir: dirName });
        if (!r.ok) {
          // 重名等失败：toast + 本地还原（快照为 dragstart 顺序）
          restoreDragSnapshot();
          hana.toast.show({ message: r.error || '移动失败', type: 'error' });
        } else {
          // 展开中的卡片跟随新目录（entryKey 含目录名）
          migrateExpandAfterMove(oldKey, `${dirName}/${info.filename}`);
        }
      })();
    }
  }

  /** 无有效落点 / 提交失败时，把本地顺序还原为 dragstart 快照 */
  function restoreDragSnapshot() {
    const snap = dragSnapshotRef.current;
    if (!snap) return;
    dragSnapshotRef.current = null;
    setState((prev) => {
      if (!prev) return prev;
      if (snap.kind === 'entry') {
        return {
          ...prev,
          directories: prev.directories.map((d) =>
            d.name === snap.dir ? { ...d, entries: snap.entries } : d,
          ),
        };
      }
      return { ...prev, directories: snap.dirs };
    });
  }

  function migrateExpandAfterMove(oldKey: string, newKey: string) {
    setExpandedKeys((prev) => {
      if (!prev.has(oldKey)) return prev;
      const next = new Set(prev);
      next.delete(oldKey);
      next.add(newKey);
      return next;
    });
  }

  /** 拖拽收尾：无有效落点则还原；最后位置贴近/超出 widget 边界 → 会话区降级（复制路径） */
  function finishDrag() {
    const info = dragRef.current;
    if (!info) return;
    const dropHandled = dropHandledRef.current;
    const pos = lastDragPosRef.current;
    if (!dropHandled && pos) {
      // 会话区在 widget 左侧（宿主右侧侧栏），仅左缘贴近视口边缘触发「已复制路径」降级，
      // 其余三边不判定，避免拖到 widget 内部边缘时误触发（Task 7 M1 贴边误触发）
      const nearEdge =
        pos.x <= DRAG_EDGE_MARGIN &&
        pos.y >= 0 &&
        pos.y <= window.innerHeight;
      if (nearEdge) {
        // 降级路径：宿主暂不支持跨 iframe 文件拖放，复制路径提示粘贴
        void hana.clipboard.writeText(info.path);
        hana.toast.show({ message: '已复制路径（宿主暂不支持跨 iframe 拖放），粘贴发送给 Agent', type: 'info' });
      }
    }
    if (!dropHandled) restoreDragSnapshot();
    dragRef.current = null;
    setDrag(null);
    setDropTargetDir(null);
    dropHandledRef.current = false;
    lastDragPosRef.current = null;
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

  /** 重建索引：成功时 postAction 已回填新 state（indexHealthy=true、warning 清空） */
  async function handleRebuild() {
    setRebuilding(true);
    const r = await postAction({ type: 'rebuild' });
    setRebuilding(false);
    if (!r.ok) hana.toast.show({ message: r.error || '重建索引失败', type: 'error' });
  }

  /** 初始化引导：pick 目录 → POST init → state 回填进入正常界面；取消选择则安静返回 */
  async function handleInit() {
    let picked;
    try {
      picked = await hana.resources.pick({ mode: 'directory', multiple: false });
    } catch {
      hana.toast.show({ message: '选择目录失败', type: 'error' });
      return;
    }
    const ref = picked?.resources?.[0] as { path?: string } | undefined;
    if (!ref?.path) return;
    const r = await postAction({ type: 'init', dataDir: ref.path });
    if (!r.ok) hana.toast.show({ message: r.error || '初始化失败', type: 'error' });
  }

  function openMenu(e: ReactMouseEvent, kind: 'entry' | 'dir' | 'blank', entry?: PromptEntry, dirName?: string) {
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
          // 复制只带正文，frontmatter（title/created）不进剪贴板
          await hana.clipboard.writeText(stripFrontmatter(entry.content));
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

    if (kind === 'blank') {
      switch (key) {
        case 'create-dir':
          setForm({ kind: 'create-dir', anchorDir: undefined });
          break;
        case 'create-prompt':
          if (!state?.directories.length) {
            hana.toast.show({ message: '请先新建目录', type: 'info' });
            break;
          }
          setForm({ kind: 'create-prompt', dirName: state.directories[0].name });
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
            <Button variant="primary" onClick={handleInit}>
              选择数据目录
            </Button>
          }
        />
      );
    }

    // 只要有目录（即使全空）就渲染目录列表，空目录可见、可右键新建卡片
    if (!state.directories.length && !form) {
      return (
        <div onContextMenu={(e) => openMenu(e, 'blank')}>
          <EmptyState
            title="架子上还没有词条"
            description="右键目录行可以新建卡片，或通过工具写入第一个提示词。"
          />
        </div>
      );
    }

    return (
      <div
        className="ps-shelf"
        onContextMenu={(e) => openMenu(e, 'blank')}
        onDragOver={(e) => {
          // 仅跟踪位置用于会话区降级判定；空白处不 preventDefault → 不构成落点
          lastDragPosRef.current = { x: e.clientX, y: e.clientY };
        }}
      >
        {form?.kind === 'create-dir' && !form.anchorDir && (
          <InlineForm form={form} submit={postAction} done={() => setForm(null)} />
        )}
        {state.directories.map((dir) => {
          const collapsed = collapsedDirs.has(dir.name);
          const dirForm = form && formAnchoredAtDir(form, dir.name) ? form : null;
          return (
            <section key={dir.name} className="ps-dir">
              <button
                type="button"
                className={`ps-dir-head${drag?.kind === 'dir' && drag.name === dir.name ? ' ps-dragging' : ''}${drag?.kind === 'entry' && drag.dir !== dir.name && dropTargetDir === dir.name ? ' ps-drop-target' : ''}`}
                onClick={() => toggleDir(dir.name)}
                onContextMenu={(e) => openMenu(e, 'dir', undefined, dir.name)}
                onDragStart={(e) => startDirDrag(e, dir.name)}
                onDragOver={(e) => dragOverDirHead(e, dir.name)}
                onDragLeave={dragLeaveDirHead}
                onDrop={(e) => dropDirHead(e, dir.name)}
                onDragEnd={finishDrag}
                data-dirname={dir.name}
                draggable
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
                            className={`ps-card-head${drag?.kind === 'entry' && drag.dir === dir.name && drag.filename === entry.filename ? ' ps-dragging' : ''}`}
                            onClick={() => scheduleToggle(key)}
                            onDoubleClick={() => handleDoubleClick(entry)}
                            onContextMenu={(e) => openMenu(e, 'entry', entry)}
                            onDragStart={(e) => startEntryDrag(e, entry)}
                            onDragOver={(e) => dragOverEntry(e, entry)}
                            onDrop={(e) => dropEntry(e, entry)}
                            onDragEnd={finishDrag}
                            draggable
                            title="点击收起"
                          >
                            <span className="ps-card-title">{entry.title}</span>
                          </button>
                          <pre className="ps-card-body" onDoubleClick={() => handleDoubleClick(entry)}>
                            {stripFrontmatter(entry.content)}
                          </pre>
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
                        className={`ps-pill${drag?.kind === 'entry' && drag.dir === dir.name && drag.filename === entry.filename ? ' ps-dragging' : ''}`}
                        onClick={() => scheduleToggle(key)}
                        onDoubleClick={() => handleDoubleClick(entry)}
                        onContextMenu={(e) => openMenu(e, 'entry', entry)}
                        onDragStart={(e) => startEntryDrag(e, entry)}
                        onDragOver={(e) => dragOverEntry(e, entry)}
                        onDrop={(e) => dropEntry(e, entry)}
                        onDragEnd={finishDrag}
                        draggable
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
      >
        {state && (
          <WarningBar state={state} rebuilding={rebuilding} onRebuild={handleRebuild} />
        )}
        {renderBody()}
        <ContextMenu
          menu={menu}
          items={menu?.kind === 'entry' ? ENTRY_MENU : menu?.kind === 'blank' ? BLANK_MENU : DIR_MENU}
          onSelect={handleMenuSelect}
          onClose={() => setMenu(null)}
        />
      </CardShell>
    </HanaThemeProvider>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Panel />);
