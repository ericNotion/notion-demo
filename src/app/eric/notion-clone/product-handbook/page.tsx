"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ContentPage } from "../components/ContentPage";
import { CalloutBlock } from "../components/StaticBlocks";

const titleAtom = atomWithStorage("eric-nc-handbook-title", "Product handbook");
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-handbook-blocks", [
  {
    id: createBlockId(),
    type: "paragraph",
    text: "The product handbook is the single source of truth for how we build, ship, and iterate. Everyone on the team should read this when they join and revisit it each quarter.",
  },
  { id: createBlockId(), type: "h2", text: "Our principles" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Ship early, learn fast — we'd rather get something out and iterate than wait for perfection",
      },
      {
        id: createBlockId("li"),
        text: "Write it down — decisions that aren't documented didn't happen",
      },
      {
        id: createBlockId("li"),
        text: "Stay close to users — every team member does at least one user call per month",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "Planning rhythm" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "We plan in 6-week cycles. Each cycle begins with a kickoff where we align on the theme and ends with a demo day. Between cycles there's a 2-week cooldown for tech debt, exploration, and recovery.",
  },
  { id: createBlockId(), type: "h2", text: "Review process" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "PRDs go through a lightweight review: author writes the doc, tags two reviewers, and decisions are captured inline. No meetings required unless there's genuine disagreement.",
  },
  { id: createBlockId(), type: "paragraph", text: "" },
]);

export default function Page() {
  return (
    <ContentPage
      emoji="📋"
      emojiStorageKey="eric-nc-handbook-emoji"
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
    >
      <CalloutBlock icon="📅">
        This handbook is reviewed and updated at the start of each quarter. Last
        update: Q1 2026.
      </CalloutBlock>
    </ContentPage>
  );
}
