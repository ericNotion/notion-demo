"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ContentPage } from "../components/ContentPage";

const titleAtom = atomWithStorage(
  "eric-nc-beat-machine-title",
  "DJ Set Beat Machine",
);
const lastSavedAtom = atom<Date | null>(null);
const blocksAtom = atomWithStorage<Block[]>("eric-nc-beat-machine-blocks", [
  {
    id: createBlockId(),
    type: "callout",
    icon: "🎧",
    text: "Create beats, watch them visualize, and share with the community.",
  },
  { id: createBlockId(), type: "beat-machine" },
  { id: createBlockId(), type: "paragraph", text: "" },
]);

export default function BeatMachinePage() {
  return (
    <ContentPage
      emoji="🎵"
      emojiStorageKey="eric-nc-beat-machine-emoji"
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
    />
  );
}
