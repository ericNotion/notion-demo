import type { Block } from "../atoms";
import { bulletedListBlockDef } from "./BulletedListBlock";
import { calloutBlockDef } from "./CalloutBlock";
import { databaseBlockDef } from "./DatabaseBlock";
import { dividerBlockDef } from "./DividerBlock";
import { djBeatMachineBlockDef } from "./DJBeatMachineBlock";
import {
  h1BlockDef,
  h2BlockDef,
  h3BlockDef,
  h4BlockDef,
  paragraphBlockDef,
} from "./ParagraphBlock";
import type { BlockDefinition, SlashCommandEntry } from "./types";

export const blockDefs: BlockDefinition[] = [
  paragraphBlockDef,
  h1BlockDef,
  h2BlockDef,
  h3BlockDef,
  h4BlockDef,
  bulletedListBlockDef,
  calloutBlockDef,
  dividerBlockDef,
  databaseBlockDef,
  djBeatMachineBlockDef,
];

export const blockRegistry = new Map<Block["type"], BlockDefinition>(
  blockDefs.map((def) => [def.type, def]),
);

export const slashCommands: (SlashCommandEntry & {
  blockType: Block["type"];
})[] = blockDefs
  .filter((def) => def.slashCommand)
  .map((def) => ({
    ...def.slashCommand!,
    blockType: def.type,
  }));

export const markdownShortcuts: Record<string, Block["type"]> =
  Object.fromEntries(
    blockDefs
      .filter((def) => def.markdownShortcut)
      .map((def) => [def.markdownShortcut!, def.type]),
  );

export { CmdIcon, DragHandle } from "./DragHandle";
export type {
  BlockComponentProps,
  BlockDefinition,
  SlashCommandEntry,
} from "./types";
