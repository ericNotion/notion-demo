"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { NotionShell } from "../shell";

const titleAtom = atomWithStorage(
  "eric-nc-design-refs-title",
  "Design references",
);
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-design-refs-blocks", [
  {
    id: createBlockId(),
    type: "paragraph",
    text: "A running collection of design patterns, UI inspirations, and component references for the team.",
  },
  { id: createBlockId(), type: "h2", text: "Navigation patterns" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Sidebar with collapsible sections (Notion, Linear)",
      },
      {
        id: createBlockId("li"),
        text: "Command palette for quick actions (⌘K pattern)",
      },
      {
        id: createBlockId("li"),
        text: "Breadcrumb trails for deep page hierarchies",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "Data display" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Table views with inline editing and sort/filter",
      },
      {
        id: createBlockId("li"),
        text: "Board views with drag-and-drop columns",
      },
      {
        id: createBlockId("li"),
        text: "Timeline/Gantt views for project tracking",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "Typography" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "Stick to the existing type scale. Body at 14px, titles at 40px, headings at 24/20/18. Use semantic tokens for color.",
  },
  { id: createBlockId(), type: "paragraph", text: "" },
]);

export default function Page() {
  return (
    <NotionShell title="Design references">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-8">
        <div className="pt-[40px] pb-[4px]">
          <div className="mb-4 text-[78px] leading-[86px]">🎨</div>
        </div>
        <TitleEditor
          className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-hidden"
          titleAtom={titleAtom}
          lastSavedAtom={lastSavedAtom}
          placeholder="Untitled"
        />
        <div className="mt-4 flex-1">
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
