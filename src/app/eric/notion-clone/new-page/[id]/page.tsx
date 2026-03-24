"use client";

import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";
import { createAtomCache } from "@/utils/createAtomCache";
import { atom } from "jotai";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ContentPage } from "../../components/ContentPage";

const getCachedAtom = createAtomCache<string>();
const getCachedBlocksAtom = createAtomCache<Block[]>();

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const titleAtom = useMemo(
    () => getCachedAtom(`eric-nc-page-${id}-title`, ""),
    [id],
  );
  const lastSavedAtom = useMemo(() => atom<Date | null>(null), []);
  const blocksAtom = useMemo(
    () =>
      getCachedBlocksAtom(`eric-nc-page-${id}-blocks`, [
        { id: createBlockId(), type: "paragraph", text: "" },
      ]),
    [id],
  );

  return (
    <ContentPage
      emoji={null}
      emojiStorageKey={`eric-nc-page-${id}-emoji`}
      titleAtom={titleAtom}
      blocksAtom={blocksAtom}
      lastSavedAtom={lastSavedAtom}
      titlePlaceholder="Untitled"
    />
  );
}
