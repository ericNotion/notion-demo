"use client";

import { Icon } from "@nds-icons";
import { musicNoteTvIcon } from "@nds-icons/musicNoteTv/default.icon";
import { DJBeatMachine } from "@/app/eric/notion-clone/components/DJBeatMachine";
import type { BlockDefinition } from "./types";

export const djBeatMachineBlockDef: BlockDefinition = {
  type: "djbeatmachine",
  slashCommand: {
    id: "djbeatmachine",
    label: "DJ set",
    description: "Create beats and share them - Berlin nightclub style",
    icon: <Icon icon={musicNoteTvIcon} />,
    keywords: ["dj", "beat", "music", "drum", "sound", "techno", "berlin"],
    section: "basic",
  },
  Component: ({ block, wrapperRef }) => {
    return (
      <div
        ref={wrapperRef}
        data-block-id={block.id}
        data-block-wrapper={block.id}
        className="my-4"
      >
        <DJBeatMachine />
      </div>
    );
  },
};
