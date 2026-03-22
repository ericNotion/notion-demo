"use client";

import { cn } from "@/utils/cn";
import {
  type PrimitiveAtom,
  type WritableAtom,
  useAtom,
  useSetAtom,
} from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  type Block,
  type CalloutBlock,
  type ListBlock,
  type ParagraphBlock,
  blocksAtom,
  createBlockId,
  lastSavedAtom,
} from "./atoms";
import "./contenteditable.css";
import {
  focusAtEnd,
  focusAtStart,
  isCaretAtEnd,
  isCaretAtStart,
} from "./selection";
import { filterCommands, SlashCommandMenu } from "./SlashCommandMenu";

const blockStyles = {
  container: {
    paragraph: "pt-[6px] pb-[6px]",
    h1: "pt-[30px] pb-[6px]",
    h2: "pt-[22px] pb-[6px]",
    h3: "pt-[16px] pb-[6px]",
    ul: "pt-[6px] pb-[6px]",
    callout: "pt-[6px] pb-[6px]",
  },
  element: {
    paragraph:
      "editable-placeholder content-text-block outline-none focus:ring-0 px-[2px] py-[0px]",
    h1: "editable-placeholder content-h1 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h2: "editable-placeholder content-h2 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h3: "editable-placeholder content-h3 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    callout:
      "editable-placeholder content-text-block outline-none focus:ring-0 px-[2px] py-[0px] flex-1",
  },
  list: {
    container: "list-disc ps-6",
    item: "outline-none focus:ring-0 editable-placeholder",
  },
};

const placeholders: Record<ParagraphBlock["type"] | "callout", string> = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  paragraph: "",
  callout: "Callout text",
};

// To add a new markdown shortcut, add an entry here.
const markdownShortcuts: Record<string, Block["type"]> = {
  "#": "h1",
  "##": "h2",
  "###": "h3",
  "-": "ul",
};

interface SlashMenuState {
  blockId: string;
  blockIndex: number;
  filterText: string;
  selectedIndex: number;
  position: { top: number; left: number };
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
}

export function BlockEditor({
  className,
  blocksAtom: customBlocksAtom,
  lastSavedAtom: customLastSavedAtom,
  paragraphPlaceholder = "Type something...",
}: BlockEditorProps) {
  const setLastSaved = useSetAtom(customLastSavedAtom ?? lastSavedAtom);
  const [blocks, setBlocks] = useAtom(customBlocksAtom ?? blocksAtom);

  const blockRefs = useRef<Record<string, HTMLElement | null>>({});
  const listItemRefs = useRef<Record<string, HTMLElement | null>>({});
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const hasFocusedInitiallyRef = useRef(false);

  const [slashMenu, setSlashMenu] = useState<SlashMenuState | null>(null);

  // --- Focus helpers ---

  function getBlockEndEl(block: Block): HTMLElement | null {
    if (block.type === "ul") {
      const lastItem = block.items[block.items.length - 1];
      return listItemRefs.current[lastItem.id] || null;
    }
    return blockRefs.current[block.id] || null;
  }

  function getBlockStartEl(block: Block): HTMLElement | null {
    if (block.type === "ul") {
      return listItemRefs.current[block.items[0].id] || null;
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
        } else {
          const el = blockRefs.current[blk.id];
          if (el && el.textContent !== blk.text) el.textContent = blk.text;
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
        if (b.type !== "ul" && (b.text ?? "") === "") {
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

  function updateCalloutIcon(blockId: string, icon: string) {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId && b.type === "callout" ? { ...b, icon } : b,
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
    setBlocks((prev) => {
      if (!prev[blockIndex]) return prev;
      const next = [...prev];
      if (blockType === "ul") {
        next[blockIndex] = {
          id: createBlockId(),
          type: "ul",
          items: [{ id: createBlockId("li"), text: "" }],
        };
      } else if (blockType === "callout") {
        next[blockIndex] = {
          id: createBlockId(),
          type: "callout",
          text: "",
          icon: "💡",
        };
      } else {
        next[blockIndex] = { id: createBlockId(), type: blockType, text: "" };
      }
      return next;
    });
    requestAnimationFrame(() => {
      const refs =
        blockType === "ul" ? listItemRefs.current : blockRefs.current;
      const entries = Object.entries(refs);
      if (entries.length > 0) focusAtEnd(entries[entries.length - 1][1]);
    });
    markSaved();
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

  function handleCalloutInput(
    e: React.FormEvent<HTMLDivElement>,
    block: CalloutBlock,
  ) {
    const text = e.currentTarget.textContent || "";
    updateParagraph(block.id, text);
  }

  function onCalloutKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    block: CalloutBlock,
    index: number,
  ) {
    if (e.key === "Enter") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        insertBlockAfter(index, {
          id: createBlockId(),
          type: "paragraph",
          text: "",
        });
        markSaved();
        return;
      }
    }

    if (e.key === "Backspace") {
      const text = (e.currentTarget.textContent || "").trim();
      if (text.length === 0 && index > 0) {
        e.preventDefault();
        focusPrevBlock(index);
        removeBlock(index);
        return;
      }
    }

    if (e.key === "ArrowUp") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        focusPrevBlock(index);
      }
    }

    if (e.key === "ArrowDown") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        focusNextBlock(index);
      }
    }
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

    if (e.key === "Enter") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        closeSlashMenu();
        insertBlockAfter(index, {
          id: createBlockId(),
          type: "paragraph",
          text: "",
        });
        markSaved();
        return;
      }
    }

    if (e.key === "Backspace") {
      const text = (e.currentTarget.textContent || "").trim();
      if (slashMenu && text.length === 0) closeSlashMenu();
      if (text.length === 0 && index > 0) {
        e.preventDefault();
        focusPrevBlock(index);
        removeBlock(index);
        return;
      }
    }

    if (e.key === "ArrowUp") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        focusPrevBlock(index);
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

    if (e.key === "Enter") {
      e.preventDefault();
      const text = (e.currentTarget.textContent || "").trim();

      if (text.length === 0) {
        setBlocks((prev) => {
          const list = prev[blockIndex] as ListBlock;
          const remaining = list.items.filter((it) => it.id !== itemId);
          const next = [...prev];
          if (remaining.length === 0) {
            next.splice(blockIndex, 1, {
              id: createBlockId(),
              type: "paragraph",
              text: "",
            });
          } else {
            next[blockIndex] = { ...list, items: remaining };
            next.splice(blockIndex + 1, 0, {
              id: createBlockId(),
              type: "paragraph",
              text: "",
            });
          }
          return next;
        });
        markSaved();
        requestAnimationFrame(() => {
          const entries = Object.entries(blockRefs.current);
          focusAtEnd(entries.length ? entries[entries.length - 1][1] : null);
        });
        return;
      }

      setBlocks((prev) =>
        prev.map((b, idx) => {
          if (idx !== blockIndex || b.type !== "ul") return b;
          const newItems = [
            ...b.items.slice(0, itemIndex + 1),
            { id: createBlockId("li"), text: "" },
            ...b.items.slice(itemIndex + 1),
          ];
          return { ...b, items: newItems };
        }),
      );
      markSaved();
      requestAnimationFrame(() => {
        const entries = Object.entries(listItemRefs.current);
        focusAtEnd(entries.length ? entries[entries.length - 1][1] : null);
      });
      return;
    }

    if (e.key === "Backspace") {
      const text = (e.currentTarget.textContent || "").trim();
      if (text.length === 0) {
        e.preventDefault();
        const focusPrev = () => {
          if (itemIndex > 0) {
            focusAtEnd(
              listItemRefs.current[block.items[itemIndex - 1].id] || null,
            );
            return;
          }
          const prevBlock = blocks[blockIndex - 1];
          if (prevBlock) {
            focusAtEnd(getBlockEndEl(prevBlock));
          } else if (block.items.length > 1) {
            const nextItem = block.items[itemIndex + 1];
            if (nextItem) focusAtEnd(listItemRefs.current[nextItem.id] || null);
          }
        };

        setBlocks((prev) => {
          const list = prev[blockIndex] as ListBlock;
          const remaining = list.items.filter((_, i) => i !== itemIndex);
          const next = [...prev];
          if (remaining.length === 0) {
            next.splice(blockIndex, 1);
          } else {
            next[blockIndex] = { ...list, items: remaining };
          }
          return next;
        });
        markSaved();
        requestAnimationFrame(focusPrev);
        return;
      }
    }
  }

  // --- Render ---

  return (
    <div className={className}>
      <div
        className="text-primary text-body-lg relative min-h-[400px] font-sans outline-none focus:ring-0"
        ref={editorRootRef}
      >
        {blocks.map((block, blockIndex) => {
          if (block.type === "ul") {
            return (
              <div
                key={block.id}
                className={cn(
                  blockStyles.container.ul,
                  blockStyles.list.container,
                )}
              >
                <ul className="list-disc ps-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={item.id}>
                      <div
                        ref={(el) => {
                          listItemRefs.current[item.id] = el;
                        }}
                        contentEditable
                        suppressContentEditableWarning
                        className={blockStyles.list.item}
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
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          if (block.type === "callout") {
            return (
              <div key={block.id} className={blockStyles.container.callout}>
                <div className="bg-secondary my-2 flex gap-3 rounded-lg px-4 py-3">
                  <span
                    className="shrink-0 text-lg cursor-pointer"
                    onClick={() => {
                      const newIcon = prompt("Enter emoji icon:", block.icon);
                      if (newIcon) updateCalloutIcon(block.id, newIcon);
                    }}
                  >
                    {block.icon}
                  </span>
                  <div
                    ref={(el) => {
                      blockRefs.current[block.id] = el;
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    className={blockStyles.element.callout}
                    data-block-id={block.id}
                    data-placeholder={placeholders.callout}
                    onInput={(e) => handleCalloutInput(e, block)}
                    onKeyDown={(e) => onCalloutKeyDown(e, block, blockIndex)}
                  />
                </div>
              </div>
            );
          }

          return (
            <div key={block.id} className={blockStyles.container[block.type]}>
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
          );
        })}

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
