"use client";

import { cn } from "@/utils/cn";
import {
  type PrimitiveAtom,
  type WritableAtom,
  useAtom,
  useSetAtom,
} from "jotai";
import { useEffect, useRef } from "react";
import {
  type Block,
  type ListBlock,
  type ParagraphBlock,
  blocksAtom,
  createBlockId,
  lastSavedAtom,
} from "./atoms";
import "./contenteditable.css";

// Block styles
const blockStyles = {
  container: {
    paragraph: "pt-[6px] pb-[6px]",
    h1: "pt-[30px] pb-[6px]",
    h2: "pt-[22px] pb-[6px]",
    h3: "pt-[16px] pb-[6px]",
    ul: "pt-[6px] pb-[6px]",
  },
  element: {
    paragraph:
      "editable-placeholder content-text-block outline-none focus:ring-0 px-[2px] py-[0px]",
    h1: "editable-placeholder content-h1 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h2: "editable-placeholder content-h2 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
    h3: "editable-placeholder content-h3 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
  },
  list: {
    ul: "list-disc ps-6",
    item: "outline-none focus:ring-0 editable-placeholder",
  },
};

// Helper functions
function focusElementAtEnd(el: HTMLElement | null) {
  if (!el) return;
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

function focusElementAtStart(el: HTMLElement | null) {
  if (!el) return;
  el.focus();
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(true);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

function isCaretAtStart(element: HTMLElement): boolean {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) {
    return false;
  }
  const range = selection.getRangeAt(0);
  if (!element.contains(range.startContainer)) return false;
  const probe = document.createRange();
  probe.selectNodeContents(element);
  probe.setEnd(range.startContainer, range.startOffset);
  return probe.toString().length === 0;
}

function isCaretAtEnd(element: HTMLElement): boolean {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) {
    return false;
  }
  const range = selection.getRangeAt(0);
  if (!element.contains(range.endContainer)) return false;
  const probe = document.createRange();
  probe.selectNodeContents(element);
  probe.setStart(range.endContainer, range.endOffset);
  return probe.toString().length === 0;
}

interface BlockEditorProps {
  className?: string;
  /** Custom blocks atom - defaults to shared blocksAtom */
  blocksAtom?: WritableAtom<
    Block[],
    [Block[] | ((prev: Block[]) => Block[])],
    void
  >;
  /** Custom lastSaved atom - defaults to shared lastSavedAtom */
  lastSavedAtom?: PrimitiveAtom<Date | null>;
  /** Placeholder text for empty paragraphs */
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

  // Refs for blocks and list items for focusing
  const blockRefs = useRef<Record<string, HTMLElement | null>>({});
  const listItemRefs = useRef<Record<string, HTMLElement | null>>({});
  const editorRootRef = useRef<HTMLDivElement | null>(null);
  const hasFocusedInitiallyRef = useRef(false);

  // On mount, populate contentEditable DOM with initial text from state
  useEffect(() => {
    requestAnimationFrame(() => {
      blocks.forEach((blk) => {
        if (blk.type === "ul") {
          blk.items.forEach((it) => {
            const el = listItemRefs.current[it.id];
            if (el && el.textContent !== it.text) {
              el.textContent = it.text;
            }
          });
        } else {
          const el = blockRefs.current[blk.id];
          if (el && el.textContent !== blk.text) {
            el.textContent = blk.text;
          }
        }
      });
    });
  }, [blocks]);

  // Focus the trailing empty paragraph on mount
  useEffect(() => {
    if (hasFocusedInitiallyRef.current) return;
    requestAnimationFrame(() => {
      if (blocks.length === 0) return;
      let focused = false;
      for (let i = blocks.length - 1; i >= 0; i--) {
        const b = blocks[i];
        if (b.type !== "ul" && (b.text ?? "") === "") {
          focusElementAtEnd(blockRefs.current[b.id] || null);
          focused = true;
          break;
        }
      }
      if (!focused) {
        const first = blocks[0];
        if (first.type === "ul") {
          const firstItem = first.items[0];
          focusElementAtEnd(listItemRefs.current[firstItem.id] || null);
        } else {
          focusElementAtEnd(blockRefs.current[first.id] || null);
        }
      }
      hasFocusedInitiallyRef.current = true;
    });
  }, [blocks]);

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
    setBlocks((prev) => {
      const next = [
        ...prev.slice(0, index + 1),
        newBlock,
        ...prev.slice(index + 1),
      ];
      return next;
    });
    // Focus after React commit
    requestAnimationFrame(() => {
      if (newBlock.type === "ul") {
        const firstItem = newBlock.items[0];
        focusElementAtEnd(listItemRefs.current[firstItem.id] || null);
      } else {
        focusElementAtEnd(blockRefs.current[newBlock.id] || null);
      }
    });
  }

  function transformShortcut(
    blockIndex: number,
    target: HTMLElement,
    shortcut: "h1" | "h2" | "h3" | "ul",
  ) {
    setBlocks((prev) => {
      const before = prev[blockIndex];
      if (!before) return prev;
      if (shortcut === "ul") {
        const newBlock: ListBlock = {
          id: createBlockId(),
          type: "ul",
          items: [{ id: createBlockId("li"), text: "" }],
        };
        const next = [...prev];
        next.splice(blockIndex, 1, newBlock);
        return next;
      }
      const newBlock: ParagraphBlock = {
        id: createBlockId(),
        type: shortcut,
        text: "",
      };
      const next = [...prev];
      next.splice(blockIndex, 1, newBlock);
      return next;
    });
    requestAnimationFrame(() => {
      if (shortcut === "ul") {
        const entries = Object.entries(listItemRefs.current);
        focusElementAtEnd(
          entries.length ? entries[entries.length - 1][1] : target,
        );
      } else {
        const entries = Object.entries(blockRefs.current);
        focusElementAtEnd(
          entries.length ? entries[entries.length - 1][1] : target,
        );
      }
    });
  }

  function onParagraphKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    block: ParagraphBlock,
    index: number,
  ) {
    if (e.key === "Enter") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        // Create new block below
        const newBlock: ParagraphBlock = {
          id: createBlockId(),
          type: "paragraph",
          text: "",
        };
        insertBlockAfter(index, newBlock);
        markSaved();
        return;
      }
    }

    if (e.key === "Backspace") {
      const text = (e.currentTarget.textContent || "").trim();
      if (text.length === 0 && index > 0) {
        e.preventDefault();
        // Delete this block and focus previous
        const prev = blocks[index - 1];
        if (prev) {
          if (prev.type === "ul") {
            const lastItem = prev.items[prev.items.length - 1];
            focusElementAtEnd(listItemRefs.current[lastItem.id] || null);
          } else {
            focusElementAtEnd(blockRefs.current[prev.id] || null);
          }
        }
        // Remove current block
        setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
        markSaved();
        return;
      }
    }

    if (e.key === "ArrowUp") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        const prev = blocks[index - 1];
        if (prev) {
          if (prev.type === "ul") {
            const lastItem = prev.items[prev.items.length - 1];
            focusElementAtEnd(listItemRefs.current[lastItem.id] || null);
          } else {
            focusElementAtEnd(blockRefs.current[prev.id] || null);
          }
        }
      }
    }

    if (e.key === "ArrowDown") {
      const el = blockRefs.current[block.id];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        const next = blocks[index + 1];
        if (next) {
          if (next.type === "ul") {
            const firstItem = next.items[0];
            focusElementAtStart(listItemRefs.current[firstItem.id] || null);
          } else {
            focusElementAtStart(blockRefs.current[next.id] || null);
          }
        }
      }
    }

    // Shortcuts: only when content is exactly marker and we press Space
    if (e.key === " " || e.code === "Space") {
      const text = (e.currentTarget.textContent || "").trim();
      if (text === "#") {
        e.preventDefault();
        e.stopPropagation();
        transformShortcut(index, e.currentTarget, "h1");
        return;
      }
      if (text === "##") {
        e.preventDefault();
        e.stopPropagation();
        transformShortcut(index, e.currentTarget, "h2");
        return;
      }
      if (text === "###") {
        e.preventDefault();
        e.stopPropagation();
        transformShortcut(index, e.currentTarget, "h3");
        return;
      }
      if (text === "-") {
        e.preventDefault();
        e.stopPropagation();
        transformShortcut(index, e.currentTarget, "ul");
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
      const el = listItemRefs.current[itemId]!;
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        if (itemIndex > 0) {
          const prevItem = block.items[itemIndex - 1];
          focusElementAtEnd(listItemRefs.current[prevItem.id] || null);
        } else {
          const prevBlock = blocks[blockIndex - 1];
          if (prevBlock) {
            if (prevBlock.type === "ul") {
              const lastItem = prevBlock.items[prevBlock.items.length - 1];
              focusElementAtEnd(listItemRefs.current[lastItem.id] || null);
            } else {
              focusElementAtEnd(blockRefs.current[prevBlock.id] || null);
            }
          }
        }
      }
    }

    if (e.key === "ArrowDown") {
      const el = listItemRefs.current[itemId]!;
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        if (itemIndex < block.items.length - 1) {
          const nextItem = block.items[itemIndex + 1];
          focusElementAtStart(listItemRefs.current[nextItem.id] || null);
        } else {
          const nextBlock = blocks[blockIndex + 1];
          if (nextBlock) {
            if (nextBlock.type === "ul") {
              const firstItem = nextBlock.items[0];
              focusElementAtStart(listItemRefs.current[firstItem.id] || null);
            } else {
              focusElementAtStart(blockRefs.current[nextBlock.id] || null);
            }
          }
        }
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const text = (e.currentTarget.textContent || "").trim();
      if (text.length === 0) {
        // Exit list: create paragraph block after the list
        setBlocks((prev) => {
          const before = prev[blockIndex] as ListBlock;
          const newItems = before.items.filter((it) => it.id !== itemId);
          const nextBlocks = [...prev];
          if (newItems.length === 0) {
            // Remove entire list block and insert paragraph
            const paragraph: ParagraphBlock = {
              id: createBlockId(),
              type: "paragraph",
              text: "",
            };
            nextBlocks.splice(blockIndex, 1, paragraph);
          } else {
            // Replace list with updated items, then insert paragraph block after
            nextBlocks[blockIndex] = { ...before, items: newItems };
            nextBlocks.splice(blockIndex + 1, 0, {
              id: createBlockId(),
              type: "paragraph",
              text: "",
            });
          }
          return nextBlocks;
        });
        markSaved();
        requestAnimationFrame(() => {
          const entries = Object.entries(blockRefs.current);
          focusElementAtEnd(
            entries.length ? entries[entries.length - 1][1] : null,
          );
        });
        return;
      }
      // Insert a new list item below
      setBlocks((prev) =>
        prev.map((b, idx) => {
          if (idx !== blockIndex || b.type !== "ul") return b;
          const newItem = { id: createBlockId("li"), text: "" };
          const newItems = [
            ...b.items.slice(0, itemIndex + 1),
            newItem,
            ...b.items.slice(itemIndex + 1),
          ];
          return { ...b, items: newItems };
        }),
      );
      markSaved();
      requestAnimationFrame(() => {
        const entries = Object.entries(listItemRefs.current);
        focusElementAtEnd(
          entries.length ? entries[entries.length - 1][1] : null,
        );
      });
      return;
    }

    if (e.key === "Backspace") {
      const text = (e.currentTarget.textContent || "").trim();
      if (text.length === 0) {
        e.preventDefault();
        const isOnlyItem = block.items.length === 1;
        const focusPrev = () => {
          if (itemIndex > 0) {
            const prevItem = block.items[itemIndex - 1];
            focusElementAtEnd(listItemRefs.current[prevItem.id] || null);
            return;
          }
          const prevBlock = blocks[blockIndex - 1];
          if (prevBlock) {
            if (prevBlock.type === "ul") {
              const lastItem = prevBlock.items[prevBlock.items.length - 1];
              focusElementAtEnd(listItemRefs.current[lastItem.id] || null);
            } else {
              focusElementAtEnd(blockRefs.current[prevBlock.id] || null);
            }
          } else if (!isOnlyItem) {
            const nextItem = block.items[itemIndex + 1];
            if (nextItem) {
              focusElementAtEnd(listItemRefs.current[nextItem.id] || null);
            }
          }
        };

        setBlocks((prev) => {
          const before = prev[blockIndex] as ListBlock;
          const newItems = before.items.filter((_, i) => i !== itemIndex);
          const next = [...prev];
          if (newItems.length === 0) {
            next.splice(blockIndex, 1);
          } else {
            next[blockIndex] = { ...before, items: newItems };
          }
          return next;
        });
        markSaved();
        requestAnimationFrame(focusPrev);
        return;
      }
    }
  }

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
                className={cn(blockStyles.container.ul, blockStyles.list.ul)}
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

          // Paragraph, h1, h2, h3
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
                    : block.type === "h1"
                      ? "Heading 1"
                      : block.type === "h2"
                        ? "Heading 2"
                        : "Heading 3"
                }
                onInput={(e) =>
                  updateParagraph(block.id, e.currentTarget.textContent || "")
                }
                onKeyDown={(e) => onParagraphKeyDown(e, block, blockIndex)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
