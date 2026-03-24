"use client";

import { cn } from "@/utils/cn";
import { createBlockId } from "../atoms";
import { CmdIcon, DragHandle } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function BeatMachineBlockComponent({
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
  renderBeatMachineBlock,
}: BlockComponentProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const isInput =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable;

    if ((e.key === "Backspace" || e.key === "Delete") && !isInput) {
      e.preventDefault();
      selectGrip();
      focusPrev();
      remove();
    }
    if (e.key === "ArrowUp" && !isInput) {
      e.preventDefault();
      focusPrev();
    }
    if (e.key === "ArrowDown" && !isInput) {
      e.preventDefault();
      focusNext();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[8px] pb-[8px]", isDragging && "opacity-40")}
    >
      <div className="group/block relative">
        <DragHandle
          className="-left-[52px]"
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
          tabIndex={0}
          data-block-id={block.id}
          className={cn(
            "rounded-lg outline-hidden",
            isGripSelected && "bg-blue-50 dark:bg-blue-950/30",
          )}
          onKeyDown={handleKeyDown}
        >
          {renderBeatMachineBlock ? (
            renderBeatMachineBlock()
          ) : (
            <div className="bg-secondary border-primary flex items-center gap-3 rounded-lg border p-6">
              <span className="text-2xl">🎵</span>
              <div>
                <div className="text-primary text-sm font-medium">
                  Beat Machine
                </div>
                <div className="text-tertiary text-xs">
                  Interactive step sequencer
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const beatMachineBlockDef: BlockDefinition = {
  type: "beat-machine",
  slashCommand: {
    id: "beat-machine",
    label: "Beat Machine",
    description: "Add an interactive step sequencer.",
    icon: (
      <CmdIcon>
        <span className="text-sm">🎵</span>
      </CmdIcon>
    ),
    keywords: ["beat", "music", "drum", "sequencer", "audio", "dj"],
    section: "inline",
  },
  Component: BeatMachineBlockComponent,
};
