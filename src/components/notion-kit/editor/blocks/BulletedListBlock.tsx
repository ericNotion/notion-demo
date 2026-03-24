"use client";

import { cn } from "@/utils/cn";
import { useRef } from "react";
import { type ListBlock as ListBlockType, createBlockId } from "../atoms";
import {
  focusAtEnd,
  focusAtOffset,
  focusAtStart,
  isCaretAtEnd,
  isCaretAtStart,
  splitTextAtCaret,
} from "../selection";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function BulletedListBlockComponent({
  block,
  blockIndex: _blockIndex,
  isDragging,
  wrapperRef,
  listItemRef,
  updateBlock,
  insertAfter,
  remove: _remove,
  transform,
  focusPrev,
  focusNext,
  markSaved,
  mergeIntoPrev,
  startDrag,
}: BlockComponentProps) {
  const listBlock = block as ListBlockType;
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  const setItemRef = (itemId: string, el: HTMLElement | null) => {
    itemRefs.current[itemId] = el;
    listItemRef(itemId, el);
  };

  const handleItemKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    itemIndex: number,
    itemId: string,
  ) => {
    if (e.key === "ArrowUp") {
      const el = itemRefs.current[itemId];
      if (el && isCaretAtStart(el)) {
        e.preventDefault();
        if (itemIndex > 0) {
          focusAtEnd(
            itemRefs.current[listBlock.items[itemIndex - 1].id] || null,
          );
        } else {
          focusPrev();
        }
      }
    }

    if (e.key === "ArrowDown") {
      const el = itemRefs.current[itemId];
      if (el && isCaretAtEnd(el)) {
        e.preventDefault();
        if (itemIndex < listBlock.items.length - 1) {
          focusAtStart(
            itemRefs.current[listBlock.items[itemIndex + 1].id] || null,
          );
        } else {
          focusNext();
        }
      }
    }

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = (e.currentTarget.textContent || "").trim();

      if (text.length === 0) {
        const newBlockId = createBlockId();
        const remaining = listBlock.items.filter((it) => it.id !== itemId);
        if (remaining.length === 0) {
          transform("paragraph");
        } else {
          updateBlock({ items: remaining });
          insertAfter({
            id: newBlockId,
            type: "paragraph",
            text: "",
          });
          requestAnimationFrame(() => {
            const newEl = document.querySelector(
              `[data-block-id="${newBlockId}"]`,
            ) as HTMLElement | null;
            if (newEl) focusAtStart(newEl);
          });
        }
        markSaved();
        return;
      }

      const el = itemRefs.current[itemId];
      const split = el ? splitTextAtCaret(el) : null;
      const beforeText = split?.before ?? text;
      const afterText = split?.after ?? "";

      const newItemId = createBlockId("li");
      const newItems = [...listBlock.items];
      newItems[itemIndex] = { ...newItems[itemIndex], text: beforeText };
      newItems.splice(itemIndex + 1, 0, { id: newItemId, text: afterText });
      updateBlock({ items: newItems });
      markSaved();
      requestAnimationFrame(() => {
        focusAtStart(itemRefs.current[newItemId] || null);
      });
      return;
    }

    if (e.key === "Backspace") {
      const el = itemRefs.current[itemId];
      const text = (e.currentTarget.textContent || "").trim();

      if (el && isCaretAtStart(el) && itemIndex > 0) {
        e.preventDefault();
        const prevItem = listBlock.items[itemIndex - 1];
        const prevText = prevItem.text || "";
        const caretPos = prevText.length;
        const mergedText = prevText + text;
        const newItems = [...listBlock.items];
        newItems[itemIndex - 1] = { ...prevItem, text: mergedText };
        newItems.splice(itemIndex, 1);
        updateBlock({ items: newItems });
        markSaved();
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            focusAtOffset(itemRefs.current[prevItem.id] || null, caretPos);
          }),
        );
        return;
      }

      if (el && isCaretAtStart(el) && itemIndex === 0) {
        e.preventDefault();
        mergeIntoPrev(text);
        return;
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[6px] pb-[6px]", isDragging && "opacity-40")}
    >
      {listBlock.items.map((item, itemIndex) => (
        <div
          key={item.id}
          className="group/item relative flex items-center ps-[22px]"
        >
          <DragHandle
            className="top-1/2 -left-[30px] -translate-y-1/2"
            groupClass="group-hover/item:opacity-100 group-focus-within/item:opacity-100"
            onAdd={() =>
              insertAfter({
                id: createBlockId(),
                type: "paragraph",
                text: "",
              })
            }
            onGripPointerDown={(e) => startDrag(e)}
          />
          <span className="text-primary mr-1.5 block size-[5px] shrink-0 rounded-full bg-current" />
          <div
            ref={(el) => setItemRef(item.id, el)}
            contentEditable
            suppressContentEditableWarning
            className="editable-placeholder flex-1 py-[3px] outline-hidden focus:ring-0"
            data-block-id={block.id}
            data-item-id={item.id}
            data-placeholder="List item"
            onInput={(e) => {
              const newItems = [...listBlock.items];
              newItems[itemIndex] = {
                ...newItems[itemIndex],
                text: e.currentTarget.textContent || "",
              };
              updateBlock({ items: newItems });
              markSaved();
            }}
            onKeyDown={(e) => handleItemKeyDown(e, itemIndex, item.id)}
          />
        </div>
      ))}
    </div>
  );
}

export const bulletedListBlockDef: BlockDefinition = {
  type: "ul",
  slashCommand: {
    id: "bulleted-list",
    label: "Bulleted List",
    description: "Create a simple bulleted list.",
    icon: (
      <CmdIcon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-secondary"
        >
          <circle cx="4" cy="5" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="4.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
          <circle cx="4" cy="9" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="8.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
          <circle cx="4" cy="13" r="1.5" fill="currentColor" />
          <rect
            x="7"
            y="12.25"
            width="8"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["ul", "list", "bullet", "bullets", "-"],
    shortcut: "-",
    section: "basic",
  },
  markdownShortcut: "-",
  Component: BulletedListBlockComponent,
};
