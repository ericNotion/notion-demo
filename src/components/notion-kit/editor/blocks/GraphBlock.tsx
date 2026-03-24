"use client";

import { Icon } from "@nds-icons";
import { connectionsIcon } from "@nds-icons/connections/default.icon";
import { NodeDiagram } from "@/app/eric/notion-clone/components/NodeDiagram";
import type { BlockComponentProps, BlockDefinition } from "./types";

export function GraphBlock({
  wrapperRef,
  blockRef,
  selectGrip,
  startDrag,
  isGripSelected,
  isDragging,
}: BlockComponentProps) {
  return (
    <div
      ref={wrapperRef}
      data-block-wrapper={true}
      className="group relative"
    >
      <div
        className={`border-primary hover:border-secondary absolute -left-8 top-0 h-6 w-6 cursor-grab rounded opacity-0 transition-all group-hover:opacity-100 ${
          isGripSelected ? "bg-primary opacity-100" : ""
        } ${isDragging ? "cursor-grabbing" : ""}`}
        onPointerDown={startDrag}
        onClick={selectGrip}
      >
        <div className="flex h-full w-full items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-tertiary fill-current">
            <circle cx="2" cy="2" r="1" />
            <circle cx="8" cy="2" r="1" />
            <circle cx="2" cy="5" r="1" />
            <circle cx="8" cy="5" r="1" />
            <circle cx="2" cy="8" r="1" />
            <circle cx="8" cy="8" r="1" />
          </svg>
        </div>
      </div>
      <div ref={blockRef} className="py-2">
        <NodeDiagram />
      </div>
    </div>
  );
}

export const graphBlockDef: BlockDefinition = {
  type: "graph",
  Component: GraphBlock,
  slashCommand: {
    id: "graph",
    label: "Graph view",
    description: "Interactive node diagram showing workspace connections",
    icon: <Icon icon={connectionsIcon} size="sm" color="secondary" />,
    keywords: ["graph", "network", "diagram", "nodes", "connections", "relationships", "roam"],
    section: "inline",
  },
};
