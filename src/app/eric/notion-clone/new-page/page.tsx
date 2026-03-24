"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ContentPage } from "../components/ContentPage";

const titleAtom = atomWithStorage("eric-nc-new-page-title", "");
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-new-page-blocks", [
  { id: createBlockId(), type: "paragraph", text: "" },
]);

export default function Page() {
  return (
    <ContentPage
      emoji={null}
      emojiStorageKey="eric-nc-new-page-emoji"
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
      titlePlaceholder="New page"
    />
  );
}
