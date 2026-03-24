"use client";

import { cn } from "@/utils/cn";
import {
  type PrimitiveAtom,
  type WritableAtom,
  useAtom,
  useSetAtom,
} from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  type Block,
  type DatabaseBlock,
  type ListBlock,
  type ParagraphBlock,
  blocksAtom,
  createBlockId,
  lastSavedAtom,
} from "./atoms";
import "./contenteditable.css";
import {
  focusAtEnd,
  focusAtOffset,
  focusAtStart,
  isCaretAtEnd,
  isCaretAtStart,
  splitTextAtCaret,
} from "./selection";
import { filterCommands, SlashCommandMenu } from "./SlashCommandMenu";

const blockSpacing: Record<string, string> = {
  paragraph: "pt-[6px] pb-[6px]",
  h1: "pt-[30px] pb-[6px]",
  h2: "pt-[22px] pb-[6px]",
  h3: "pt-[16px] pb-[6px]",
  ul: "pt-[6px] pb-[6px]",
  callout: "pt-[4px] pb-[4px]",
  divider: "pt-[8px] pb-[8px]",
  database: "pt-[8px] pb-[8px]",
};

const blockStyles = {
  element: {
    paragraph:
      "editable-placeholder content-text-block outline-none focus:ring-0 px-[2px] py-[0px]",
    h1: "editable-placeholder content-h1 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h2: "editable-placeholder content-h2 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h3: "editable-placeholder content-h3 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
  },
  list: {
    item: "outline-none focus:ring-0 editable-placeholder",
  },
};

const placeholders: Record<ParagraphBlock["type"], string> = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  paragraph: "",
};

const handleTopOffset: Record<ParagraphBlock["type"], number> = {
  paragraph: 0,
  h1: 8,
  h2: 4,
  h3: 1,
};

// To add a new markdown shortcut, add an entry here.
const markdownShortcuts: Record<string, Block["type"]> = {
  "#": "h1",
  "##": "h2",
  "###": "h3",
  "---": "divider",
  "-": "ul",
};

interface DragHandleProps {
  onAdd?: () => void;
  onGripPointerDown?: (e: React.PointerEvent) => void;
  onGripClick?: () => void;
  className?: string;
  groupClass?: string;
  style?: React.CSSProperties;
}

function DragHandle({
  onAdd,
  onGripPointerDown,
  onGripClick,
  className,
  groupClass = "group-hover/block:opacity-100 group-focus-within/block:opacity-100",
  style,
}: DragHandleProps) {
  return (
    <div
      className={cn(
        "absolute top-0 flex items-center gap-0.5 opacity-0 transition-opacity",
        groupClass,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-pointer items-center justify-center rounded-xs dark:hover:bg-white/10"
        onClick={onAdd}
        tabIndex={-1}
        aria-label="Add block"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M7 2v10M2 7h10" />
        </svg>
      </button>
      <div
        role="button"
        tabIndex={-1}
        className="text-tertiary hover:bg-primary/5 flex size-6 cursor-grab items-center justify-center rounded-xs select-none active:cursor-grabbing dark:hover:bg-white/10"
        onPointerDown={onGripPointerDown}
        onClick={onGripClick}
        aria-label="Drag to reorder"
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor">
          <circle cx="2.5" cy="2.5" r="1.2" />
          <circle cx="7.5" cy="2.5" r="1.2" />
          <circle cx="2.5" cy="7" r="1.2" />
          <circle cx="7.5" cy="7" r="1.2" />
          <circle cx="2.5" cy="11.5" r="1.2" />
          <circle cx="7.5" cy="11.5" r="1.2" />
        </svg>
      </div>
    </div>
  );
}

function InlineDatabaseBlock({
  block,
  onKeyDown,
  onTitleChange,
  onRowClick,
  isGripSelected,
}: {
  block: DatabaseBlock;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onTitleChange: (title: string) => void;
  onRowClick?: (row: { id: string; name: string }) => void;
  isGripSelected?: boolean;
}) {
  const [title, setTitle] = useState(block.title);
  const [rows, setRows] = useState<{ id: string; name: string }[]>([]);
  const addRow = () =>
    setRows((prev) => [...prev, { id: createBlockId("row"), name: "" }]);
  const emptyRowCount = rows.length === 0 ? 3 : 0;

  return (
    <div
      tabIndex={0}
      data-block-id={block.id}
      className={cn(
        "rounded-lg outline-hidden",
        isGripSelected
          ? "bg-blue-50 dark:bg-blue-950/30"
          : "focus:bg-blue-50 dark:focus:bg-blue-950/30",
      )}
      onKeyDown={onKeyDown}
    >
      <div className="flex items-center justify-between py-1">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            onTitleChange(e.target.value);
          }}
          className="text-primary min-w-0 flex-1 bg-transparent text-xl font-bold outline-hidden placeholder:text-[#c4c4c4]"
          placeholder="Untitled"
        />
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M10 2l4 4M2 14l4-4M14 2l-4 4M2 14l4-4" />
              <path d="M10 2h4v4M6 14H2v-4" />
            </svg>
          </button>
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <circle cx="8" cy="4" r="1" />
              <circle cx="8" cy="8" r="1" />
              <circle cx="8" cy="12" r="1" />
              <path d="M3 6h10M3 10h10" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center gap-0.5 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
            onClick={addRow}
          >
            New
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M2 4l3 3 3-3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-primary/60 border-t">
        <div className="border-primary/60 flex border-b">
          <div className="border-primary/60 flex flex-1 items-center gap-1.5 border-r px-3 py-1.5">
            <span className="text-tertiary text-sm font-medium">Aa</span>
            <span className="text-primary text-sm">Name</span>
          </div>
          <div className="flex flex-1 items-center gap-1.5 px-3 py-1.5">
            <span className="text-tertiary text-sm">+</span>
            <span className="text-tertiary text-sm">Add property</span>
          </div>
        </div>
        {rows.map((row) => (
          <button
            key={row.id}
            type="button"
            className="border-primary/60 flex h-8 w-full items-center gap-1.5 border-b px-3 text-left hover:bg-[#f7f7f5]"
            onClick={() => onRowClick?.(row)}
          >
            <span
              className="text-[13px]"
              style={{
                fontFamily:
                  "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif",
              }}
            >
              📄
            </span>
            <span className="text-primary text-sm">
              {row.name || "Untitled"}
            </span>
          </button>
        ))}
        {rows.length > 0 && (
          <button
            type="button"
            className="border-primary/60 text-tertiary flex h-8 w-full items-center gap-1.5 border-b px-3 text-sm"
            onClick={addRow}
          >
            <span>+</span>
            <span>New page</span>
          </button>
        )}
        {Array.from({ length: emptyRowCount }).map((_, i) => (
          <div
            key={i}
            className="group/row border-primary/60 relative h-8 border-b"
          >
            {i === 0 && (
              <button
                type="button"
                className="text-tertiary absolute inset-0 flex items-center gap-1.5 px-3 text-sm opacity-0 transition-opacity group-hover/row:opacity-100"
                onClick={addRow}
              >
                <span>+</span>
                <span>New page</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface SlashMenuState {
  blockId: string;
  blockIndex: number;
  filterText: string;
  selectedIndex: number;
  position: { top: number; left: number };
}

interface DragState {
  sourceIndex: number;
  dropIndex: number;
}

interface BlockEditorProps {
  className?: string;
  blocksAtom?: WritableAtom<
    Block[],
    [Block[] | ((prev: Block[]) => Block[])],
    void
  >;
  lastSavedAtom?: PrimitiveAtom<Date | null>;
  paragraphPlaceholder?: string;
  onBackspaceAtStart?: () => void;
  renderDatabaseBlock?: (
    block: DatabaseBlock,
    onTitleChange: (title: string) => void,
  ) => React.ReactNode;
}

export function BlockEditor({
  className,
  blocksAtom: customBlocksAtom,
  lastSavedAtom: customLastSavedAtom,
  paragraphPlaceholder = "Type something...",
  onBackspaceAtStart,
  renderDatabaseBlock,
}: BlockEditorProps) {
  const setLastSaved = useSetAtom(customLastSavedAtom ?? lastSavedAtom);
  const [blocks, setBlocks] = useAtom(customBlocksAtom ?? blocksAtom);

  const blockRefs = useRef<Record<string, HTMLElement | null>>({});
  const listItemRefs = useRef<Record<string, HTMLElement | null>>({});
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const hasFocusedInitiallyRef = useRef(false);
  const blockWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [slashMenu, setSlashMenu] = useState<SlashMenuState | null>(null);
  const [drag, setDrag] = useState<DragState | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const [gripSelectedId, setGripSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!gripSelectedId) return;
    function handleClick(e: MouseEvent) {
      const wrapper = document.querySelector(
        `[data-block-id="${gripSelectedId}"], [data-block-wrapper="${gripSelectedId}"]`,
      );
      if (wrapper && !wrapper.contains(e.target as Node)) {
        setGripSelectedId(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [gripSelectedId]);

  useEffect(() => {
    if (!gripSelectedId) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();
        const idx = blocks.findIndex((b) => b.id === gripSelectedId);
        if (idx >= 0) {
          setGripSelectedId(null);
          focusPrevBlock(idx);
          removeBlock(idx);
        }
      }
      if (e.key === "Escape") {
        setGripSelectedId(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  // --- Focus helpers ---

  function getBlockEndEl(block: Block): HTMLElement | null {
    if (block.type === "ul") {
      const lastItem = block.items[block.items.length - 1];
      return listItemRefs.current[lastItem.id] || null;
    }
    if (block.type === "divider" || block.type === "database") {
      return document.querySelector(
        `[data-block-id="${block.id}"]`,
      ) as HTMLElement | null;
    }
    return blockRefs.current[block.id] || null;
  }

  function getBlockStartEl(block: Block): HTMLElement | null {
    if (block.type === "ul") {
      return listItemRefs.current[block.items[0].id] || null;
    }
    if (block.type === "divider" || block.type === "database") {
      return document.querySelector(
        `[data-block-id="${block.id}"]`,
      ) as HTMLElement | null;
    }
    return blockRefs.current[block.id] || null;
  }

  function focusPrevBlock(index: number) {
    const prev = blocks[index - 1];
    if (prev) focusAtEnd(getBlockEndEl(prev));
  }

  function focusNextBlock(index: number) {
    const next = blocks[index + 1];
    if (next) focusAtStart(getBlockStartEl(next));
  }

  // --- Lifecycle ---

  useEffect(() => {
    requestAnimationFrame(() => {
      blocks.forEach((blk) => {
        if (blk.type === "ul") {
          blk.items.forEach((it) => {
            const el = listItemRefs.current[it.id];
            if (el && el.textContent !== it.text) el.textContent = it.text;
          });
        } else if (blk.type !== "divider" && blk.type !== "database") {
          const el = blockRefs.current[blk.id];
          const text = "text" in blk ? blk.text : "";
          if (el && el.textContent !== text) el.textContent = text;
        }
      });
    });
  }, [blocks]);

  useEffect(() => {
    if (hasFocusedInitiallyRef.current) return;
    requestAnimationFrame(() => {
      if (blocks.length === 0) return;
      for (let i = blocks.length - 1; i >= 0; i--) {
        const b = blocks[i];
        if (
          b.type !== "ul" &&
          b.type !== "divider" &&
          b.type !== "database" &&
          ("text" in b ? b.text : "") === ""
        ) {
          focusAtEnd(blockRefs.current[b.id] || null);
          hasFocusedInitiallyRef.current = true;
          return;
        }
      }
      focusAtEnd(getBlockEndEl(blocks[0]));
      hasFocusedInitiallyRef.current = true;
    });
  }, [blocks]);

  // --- Block operations ---

  function markSaved() {
    setLastSaved(new Date());
  }

  function updateParagraph(blockId: string, text: string) {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId && b.type !== "ul" ? { ...b, text } : b,
      ),
    );
    markSaved();
  }

  function updateListItem(blockId: string, itemId: string, text: string) {
    setBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId || b.type !== "ul") return b;
        return {
          ...b,
          items: b.items.map((it) => (it.id === itemId ? { ...it, text } : it)),
        };
      }),
    );
    markSaved();
  }

  function insertBlockAfter(index: number, newBlock: Block) {
    setBlocks((prev) => [
      ...prev.slice(0, index + 1),
      newBlock,
      ...prev.slice(index + 1),
    ]);
    requestAnimationFrame(() => {
      if (newBlock.type === "ul") {
        focusAtEnd(listItemRefs.current[newBlock.items[0].id] || null);
      } else {
        focusAtEnd(blockRefs.current[newBlock.id] || null);
      }
    });
  }

  function removeBlock(index: number) {
    setBlocks((prev) => prev.filter((_, i) => i !== index));
    markSaved();
  }

  function transformBlock(blockIndex: number, blockType: Block["type"]) {
    let newBlockId = createBlockId();
    setBlocks((prev) => {
      if (!prev[blockIndex]) return prev;
      const next = [...prev];
      if (blockType === "ul") {
        next[blockIndex] = {
          id: newBlockId,
          type: "ul",
          items: [{ id: createBlockId("li"), text: "" }],
        };
      } else if (blockType === "callout") {
        next[blockIndex] = {
          id: newBlockId,
          type: "callout",
          text: "",
          icon: "💡",
        };
      } else if (blockType === "divider") {
        next[blockIndex] = { id: newBlockId, type: "divider" };
        const afterId = createBlockId();
        next.splice(blockIndex + 1, 0, {
          id: afterId,
          type: "paragraph",
          text: "",
        });
        newBlockId = afterId;
      } else if (blockType === "database") {
        next[blockIndex] = { id: newBlockId, type: "database", title: "" };
        const afterId = createBlockId();
        next.splice(blockIndex + 1, 0, {
          id: afterId,
          type: "paragraph",
          text: "",
        });
        newBlockId = afterId;
      } else {
        next[blockIndex] = { id: newBlockId, type: blockType, text: "" };
      }
      return next;
    });
    requestAnimationFrame(() => {
      if (blockType === "divider" || blockType === "database") {
        const el = document.querySelector(
          `[data-block-id="${newBlockId}"]`,
        ) as HTMLElement | null;
        el?.focus();
      } else if (blockType === "ul") {
        const refs = listItemRefs.current;
        const entries = Object.entries(refs);
        if (entries.length > 0) focusAtEnd(entries[entries.length - 1][1]);
      } else {
        const el = blockRefs.current[newBlockId];
        if (el) focusAtEnd(el);
      }
    });
    markSaved();
  }

  // --- Pointer-based drag and drop ---

  const computeDropIndex = useCallback(
    (clientY: number, sourceIndex: number): number => {
      const wrappers = blockWrapperRefs.current;
      for (let i = 0; i < wrappers.length; i++) {
        const el = wrappers[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (clientY < midY) {
          return i;
        }
      }
      return wrappers.length;
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const newDrop = computeDropIndex(e.clientY, d.sourceIndex);
      if (newDrop !== d.dropIndex) {
        const next = { ...d, dropIndex: newDrop };
        dragRef.current = next;
        setDrag(next);
      }
    },
    [computeDropIndex],
  );

  const handlePointerUp = useCallback(() => {
    const d = dragRef.current;
    if (d) {
      const { sourceIndex, dropIndex } = d;
      const effectiveDrop = dropIndex > sourceIndex ? dropIndex - 1 : dropIndex;
      if (effectiveDrop !== sourceIndex) {
        setBlocks((prev) => {
          const next = [...prev];
          const [moved] = next.splice(sourceIndex, 1);
          next.splice(effectiveDrop, 0, moved);
          return next;
        });
        markSaved();
      }
    }
    dragRef.current = null;
    setDrag(null);
    document.body.style.cursor = "";
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  }, [handlePointerMove]);

  function startDrag(blockIndex: number, e: React.PointerEvent) {
    e.preventDefault();
    const initial: DragState = {
      sourceIndex: blockIndex,
      dropIndex: blockIndex,
    };
    dragRef.current = initial;
    setDrag(initial);
    document.body.style.cursor = "grabbing";
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  }

  // --- Slash menu ---

  function openSlashMenu(
    blockId: string,
    blockIndex: number,
    filterText: string,
  ) {
    const el = blockRefs.current[blockId];
    const container = editorRootRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    setSlashMenu({
      blockId,
      blockIndex,
      filterText,
      selectedIndex: 0,
      position: {
        top: elRect.bottom - containerRect.top + 4,
        left: elRect.left - containerRect.left,
      },
    });
  }

  function closeSlashMenu() {
    setSlashMenu(null);
  }

  function executeSlashCommand(blockIndex: number, blockType: Block["type"]) {
    const block = blocks[blockIndex];
    if (!block || block.type === "ul") return;
    const el = blockRefs.current[block.id];
    if (el) el.textContent = "";
    transformBlock(blockIndex, blockType);
    closeSlashMenu();
  }

  // --- Input handlers ---

  function handleParagraphInput(
    e: React.FormEvent<HTMLDivElement>,
    block: ParagraphBlock,
    blockIndex: number,
  ) {
    const text = e.currentTarget.textContent || "";
    updateParagraph(block.id, text);

    if (text.startsWith("/")) {
      openSlashMenu(block.id, blockIndex, text.slice(1));
    } else if (slashMenu?.blockId === block.id) {
      closeSlashMenu();
    }
  }

  // --- Keyboard handlers ---

  function onParagraphKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    block: ParagraphBlock,
    index: number,
  ) {
    if (slashMenu && slashMenu.blockId === block.id) {
      const filtered = filterCommands(slashMenu.filterText);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSlashMenu((prev) =>
          prev
            ? {
                ...prev,
                selectedIndex: Math.min(
                  prev.selectedIndex + 1,
                  filtered.length - 1,
                ),
              }
            : null,
        );
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSlashMenu((prev) =>
          prev
            ? { ...prev, selectedIndex: Math.max(prev.selectedIndex - 1, 0) }
            : null,
        );
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const cmd = filtered[slashMenu.selectedIndex];
        if (cmd) executeSlashCommand(index, cmd.blockType);
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeSlashMenu();
        return;
      }
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      closeSlashMenu();

      const el = blockRefs.current[block.id];
      const split = el ? splitTextAtCaret(el) : null;
      const beforeText = split?.before ?? block.text;
      const afterText = split?.after ?? "";

      const newBlockId = createBlockId();
      setBlocks((prev) => {
        const next = [...prev];
        next[index] = { ...block, text: beforeText };
        next.splice(index + 1, 0, {
          id: newBlockId,
          type: "paragraph",
          text: afterText,
        });
        return next;
      });
      markSaved();

      requestAnimationFrame(() => {
        const newEl = blockRefs.current[newBlockId];
        if (newEl) focusAtStart(newEl);
      });
      return;
    }

    if (e.key === "Backspace") {
      const el = blockRefs.current[block.id];
      const text = (e.currentTarget.textContent || "").trim();
      if (slashMenu && text.length === 0) closeSlashMenu();
      if (index === 0 && isCaretAtStart(el!) && onBackspaceAtStart) {
        e.preventDefault();
        onBackspaceAtStart();
        return;
      }
      if (el && isCaretAtStart(el) && index > 0) {
        e.preventDefault();
        const prevBlock = blocks[index - 1];
        if (
          prevBlock &&
          prevBlock.type !== "ul" &&
          prevBlock.type !== "divider" &&
          prevBlock.type !== "database"
        ) {
          const prevText = "text" in prevBlock ? prevBlock.text || "" : "";
          const curText = text;
          const mergedText = prevText + curText;
          const caretPos = prevText.length;
          setBlocks((prev) => {
            const next = [...prev];
            next[index - 1] = {
              ...prevBlock,
              text: mergedText,
            } as typeof prevBlock;
            next.splice(index, 1);
            return next;
          });
          markSaved();
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              const prevEl = blockRefs.current[prevBlock.id];
              focusAtOffset(prevEl, caretPos);
            }),
          );
        } else {
          focusPrevBlock(index);
          if (text.length === 0) removeBlock(index);
        }
        return;
      }
    }

    if (e.key === "ArrowUp") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        if (index === 0 && onBackspaceAtStart) {
          onBackspaceAtStart();
        } else {
          focusPrevBlock(index);
        }
      }
    }

    if (e.key === "ArrowDown") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        focusNextBlock(index);
      }
    }

    if (e.key === " " || e.code === "Space") {
      const text = (e.currentTarget.textContent || "").trim();
      const shortcutType = markdownShortcuts[text];
      if (shortcutType) {
        e.preventDefault();
        e.stopPropagation();
        transformBlock(index, shortcutType);
        return;
      }
    }
  }

  function onListItemKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    block: ListBlock,
    blockIndex: number,
    itemIndex: number,
    itemId: string,
  ) {
    if (e.key === "ArrowUp") {
      const el = listItemRefs.current[itemId];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        if (itemIndex > 0) {
          focusAtEnd(
            listItemRefs.current[block.items[itemIndex - 1].id] || null,
          );
        } else {
          focusPrevBlock(blockIndex);
        }
      }
    }

    if (e.key === "ArrowDown") {
      const el = listItemRefs.current[itemId];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        if (itemIndex < block.items.length - 1) {
          focusAtStart(
            listItemRefs.current[block.items[itemIndex + 1].id] || null,
          );
        } else {
          focusNextBlock(blockIndex);
        }
      }
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = (e.currentTarget.textContent || "").trim();

      if (text.length === 0) {
        const newBlockId = createBlockId();
        setBlocks((prev) => {
          const list = prev[blockIndex] as ListBlock;
          const remaining = list.items.filter((it) => it.id !== itemId);
          const next = [...prev];
          if (remaining.length === 0) {
            next.splice(blockIndex, 1, {
              id: newBlockId,
              type: "paragraph",
              text: "",
            });
          } else {
            next[blockIndex] = { ...list, items: remaining };
            next.splice(blockIndex + 1, 0, {
              id: newBlockId,
              type: "paragraph",
              text: "",
            });
          }
          return next;
        });
        markSaved();
        requestAnimationFrame(() => {
          focusAtStart(blockRefs.current[newBlockId] || null);
        });
        return;
      }

      const el = listItemRefs.current[itemId];
      const split = el ? splitTextAtCaret(el) : null;
      const beforeText = split?.before ?? text;
      const afterText = split?.after ?? "";

      const newItemId = createBlockId("li");
      setBlocks((prev) =>
        prev.map((b, idx) => {
          if (idx !== blockIndex || b.type !== "ul") return b;
          const newItems = [...b.items];
          newItems[itemIndex] = { ...newItems[itemIndex], text: beforeText };
          newItems.splice(itemIndex + 1, 0, {
            id: newItemId,
            text: afterText,
          });
          return { ...b, items: newItems };
        }),
      );
      markSaved();
      requestAnimationFrame(() => {
        focusAtStart(listItemRefs.current[newItemId] || null);
      });
      return;
    }

    if (e.key === "Backspace") {
      const el = listItemRefs.current[itemId];
      const text = (e.currentTarget.textContent || "").trim();

      if (el && isCaretAtStart(el) && itemIndex > 0) {
        e.preventDefault();
        const prevItem = block.items[itemIndex - 1];
        const prevText = prevItem.text || "";
        const caretPos = prevText.length;
        const mergedText = prevText + text;
        setBlocks((prev) => {
          const list = prev[blockIndex] as ListBlock;
          const newItems = [...list.items];
          newItems[itemIndex - 1] = { ...prevItem, text: mergedText };
          newItems.splice(itemIndex, 1);
          return prev.map((b, i) =>
            i === blockIndex ? { ...list, items: newItems } : b,
          );
        });
        markSaved();
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            focusAtOffset(listItemRefs.current[prevItem.id] || null, caretPos);
          }),
        );
        return;
      }

      if (el && isCaretAtStart(el) && itemIndex === 0) {
        e.preventDefault();
        const prevBlock = blocks[blockIndex - 1];
        if (
          prevBlock &&
          prevBlock.type !== "ul" &&
          prevBlock.type !== "divider" &&
          prevBlock.type !== "database"
        ) {
          const prevText = "text" in prevBlock ? prevBlock.text || "" : "";
          const caretPos = prevText.length;
          const mergedText = prevText + text;
          const remaining = block.items.slice(1);
          setBlocks((prev) => {
            const next = [...prev];
            next[blockIndex - 1] = {
              ...prevBlock,
              text: mergedText,
            } as typeof prevBlock;
            if (remaining.length === 0) {
              next.splice(blockIndex, 1);
            } else {
              next[blockIndex] = { ...block, items: remaining };
            }
            return next;
          });
          markSaved();
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              focusAtOffset(blockRefs.current[prevBlock.id] || null, caretPos);
            }),
          );
        } else if (text.length === 0) {
          const focusPrev = () => {
            if (prevBlock) {
              focusAtEnd(getBlockEndEl(prevBlock));
            } else if (block.items.length > 1) {
              const nextItem = block.items[1];
              if (nextItem)
                focusAtEnd(listItemRefs.current[nextItem.id] || null);
            }
          };
          setBlocks((prev) => {
            const list = prev[blockIndex] as ListBlock;
            const rem = list.items.filter((_, i) => i !== 0);
            const next = [...prev];
            if (rem.length === 0) {
              next.splice(blockIndex, 1);
            } else {
              next[blockIndex] = { ...list, items: rem };
            }
            return next;
          });
          markSaved();
          requestAnimationFrame(focusPrev);
        }
        return;
      }
    }
  }

  // --- Drop indicator position ---
  function getDropIndicatorStyle(): React.CSSProperties | null {
    if (
      !drag ||
      drag.dropIndex === drag.sourceIndex ||
      drag.dropIndex === drag.sourceIndex + 1
    )
      return null;
    const wrappers = blockWrapperRefs.current;
    const idx = drag.dropIndex;
    let top: number;
    const container = editorRootRef.current;
    if (!container) return null;
    const containerRect = container.getBoundingClientRect();

    if (idx >= wrappers.length) {
      const last = wrappers[wrappers.length - 1];
      if (!last) return null;
      const rect = last.getBoundingClientRect();
      top = rect.bottom - containerRect.top;
    } else {
      const el = wrappers[idx];
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      top = rect.top - containerRect.top;
    }
    return {
      position: "absolute",
      left: 0,
      right: 0,
      top: top - 1,
      height: 3,
      background: "#6db3f2",
      borderRadius: 2,
      zIndex: 50,
      pointerEvents: "none",
    };
  }

  // --- Render ---

  const dropIndicatorStyle = getDropIndicatorStyle();

  return (
    <div className={className}>
      <div
        className="text-primary text-body-lg relative min-h-[400px] font-sans outline-none focus:ring-0"
        ref={editorRootRef}
      >
        {blocks.map((block, blockIndex) => {
          const isDragging = drag?.sourceIndex === blockIndex;

          if (block.type === "ul") {
            return (
              <div
                key={block.id}
                ref={(el) => {
                  blockWrapperRefs.current[blockIndex] = el;
                }}
                className={cn(blockSpacing.ul, isDragging && "opacity-40")}
              >
                {block.items.map((item, itemIndex) => (
                  <div
                    key={item.id}
                    className="group/item relative flex items-center ps-[22px]"
                  >
                    <DragHandle
                      className="top-1/2 -left-[30px] -translate-y-1/2"
                      groupClass="group-hover/item:opacity-100 group-focus-within/item:opacity-100"
                      onAdd={() =>
                        insertBlockAfter(blockIndex - 1, {
                          id: createBlockId(),
                          type: "paragraph",
                          text: "",
                        })
                      }
                      onGripPointerDown={(e) => startDrag(blockIndex, e)}
                    />
                    <span className="text-primary mr-1.5 block size-[5px] shrink-0 rounded-full bg-current" />
                    <div
                      ref={(el) => {
                        listItemRefs.current[item.id] = el;
                      }}
                      contentEditable
                      suppressContentEditableWarning
                      className={cn(blockStyles.list.item, "flex-1 py-[3px]")}
                      data-block-id={block.id}
                      data-item-id={item.id}
                      data-placeholder="List item"
                      onInput={(e) =>
                        updateListItem(
                          block.id,
                          item.id,
                          e.currentTarget.textContent || "",
                        )
                      }
                      onKeyDown={(e) =>
                        onListItemKeyDown(
                          e,
                          block,
                          blockIndex,
                          itemIndex,
                          item.id,
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            );
          }

          if (block.type === "callout") {
            return (
              <div
                key={block.id}
                ref={(el) => {
                  blockWrapperRefs.current[blockIndex] = el;
                }}
                className={cn(blockSpacing.callout, isDragging && "opacity-40")}
              >
                <div className="group/block relative">
                  <DragHandle
                    className="-left-[52px]"
                    onAdd={() =>
                      insertBlockAfter(blockIndex - 1, {
                        id: createBlockId(),
                        type: "paragraph",
                        text: "",
                      })
                    }
                    onGripPointerDown={(e) => startDrag(blockIndex, e)}
                    onGripClick={() => setGripSelectedId(block.id)}
                  />
                  <div
                    className={cn(
                      "bg-secondary flex gap-3 rounded-lg px-4 py-3",
                      gripSelectedId === block.id &&
                        "bg-blue-50 dark:bg-blue-950/30",
                    )}
                  >
                    <span className="shrink-0 text-lg">{block.icon}</span>
                    <div
                      ref={(el) => {
                        blockRefs.current[block.id] = el;
                      }}
                      contentEditable
                      suppressContentEditableWarning
                      className="editable-placeholder text-primary min-w-0 flex-1 text-[15px] leading-relaxed outline-hidden"
                      data-block-id={block.id}
                      data-placeholder="Type something..."
                      onInput={(e) => {
                        const text = e.currentTarget.textContent || "";
                        setBlocks((prev) =>
                          prev.map((b) =>
                            b.id === block.id ? { ...b, text } : b,
                          ),
                        );
                        markSaved();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          const newId = createBlockId();
                          insertBlockAfter(blockIndex, {
                            id: newId,
                            type: "paragraph",
                            text: "",
                          });
                        }
                        if (e.key === "Backspace") {
                          const text = (
                            e.currentTarget.textContent || ""
                          ).trim();
                          if (text.length === 0 && blockIndex > 0) {
                            e.preventDefault();
                            focusPrevBlock(blockIndex);
                            removeBlock(blockIndex);
                          } else if (
                            text.length === 0 &&
                            blockIndex === 0 &&
                            onBackspaceAtStart
                          ) {
                            e.preventDefault();
                            onBackspaceAtStart();
                          }
                        }
                        if (e.key === "ArrowUp") {
                          const el = blockRefs.current[block.id];
                          if (el && isCaretAtStart(el)) {
                            e.preventDefault();
                            focusPrevBlock(blockIndex);
                          }
                        }
                        if (e.key === "ArrowDown") {
                          const el = blockRefs.current[block.id];
                          if (el && isCaretAtEnd(el)) {
                            e.preventDefault();
                            focusNextBlock(blockIndex);
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          }

          if (block.type === "divider") {
            return (
              <div
                key={block.id}
                ref={(el) => {
                  blockWrapperRefs.current[blockIndex] = el;
                }}
                className={cn(blockSpacing.divider, isDragging && "opacity-40")}
              >
                <div className="group/block relative">
                  <DragHandle
                    className="top-1/2 -left-[52px] -translate-y-1/2"
                    onAdd={() =>
                      insertBlockAfter(blockIndex - 1, {
                        id: createBlockId(),
                        type: "paragraph",
                        text: "",
                      })
                    }
                    onGripPointerDown={(e) => startDrag(blockIndex, e)}
                    onGripClick={() => setGripSelectedId(block.id)}
                  />
                  <div
                    data-block-id={block.id}
                    className={cn(
                      "rounded-xs py-1",
                      gripSelectedId === block.id &&
                        "bg-blue-50 dark:bg-blue-950/30",
                    )}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" || e.key === "Delete") {
                        e.preventDefault();
                        focusPrevBlock(blockIndex);
                        removeBlock(blockIndex);
                      }
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const newId = createBlockId();
                        insertBlockAfter(blockIndex, {
                          id: newId,
                          type: "paragraph",
                          text: "",
                        });
                      }
                      if (e.key === "ArrowUp") {
                        e.preventDefault();
                        focusPrevBlock(blockIndex);
                      }
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        focusNextBlock(blockIndex);
                      }
                    }}
                  >
                    <hr className="border-primary border-t" />
                  </div>
                </div>
              </div>
            );
          }

          if (block.type === "database") {
            return (
              <div
                key={block.id}
                ref={(el) => {
                  blockWrapperRefs.current[blockIndex] = el;
                }}
                className={cn(
                  blockSpacing.database,
                  isDragging && "opacity-40",
                )}
              >
                <div className="group/block relative">
                  <DragHandle
                    className="-left-[52px]"
                    onAdd={() =>
                      insertBlockAfter(blockIndex - 1, {
                        id: createBlockId(),
                        type: "paragraph",
                        text: "",
                      })
                    }
                    onGripPointerDown={(e) => startDrag(blockIndex, e)}
                    onGripClick={() => setGripSelectedId(block.id)}
                  />
                  {renderDatabaseBlock ? (
                    <div
                      data-block-id={block.id}
                      className={cn(
                        "rounded-lg",
                        gripSelectedId === block.id &&
                          "bg-blue-50 dark:bg-blue-950/30",
                      )}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" || e.key === "Delete") {
                          e.preventDefault();
                          focusPrevBlock(blockIndex);
                          removeBlock(blockIndex);
                        }
                        if (e.key === "ArrowUp") {
                          e.preventDefault();
                          focusPrevBlock(blockIndex);
                        }
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          focusNextBlock(blockIndex);
                        }
                      }}
                    >
                      {renderDatabaseBlock(block, (title) => {
                        setBlocks((prev) =>
                          prev.map((b) =>
                            b.id === block.id ? { ...b, title } : b,
                          ),
                        );
                        markSaved();
                      })}
                    </div>
                  ) : (
                    <InlineDatabaseBlock
                      block={block}
                      isGripSelected={gripSelectedId === block.id}
                      onKeyDown={(e) => {
                        const target = e.target as HTMLElement;
                        const isInput =
                          target.tagName === "INPUT" ||
                          target.tagName === "TEXTAREA" ||
                          target.isContentEditable;
                        if (
                          (e.key === "Backspace" || e.key === "Delete") &&
                          !isInput
                        ) {
                          e.preventDefault();
                          setGripSelectedId(null);
                          focusPrevBlock(blockIndex);
                          removeBlock(blockIndex);
                        }
                        if (e.key === "ArrowUp" && !isInput) {
                          e.preventDefault();
                          focusPrevBlock(blockIndex);
                        }
                        if (e.key === "ArrowDown" && !isInput) {
                          e.preventDefault();
                          focusNextBlock(blockIndex);
                        }
                      }}
                      onTitleChange={(title) => {
                        setBlocks((prev) =>
                          prev.map((b) =>
                            b.id === block.id ? { ...b, title } : b,
                          ),
                        );
                        markSaved();
                      }}
                    />
                  )}
                </div>
              </div>
            );
          }

          return (
            <div
              key={block.id}
              ref={(el) => {
                blockWrapperRefs.current[blockIndex] = el;
              }}
              className={cn(
                blockSpacing[block.type],
                isDragging && "opacity-40",
              )}
            >
              <div className="group/block relative">
                <DragHandle
                  className="-left-[52px]"
                  style={
                    handleTopOffset[block.type]
                      ? { top: handleTopOffset[block.type] }
                      : undefined
                  }
                  onAdd={() =>
                    insertBlockAfter(blockIndex - 1, {
                      id: createBlockId(),
                      type: "paragraph",
                      text: "",
                    })
                  }
                  onGripPointerDown={(e) => startDrag(blockIndex, e)}
                />
                <div
                  ref={(el) => {
                    blockRefs.current[block.id] = el;
                  }}
                  contentEditable
                  suppressContentEditableWarning
                  className={blockStyles.element[block.type]}
                  data-block-id={block.id}
                  data-placeholder={
                    block.type === "paragraph"
                      ? paragraphPlaceholder
                      : placeholders[block.type]
                  }
                  onInput={(e) => handleParagraphInput(e, block, blockIndex)}
                  onKeyDown={(e) => onParagraphKeyDown(e, block, blockIndex)}
                />
              </div>
            </div>
          );
        })}

        {dropIndicatorStyle && <div style={dropIndicatorStyle} />}

        {slashMenu && (
          <SlashCommandMenu
            filterText={slashMenu.filterText}
            selectedIndex={slashMenu.selectedIndex}
            position={slashMenu.position}
            onSelect={(blockType) =>
              executeSlashCommand(slashMenu.blockIndex, blockType)
            }
            onHover={(index) =>
              setSlashMenu((prev) =>
                prev ? { ...prev, selectedIndex: index } : null,
              )
            }
            onClose={closeSlashMenu}
          />
        )}
      </div>
    </div>
  );
}
