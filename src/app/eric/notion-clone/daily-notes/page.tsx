"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { NotionShell } from "../shell";

const titleAtom = atomWithStorage("eric-nc-daily-notes-title", "Daily notes");
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-daily-notes-blocks", [
  {
    id: createBlockId(),
    type: "callout",
    text: "Jot down what you worked on each day. Quick bullets work best — keep it lightweight.",
    icon: "✏️",
  },
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
    <NotionShell title="Daily notes">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-8">
        <div className="pt-[40px] pb-[4px]">
          <div className="mb-4 text-[78px] leading-[86px]">📝</div>
        </div>
        <TitleEditor
          className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-hidden"
          titleAtom={titleAtom}
          lastSavedAtom={lastSavedAtom}
          placeholder="Untitled"
        />
        <div className="mt-2 flex-1">
          <BlockEditor
            className="mx-auto w-full max-w-[710px]"
            blocksAtom={blocksAtom}
            lastSavedAtom={lastSavedAtom}
            paragraphPlaceholder="Type '/' for commands..."
          />
        </div>
      </div>
    </NotionShell>
  );
}
