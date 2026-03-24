"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ContentPage } from "../components/ContentPage";
import { CalloutBlock } from "../components/StaticBlocks";

const titleAtom = atomWithStorage("eric-nc-daily-notes-title", "Daily notes");
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-daily-notes-blocks", [
  { id: createBlockId(), type: "h2", text: "Wednesday, March 19" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Shipped the pricing FAQ update to staging",
      },
      {
        id: createBlockId("li"),
        text: "Reviewed Maya's research on onboarding friction",
      },
      {
        id: createBlockId("li"),
        text: "Paired with Jordan on the self-serve flow",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "Tuesday, March 18" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Sprint planning — agreed on cycle theme: activation",
      },
      { id: createBlockId("li"), text: "Drafted the API v2 migration guide" },
      {
        id: createBlockId("li"),
        text: "1:1 with manager — discussed Q2 goals",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "Monday, March 17" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "Short day. Caught up on Slack threads and reviewed the dashboard redesign spec from Sophie.",
  },
  { id: createBlockId(), type: "paragraph", text: "" },
]);

export default function Page() {
  return (
    <ContentPage
      emoji="📝"
      emojiStorageKey="eric-nc-daily-notes-emoji"
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
    >
      <CalloutBlock icon="✏️">
        Jot down what you worked on each day. Quick bullets work best — keep it
        lightweight.
      </CalloutBlock>
    </ContentPage>
  );
}
