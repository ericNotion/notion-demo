import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";

const initialBlocks: Block[] = [
  {
    id: createBlockId(),
    type: "paragraph",
    text: "Welcome to the team workspace. This page serves as the central hub for our product development process, including goals, key decisions, and ongoing projects.",
  },
  {
    id: createBlockId(),
    type: "h2",
    text: "Getting started",
  },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "If you're new to the team, start by reading through the sections below. Each one links to deeper docs and databases you'll use day to day.",
  },
  {
    id: createBlockId(),
    type: "h2",
    text: "Key resources",
  },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Product roadmap — quarterly goals and feature priorities",
      },
      {
        id: createBlockId("li"),
        text: "Design system — components, tokens, and usage guidelines",
      },
      {
        id: createBlockId("li"),
        text: "Engineering wiki — architecture decisions and runbooks",
      },
      {
        id: createBlockId("li"),
        text: "Meeting notes — weekly syncs and planning sessions",
      },
    ],
  },
  {
    id: createBlockId(),
    type: "h2",
    text: "How we work",
  },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "We run two-week cycles with a planning session at the start and a demo at the end. Each cycle has a theme that aligns with our quarterly objectives. Check the roadmap database for the current cycle's focus areas.",
  },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "",
  },
];

export const documentTitleAtom = atomWithStorage<string>(
  "eric-notion-clone-title",
  "Product workspace",
);

export const blocksAtom = atomWithStorage<Block[]>(
  "eric-notion-clone-blocks",
  initialBlocks,
);

export const lastSavedAtom = atom<Date | null>(null);

// Rainbow Road mode - a fun cosmic/neon visual theme
export const rainbowRoadModeAtom = atomWithStorage<boolean>(
  "eric-notion-clone-rainbow-road-mode",
  false,
);
