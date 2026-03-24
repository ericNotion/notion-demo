"use client";

import { cn } from "@/utils/cn";
import { createBlockId } from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function DividerBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
  insertAfter,
  remove,
  focusPrev,
  focusNext,
  startDrag,
  selectGrip,
}: BlockComponentProps) {
  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[8px] pb-[8px]", isDragging && "opacity-40")}
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
          data-block-id={block.id}
          className={cn(
            "rounded-xs py-1",
            isGripSelected && "bg-blue-50 dark:bg-blue-950/30",
          )}
          onKeyDown={(e) => {
            if (e.key === "Backspace" || e.key === "Delete") {
              e.preventDefault();
              focusPrev();
              remove();
            }
            if (e.key === "Enter") {
              e.preventDefault();
              insertAfter({
                id: createBlockId(),
                type: "paragraph",
                text: "",
              });
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              focusPrev();
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              focusNext();
            }
          }}
        >
          <hr className="border-primary border-t" />
        </div>
      </div>
    </div>
  );
}

export const dividerBlockDef: BlockDefinition = {
  type: "divider",
  slashCommand: {
    id: "divider",
    label: "Divider",
    description: "Visually divide blocks.",
    icon: (
      <CmdIcon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-secondary"
        >
          <rect
            x="3"
            y="9.25"
            width="14"
            height="1.5"
            rx="0.75"
            fill="currentColor"
          />
        </svg>
      </CmdIcon>
    ),
    keywords: ["divider", "hr", "line", "separator", "---"],
    shortcut: "---",
    section: "basic",
  },
  markdownShortcut: "---",
  Component: DividerBlockComponent,
};
