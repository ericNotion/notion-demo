"use client";

import { DJBeatMachine } from "@/app/eric/notion-clone/components/dj-beat-machine/DJBeatMachine";
import { cn } from "@/utils/cn";
import type { DJBeatMachineBlock as DJBeatMachineBlockType } from "../atoms";
import { CmdIcon } from "./DragHandle";
import type { BlockComponentProps, BlockDefinition } from "./types";

function DJBeatMachineBlockComponent({
  block,
  isGripSelected,
  isDragging,
  wrapperRef,
}: BlockComponentProps) {
  const djBlock = block as DJBeatMachineBlockType;

  return (
    <div
      ref={wrapperRef}
      className={cn("pt-[4px] pb-[4px]", isDragging && "opacity-40")}
    >
      <div
        className={cn(
          "rounded-lg",
          isGripSelected &&
            "ring-2 ring-blue-200 dark:ring-blue-800",
        )}
      >
        <DJBeatMachine blockId={djBlock.id} />
      </div>
    </div>
  );
}

export const djBeatMachineBlockDef: BlockDefinition = {
  type: "dj-beat-machine",
  slashCommand: {
    id: "dj-beat-machine",
    label: "DJ Beat Machine",
    description: "Berlin nightclub beat sequencer",
    icon: (
      <CmdIcon>
        <span className="text-lg">🎧</span>
      </CmdIcon>
    ),
    keywords: ["dj", "beat", "music", "drum", "sequencer", "berlin", "nightclub"],
    section: "basic",
  },
  Component: DJBeatMachineBlockComponent,
};
