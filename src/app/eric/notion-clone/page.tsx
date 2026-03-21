"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
  CalloutBlock,
  DividerBlock,
  InlineDatabaseBlock,
} from "./components/StaticBlocks";
import { NotionShell } from "./shell";

const titleAtom = atomWithStorage(
  "eric-nc-product-workspace-title",
  "Product workspace",
);
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>(
  "eric-nc-product-workspace-blocks",
  [
    {
      id: createBlockId(),
      type: "paragraph",
      text: "Welcome to the team workspace. This page serves as the central hub for our product development process, including goals, key decisions, and ongoing projects.",
    },
    { id: createBlockId(), type: "h2", text: "Getting started" },
    {
      id: createBlockId(),
      type: "paragraph",
      text: "If you're new to the team, start by reading through the sections below. Each one links to deeper docs and databases you'll use day to day.",
    },
    { id: createBlockId(), type: "h2", text: "Key resources" },
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
    { id: createBlockId(), type: "h2", text: "How we work" },
    {
      id: createBlockId(),
      type: "paragraph",
      text: "We run two-week cycles with a planning session at the start and a demo at the end. Each cycle has a theme that aligns with our quarterly objectives.",
    },
    { id: createBlockId(), type: "paragraph", text: "" },
  ],
);

const BASE = "/eric/notion-clone";

export default function Page() {
  return (
    <NotionShell title="Product workspace">
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-8">
        <div className="pt-[40px] pb-[4px]">
          <div className="mb-4 text-[78px] leading-[86px]">📄</div>
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

          <div className="mx-auto w-full max-w-[710px] pt-4">
            <CalloutBlock icon="💡">
              Start by exploring the sidebar to find docs, databases, and AI
              tools. Use <strong>⌘K</strong> to search across all pages.
            </CalloutBlock>

            <DividerBlock />

            <InlineDatabaseBlock
              title="Launch tracker"
              emoji="🚀"
              href={`${BASE}/launch-tracker`}
              headers={["Name", "Status", "Owner", "Due"]}
              rows={[
                ["Payments migration", "In review", "Priya Shah", "Mar 28"],
                ["Self-serve onboarding", "On track", "Jordan Lee", "Apr 02"],
                ["Customer health report", "Blocked", "Maya Chen", "Apr 04"],
                ["API v2 rollout", "Done", "Lena Park", "Mar 20"],
              ]}
            />

            <DividerBlock />

            <InlineDatabaseBlock
              title="Product ideas"
              emoji="💡"
              href={`${BASE}/product-ideas`}
              headers={["Idea", "Status", "Author", "Votes"]}
              rows={[
                [
                  "Inline AI writing assistant",
                  "Exploring",
                  "Sophie Tran",
                  "24",
                ],
                [
                  "Template gallery for new pages",
                  "Exploring",
                  "Maya Chen",
                  "31",
                ],
                ["Offline mode for mobile", "Parked", "Jordan Lee", "45"],
              ]}
            />
          </div>
        </div>
      </div>
    </NotionShell>
  );
}
