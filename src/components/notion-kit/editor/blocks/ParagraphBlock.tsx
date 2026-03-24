"use client";

import { cn } from "@/utils/cn";
import {
  type ParagraphBlock as ParagraphBlockType,
  createBlockId,
} from "../atoms";
import {
  focusAtStart,
  isCaretAtEnd,
  isCaretAtStart,
  splitTextAtCaret,
} from "../selection";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

const elementStyles: Record<string, string> = {
  paragraph:
    "editable-placeholder content-text-block outline-none focus:ring-0 px-[2px] py-[0px]",
  h1: "editable-placeholder content-h1 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
  h2: "editable-placeholder content-h2 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
  h3: "editable-placeholder content-h3 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
  h4: "editable-placeholder content-h4 font-bold outline-none focus:ring-0 px-[2px] py-[0px]",
};

const placeholderText: Record<string, string> = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  paragraph: "",
};

const dragHandleOffset: Record<string, number> = {
  paragraph: 0,
  h1: 8,
  h2: 4,
  h3: 1,
  h4: 0,
};

const spacingByType: Record<string, string> = {
  paragraph: "pt-[6px] pb-[6px]",
  h1: "pt-[30px] pb-[6px]",
  h2: "pt-[22px] pb-[6px]",
  h3: "pt-[16px] pb-[6px]",
  h4: "pt-[12px] pb-[6px]",
};

const markdownShortcuts: Record<string, string> = {
  "#": "h1",
  "##": "h2",
  "###": "h3",
  "####": "h4",
  "---": "divider",
  "-": "ul",
};

function ParagraphBlockComponent({
  block,
  blockIndex,
  isDragging,
  wrapperRef,
  blockRef,
  updateBlock,
  insertAfter,
  remove: _remove,
  transform,
  focusPrev,
  focusNext,
  mergeIntoPrev,
  startDrag,
  openSlashMenu,
  closeSlashMenu,
  slashMenuOpen,
  slashMenuSelectedIndex,
  setSlashMenuIndex,
  executeSlashCommand,
  paragraphPlaceholder,
  onBackspaceAtStart,
}: BlockComponentProps) {
  const para = block as ParagraphBlockType;

  return (
    <div
      ref={wrapperRef}
      className={cn(
        spacingByType[block.type] || "pt-[6px] pb-[6px]",
        isDragging && "opacity-40",
      )}
    >
      <div className="group/block relative">
        <DragHandle
          className="-left-[52px]"
          style={
            dragHandleOffset[block.type]
              ? { top: dragHandleOffset[block.type] }
              : undefined
          }
          onAdd={() =>
            insertAfter({
              id: createBlockId(),
              type: "paragraph",
              text: "",
            })
          }
          onGripPointerDown={(e) => startDrag(e)}
        />
        <div
          ref={(el) => blockRef(el)}
          contentEditable
          suppressContentEditableWarning
          className={elementStyles[block.type]}
          data-block-id={block.id}
          data-block-type={block.type}
          data-placeholder={
            block.type === "paragraph"
              ? paragraphPlaceholder
              : placeholderText[block.type]
          }
          onInput={(e) => {
            const text = e.currentTarget.textContent || "";
            updateBlock({ text });

            if (text.startsWith("/")) {
              openSlashMenu(text.slice(1));
            } else if (slashMenuOpen) {
              closeSlashMenu();
            }
          }}
          onKeyDown={(e) => {
            if (slashMenuOpen) {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSlashMenuIndex(slashMenuSelectedIndex + 1);
                return;
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setSlashMenuIndex(slashMenuSelectedIndex - 1);
                return;
              }
              if (e.key === "Enter") {
                e.preventDefault();
                executeSlashCommand(block.type);
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
              const el = e.currentTarget;
              const split = splitTextAtCaret(el);
              const beforeText = split?.before ?? para.text;
              const afterText = split?.after ?? "";
              const newBlockId = createBlockId();
              updateBlock({ text: beforeText });
              insertAfter({
                id: newBlockId,
                type: "paragraph",
                text: afterText,
              });
              requestAnimationFrame(() => {
                const newEl = document.querySelector(
                  `[data-block-id="${newBlockId}"]`,
                ) as HTMLElement | null;
                if (newEl) focusAtStart(newEl);
              });
              return;
            }

            if (e.key === "Backspace") {
              const el = e.currentTarget;
              const text = (el.textContent || "").trim();
              if (slashMenuOpen && text.length === 0) closeSlashMenu();
              if (
                blockIndex === 0 &&
                isCaretAtStart(el) &&
                onBackspaceAtStart
              ) {
                e.preventDefault();
                onBackspaceAtStart();
                return;
              }
              if (isCaretAtStart(el) && blockIndex > 0) {
                e.preventDefault();
                mergeIntoPrev(text);
                return;
              }
            }

            if (e.key === "ArrowUp") {
              const el = e.currentTarget;
              if (isCaretAtStart(el)) {
                e.preventDefault();
                if (blockIndex === 0 && onBackspaceAtStart) {
                  onBackspaceAtStart();
                } else {
                  focusPrev();
                }
              }
            }

            if (e.key === "ArrowDown") {
              const el = e.currentTarget;
              if (isCaretAtEnd(el)) {
                e.preventDefault();
                focusNext();
              }
            }

            if (e.key === " " || e.code === "Space") {
              const text = (e.currentTarget.textContent || "").trim();
              const shortcutType = markdownShortcuts[text];
              if (shortcutType) {
                e.preventDefault();
                e.stopPropagation();
                transform(shortcutType as any);
                return;
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export const paragraphBlockDef: BlockDefinition = {
  type: "paragraph",
  slashCommand: {
    id: "text",
    label: "Text",
    description: "Just start writing with plain text.",
    icon: (
      <CmdIcon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.5 5.5V4H15.5V5.5H10.75V16H9.25V5.5H4.5Z"
            fill="currentColor"
            className="text-secondary"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["paragraph", "p", "text"],
    section: "basic",
  },
  Component: ParagraphBlockComponent,
};

export const h1BlockDef: BlockDefinition = {
  type: "h1",
  slashCommand: {
    id: "heading1",
    label: "Heading 1",
    description: "Big section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">1</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h1", "heading", "title", "#"],
    shortcut: "#",
    section: "basic",
  },
  markdownShortcut: "#",
  Component: ParagraphBlockComponent,
};

export const h2BlockDef: BlockDefinition = {
  type: "h2",
  slashCommand: {
    id: "heading2",
    label: "Heading 2",
    description: "Medium section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">2</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h2", "heading", "subheading", "##"],
    shortcut: "##",
    section: "basic",
  },
  markdownShortcut: "##",
  Component: ParagraphBlockComponent,
};

export const h3BlockDef: BlockDefinition = {
  type: "h3",
  slashCommand: {
    id: "heading3",
    label: "Heading 3",
    description: "Small section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">3</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h3", "heading", "subheading", "###"],
    shortcut: "###",
    section: "basic",
  },
  markdownShortcut: "###",
  Component: ParagraphBlockComponent,
};

export const h4BlockDef: BlockDefinition = {
  type: "h4",
  slashCommand: {
    id: "heading4",
    label: "Heading 4",
    description: "Smallest section heading.",
    icon: (
      <CmdIcon>
        <span className="text-secondary text-sm font-bold">
          H<span className="text-xs">4</span>
        </span>
      </CmdIcon>
    ),
    keywords: ["h4", "heading", "subheading", "####"],
    shortcut: "####",
    section: "basic",
  },
  markdownShortcut: "####",
  Component: ParagraphBlockComponent,
};
