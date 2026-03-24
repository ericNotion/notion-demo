"use client";

import { cn } from "@/utils/cn";
import { type CalloutBlock as CalloutBlockType, createBlockId } from "../atoms";
import { isCaretAtEnd, isCaretAtStart } from "../selection";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function CalloutBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
  blockRef,
  updateBlock,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  markSaved: _markSaved,
  startDrag,
  selectGrip,
  renderCalloutIcon,
  onBackspaceAtStart,
  blockIndex,
}: BlockComponentProps) {
  const callout = block as CalloutBlockType;

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[4px] pb-[4px]", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="top-1/2 -left-[52px] -translate-y-1/2"
          onAdd={() =>
            insertAfter({
              id: createBlockId(),
              type: "paragraph",
              text: "",
            })
          }
          onGripPointerDown={(e) => startDrag(e)}
          onGripClick={() => selectGrip()}
        />
        <div
          className={cn(
            "bg-secondary flex gap-3 rounded-lg px-4 py-3",
            isGripSelected &&
              "bg-blue-50 ring-2 ring-blue-200 dark:bg-blue-950/30 dark:ring-blue-800",
          )}
        >
          {renderCalloutIcon ? (
            renderCalloutIcon(callout.icon, (newIcon) => {
              updateBlock({ icon: newIcon });
            })
          ) : (
            <span className="shrink-0 text-lg">{callout.icon}</span>
          )}
          <div
            ref={(el) => blockRef(el)}
            contentEditable
            suppressContentEditableWarning
            className="editable-placeholder text-primary min-w-0 flex-1 text-[15px]/6 outline-hidden"
            data-block-id={block.id}
            data-placeholder="Type something..."
            onInput={(e) => {
              updateBlock({ text: e.currentTarget.textContent || "" });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                insertAfter({
                  id: createBlockId(),
                  type: "paragraph",
                  text: "",
                });
              }
              if (e.key === "Backspace") {
                const text = (e.currentTarget.textContent || "").trim();
                if (text.length === 0 && blockIndex > 0) {
                  e.preventDefault();
                  focusPrev();
                  remove();
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
                const el = e.currentTarget as HTMLElement;
                if (isCaretAtStart(el)) {
                  e.preventDefault();
                  focusPrev();
                }
              }
              if (e.key === "ArrowDown") {
                const el = e.currentTarget as HTMLElement;
                if (isCaretAtEnd(el)) {
                  e.preventDefault();
                  focusNext();
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export const calloutBlockDef: BlockDefinition = {
  type: "callout",
  slashCommand: {
    id: "callout",
    label: "Callout",
    description: "Make writing stand out.",
    icon: (
      <CmdIcon>
        <span className="text-lg">💡</span>
      </CmdIcon>
    ),
    keywords: ["callout", "highlight", "note", "tip"],
    section: "basic",
  },
  Component: CalloutBlockComponent,
};
