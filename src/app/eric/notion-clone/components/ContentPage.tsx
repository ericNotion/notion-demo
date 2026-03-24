"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import {
  createBlockId,
  type Block,
  type DatabaseBlock,
} from "@/components/notion-kit/editor/atoms";
import { createAtomCache } from "@/utils/createAtomCache";
import type { PrimitiveAtom, WritableAtom } from "jotai";
import { useAtom, useSetAtom } from "jotai";
import { Suspense, lazy, useMemo, useState } from "react";
import { EmojiPicker } from "./EmojiPicker";

const BeatMachineEmbed = lazy(() =>
  import("./beat-machine/BeatMachineEmbed").then((m) => ({
    default: m.BeatMachineEmbed,
  })),
);

function defaultRenderBeatMachineBlock() {
  return (
    <Suspense
      fallback={
        <div className="bg-secondary animate-pulse rounded-lg p-6 h-96" />
      }
    >
      <BeatMachineEmbed />
    </Suspense>
  );
}

const getEmojiAtom = createAtomCache<string | null>();

interface ContentPageProps {
  emoji?: string | null;
  emojiStorageKey?: string;
  titleAtom: WritableAtom<string, [string | ((prev: string) => string)], void>;
  blocksAtom: WritableAtom<
    Block[],
    [Block[] | ((prev: Block[]) => Block[])],
    void
  >;
  lastSavedAtom: PrimitiveAtom<Date | null>;
  titlePlaceholder?: string;
  paragraphPlaceholder?: string;
  children?: React.ReactNode;
  afterBlocks?: React.ReactNode;
  renderDatabaseBlock?: (
    block: DatabaseBlock,
    onTitleChange: (title: string) => void,
  ) => React.ReactNode;
  renderBeatMachineBlock?: () => React.ReactNode;
}

export function ContentPage({
  emoji: defaultEmoji = "📄",
  emojiStorageKey,
  titleAtom,
  blocksAtom,
  lastSavedAtom,
  titlePlaceholder = "Untitled",
  paragraphPlaceholder = "Press \u2018space\u2019 for AI or \u2018/\u2019 for commands",
  children,
  afterBlocks,
  renderDatabaseBlock,
  renderBeatMachineBlock = defaultRenderBeatMachineBlock,
}: ContentPageProps) {
  const setBlocks = useSetAtom(blocksAtom);
  const emojiAtom = useMemo(
    () =>
      getEmojiAtom(
        emojiStorageKey || "__content-page-emoji-noop__",
        defaultEmoji,
      ),
    [emojiStorageKey, defaultEmoji],
  );
  const [emoji, setEmoji] = useAtom(emojiAtom);
  const [hoveringTitle, setHoveringTitle] = useState(false);

  const handleTitleEnter = () => {
    const newId = createBlockId();
    setBlocks((prev) => [{ id: newId, type: "paragraph", text: "" }, ...prev]);
    requestAnimationFrame(() => {
      const el = document.querySelector(
        `[data-block-id="${newId}"]`,
      ) as HTMLElement | null;
      el?.focus();
    });
  };

  return (
    <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-8 pb-[30vh]">
      <div
        className="pt-[40px] pb-[4px]"
        onMouseEnter={() => setHoveringTitle(true)}
        onMouseLeave={() => setHoveringTitle(false)}
      >
        {emoji ? (
          <div className="mb-4">
            <EmojiPicker value={emoji} onChange={setEmoji} />
          </div>
        ) : (
          <div
            className={`mb-2 flex items-center gap-3 transition-opacity ${hoveringTitle ? "opacity-100" : "opacity-0"}`}
          >
            <EmojiPicker
              value={null}
              onChange={(e) => setEmoji(e)}
              trigger={
                <button
                  type="button"
                  className="text-tertiary hover:bg-secondary flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors"
                >
                  <span className="text-xs">😀</span>
                  <span>Add icon</span>
                </button>
              }
            />
          </div>
        )}
        <TitleEditor
          className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-hidden"
          titleAtom={titleAtom}
          lastSavedAtom={lastSavedAtom}
          placeholder={titlePlaceholder}
          onEnter={handleTitleEnter}
        />
      </div>
      {children && (
        <div className="mx-auto mt-2 w-full max-w-[710px]">{children}</div>
      )}
      <div className={`${children ? "mt-4" : "mt-1"} flex-1`}>
        <BlockEditor
          className="mx-auto w-full max-w-[710px]"
          blocksAtom={blocksAtom}
          lastSavedAtom={lastSavedAtom}
          paragraphPlaceholder={paragraphPlaceholder}
          renderDatabaseBlock={renderDatabaseBlock}
          renderBeatMachineBlock={renderBeatMachineBlock}
          renderCalloutIcon={(icon, onIconChange) => (
            <EmojiPicker value={icon} onChange={onIconChange} size="callout" />
          )}
          onBackspaceAtStart={() => {
            setBlocks((prev) => {
              if (
                prev.length > 0 &&
                prev[0].type === "paragraph" &&
                (prev[0].text || "").trim() === ""
              ) {
                return prev.slice(1);
              }
              return prev;
            });
            const title = document.querySelector(
              ".content-page-title",
            ) as HTMLElement | null;
            if (title) {
              requestAnimationFrame(() => {
                title.focus();
                const sel = window.getSelection();
                if (sel && title.childNodes.length > 0) {
                  const range = document.createRange();
                  range.selectNodeContents(title);
                  range.collapse(false);
                  sel.removeAllRanges();
                  sel.addRange(range);
                }
              });
            }
          }}
        />
        {afterBlocks && (
          <div className="mx-auto w-full max-w-[710px] pt-4">{afterBlocks}</div>
        )}
      </div>
    </div>
  );
}
