"use client";

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
  blocksAtom,
  createBlockId,
  lastSavedAtom,
} from "./atoms";
import { blockRegistry } from "./blocks";
import "./contenteditable.css";
import { focusAtEnd, focusAtOffset, focusAtStart } from "./selection";
import { filterCommands, SlashCommandMenu } from "./SlashCommandMenu";

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
  renderCalloutIcon?: (
    icon: string,
    onIconChange: (icon: string) => void,
  ) => React.ReactNode;
}

export function BlockEditor({
  className,
  blocksAtom: customBlocksAtom,
  lastSavedAtom: customLastSavedAtom,
  paragraphPlaceholder = "Type something...",
  onBackspaceAtStart,
  renderDatabaseBlock,
  renderCalloutIcon,
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

  // --- Grip selection dismiss ---

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
  }, [gripSelectedId, blocks]);

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

  function updateBlock(blockIndex: number, updates: Record<string, unknown>) {
    setBlocks((prev) =>
      prev.map((b, i) => (i === blockIndex ? { ...b, ...updates } : b)),
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
      } else if (blockType === "graph") {
        next[blockIndex] = { id: newBlockId, type: "graph" };
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
      if (blockType === "divider" || blockType === "database" || blockType === "graph") {
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

  function mergeIntoPrev(blockIndex: number, currentText: string) {
    const currentBlock = blocks[blockIndex];
    const prevBlock = blocks[blockIndex - 1];

    if (
      prevBlock &&
      prevBlock.type !== "ul" &&
      prevBlock.type !== "divider" &&
      prevBlock.type !== "database" && prevBlock.type !== "graph"
    ) {
      const prevText = "text" in prevBlock ? prevBlock.text || "" : "";
      const caretPos = prevText.length;
      const mergedText = prevText + currentText;

      setBlocks((prev) => {
        const next = [...prev];
        next[blockIndex - 1] = {
          ...prevBlock,
          text: mergedText,
        } as typeof prevBlock;

        if (currentBlock.type === "ul" && currentBlock.items.length > 1) {
          next[blockIndex] = {
            ...currentBlock,
            items: currentBlock.items.slice(1),
          };
        } else {
          next.splice(blockIndex, 1);
        }
        return next;
      });
      markSaved();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          focusAtOffset(blockRefs.current[prevBlock.id] || null, caretPos);
        }),
      );
    } else {
      focusPrevBlock(blockIndex);
      if (currentText.length === 0) {
        if (currentBlock.type === "ul" && currentBlock.items.length > 1) {
          setBlocks((prev) => {
            const next = [...prev];
            next[blockIndex] = {
              ...currentBlock,
              items: currentBlock.items.slice(1),
            };
            return next;
          });
        } else {
          removeBlock(blockIndex);
        }
      }
    }
  }

  // --- Pointer-based drag and drop ---

  const computeDropIndex = useCallback(
    (clientY: number, _sourceIndex: number): number => {
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
          const def = blockRegistry.get(block.type);
          if (!def) return null;

          const Component = def.Component;

          return (
            <Component
              key={block.id}
              block={block}
              blockIndex={blockIndex}
              isGripSelected={gripSelectedId === block.id}
              isDragging={isDragging}
              wrapperRef={(el) => {
                blockWrapperRefs.current[blockIndex] = el;
              }}
              blockRef={(el) => {
                blockRefs.current[block.id] = el;
              }}
              listItemRef={(itemId, el) => {
                listItemRefs.current[itemId] = el;
              }}
              updateBlock={(updates) => updateBlock(blockIndex, updates)}
              insertAfter={(newBlock) => insertBlockAfter(blockIndex, newBlock)}
              remove={() => removeBlock(blockIndex)}
              transform={(type) => transformBlock(blockIndex, type)}
              focusPrev={() => focusPrevBlock(blockIndex)}
              focusNext={() => focusNextBlock(blockIndex)}
              markSaved={markSaved}
              mergeIntoPrev={(text) => mergeIntoPrev(blockIndex, text)}
              openSlashMenu={(filterText) =>
                openSlashMenu(block.id, blockIndex, filterText)
              }
              closeSlashMenu={closeSlashMenu}
              slashMenuOpen={slashMenu?.blockId === block.id}
              slashMenuFilterText={slashMenu?.filterText ?? ""}
              slashMenuSelectedIndex={slashMenu?.selectedIndex ?? 0}
              setSlashMenuIndex={(index) => {
                const filtered = filterCommands(slashMenu?.filterText ?? "");
                setSlashMenu((prev) =>
                  prev
                    ? {
                        ...prev,
                        selectedIndex: Math.max(
                          0,
                          Math.min(index, filtered.length - 1),
                        ),
                      }
                    : null,
                );
              }}
              executeSlashCommand={() => {
                if (!slashMenu) return;
                const filtered = filterCommands(slashMenu.filterText);
                const cmd = filtered[slashMenu.selectedIndex];
                if (cmd) executeSlashCommand(blockIndex, cmd.blockType);
              }}
              selectGrip={() => setGripSelectedId(block.id)}
              startDrag={(e) => startDrag(blockIndex, e)}
              renderCalloutIcon={renderCalloutIcon}
              renderDatabaseBlock={renderDatabaseBlock}
              paragraphPlaceholder={paragraphPlaceholder}
              onBackspaceAtStart={onBackspaceAtStart}
            />
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
