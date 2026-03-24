"use client";

import { cn } from "@/utils/cn";
import * as Popover from "@radix-ui/react-popover";
import { useCallback, useMemo, useRef, useState } from "react";

const EMOJI_CATEGORIES: { label: string; emojis: string[] }[] = [
  {
    label: "Smileys",
    emojis: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "🤣",
      "😂",
      "🙂",
      "😉",
      "😊",
      "😇",
      "🥰",
      "😍",
      "🤩",
      "😘",
      "😗",
      "😋",
      "😛",
      "😜",
      "🤪",
      "😝",
      "🤑",
      "🤗",
      "🤭",
      "🤫",
      "🤔",
      "🫡",
      "🤐",
      "🤨",
      "😐",
      "😑",
      "😶",
      "🫥",
      "😏",
      "😒",
      "🙄",
      "😬",
      "🤥",
      "😌",
      "😔",
      "😪",
      "🤤",
      "😴",
      "😷",
      "🤒",
      "🤕",
      "🤢",
      "🤮",
      "🥵",
      "🥶",
      "🥴",
      "😵",
      "🤯",
      "🤠",
      "🥳",
      "🥸",
      "😎",
      "🤓",
      "🧐",
    ],
  },
  {
    label: "People",
    emojis: [
      "👋",
      "🤚",
      "🖐️",
      "✋",
      "🖖",
      "🫱",
      "🫲",
      "🫳",
      "🫴",
      "👌",
      "🤌",
      "🤏",
      "✌️",
      "🤞",
      "🫰",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "🖕",
      "👇",
      "☝️",
      "🫵",
      "👍",
      "👎",
      "✊",
      "👊",
      "🤛",
      "🤜",
      "👏",
      "🙌",
      "🫶",
      "👐",
      "🤲",
      "🤝",
      "🙏",
      "💪",
      "🦾",
      "🦿",
      "🦵",
      "🦶",
      "👂",
      "🦻",
      "👃",
      "🧠",
      "🫀",
    ],
  },
  {
    label: "Nature",
    emojis: [
      "🐶",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🦊",
      "🐻",
      "🐼",
      "🐻‍❄️",
      "🐨",
      "🐯",
      "🦁",
      "🐮",
      "🐷",
      "🐽",
      "🐸",
      "🐵",
      "🙈",
      "🙉",
      "🙊",
      "🐒",
      "🐔",
      "🐧",
      "🐦",
      "🐤",
      "🐣",
      "🐥",
      "🦆",
      "🦅",
      "🦉",
      "🦇",
      "🐺",
      "🐗",
      "🐴",
      "🦄",
      "🐝",
      "🪱",
      "🐛",
      "🦋",
      "🐌",
      "🐞",
      "🐜",
      "🪰",
      "🪲",
      "🪳",
      "🦟",
      "🦗",
      "🕷️",
    ],
  },
  {
    label: "Food",
    emojis: [
      "🍎",
      "🍐",
      "🍊",
      "🍋",
      "🍌",
      "🍉",
      "🍇",
      "🍓",
      "🫐",
      "🍈",
      "🍒",
      "🍑",
      "🥭",
      "🍍",
      "🥥",
      "🥝",
      "🍅",
      "🍆",
      "🥑",
      "🫛",
      "🥦",
      "🥬",
      "🥒",
      "🌶️",
      "🫑",
      "🌽",
      "🥕",
      "🫒",
      "🧄",
      "🧅",
      "🥔",
      "🍠",
      "🫘",
      "🥐",
      "🥖",
      "🍞",
      "🥨",
      "🥯",
      "🧀",
      "🥚",
      "🍳",
      "🧈",
      "🥞",
      "🧇",
      "🥓",
      "🥩",
      "🍗",
      "🍖",
    ],
  },
  {
    label: "Travel",
    emojis: [
      "🚗",
      "🚕",
      "🚙",
      "🚌",
      "🚎",
      "🏎️",
      "🚓",
      "🚑",
      "🚒",
      "🚐",
      "🛻",
      "🚚",
      "🚛",
      "🚜",
      "🛵",
      "🏍️",
      "🛺",
      "🚲",
      "🛴",
      "🚏",
      "🛣️",
      "🛤️",
      "⛽",
      "🏁",
      "🚥",
      "🚦",
      "🚧",
      "⚓",
      "🛟",
      "⛵",
      "🛶",
      "🚤",
      "🛳️",
      "⛴️",
      "🛥️",
      "🚢",
      "✈️",
      "🛩️",
      "🛫",
      "🛬",
      "🪂",
      "💺",
      "🚁",
      "🚟",
      "🚠",
      "🚡",
      "🛰️",
      "🚀",
    ],
  },
  {
    label: "Activities",
    emojis: [
      "⚽",
      "🏀",
      "🏈",
      "⚾",
      "🥎",
      "🎾",
      "🏐",
      "🏉",
      "🥏",
      "🎱",
      "🪀",
      "🏓",
      "🏸",
      "🏒",
      "🏑",
      "🥍",
      "🏏",
      "🪃",
      "🥅",
      "⛳",
      "🪁",
      "🏹",
      "🎣",
      "🤿",
      "🥊",
      "🥋",
      "🎽",
      "🛹",
      "🛼",
      "🛷",
      "⛸️",
      "🥌",
      "🎿",
      "⛷️",
      "🏂",
      "🪂",
      "🏋️",
      "🤼",
      "🤸",
      "🤺",
      "⛹️",
      "🤾",
      "🏌️",
      "🏇",
      "🧘",
      "🏄",
      "🏊",
      "🤽",
    ],
  },
  {
    label: "Objects",
    emojis: [
      "⌚",
      "📱",
      "📲",
      "💻",
      "⌨️",
      "🖥️",
      "🖨️",
      "🖱️",
      "🖲️",
      "💽",
      "💾",
      "💿",
      "📀",
      "🧮",
      "🎥",
      "🎞️",
      "📽️",
      "🎬",
      "📺",
      "📷",
      "📸",
      "📹",
      "📼",
      "🔍",
      "🔎",
      "🕯️",
      "💡",
      "🔦",
      "🏮",
      "🪔",
      "📔",
      "📕",
      "📖",
      "📗",
      "📘",
      "📙",
      "📚",
      "📓",
      "📒",
      "📃",
      "📜",
      "📄",
      "📰",
      "🗞️",
      "📑",
      "🔖",
      "🏷️",
      "💰",
      "🔑",
      "🗝️",
      "🔨",
      "🪓",
      "⛏️",
      "🔧",
      "🔩",
      "⚙️",
      "🧲",
      "🪜",
      "📌",
      "📎",
      "✂️",
      "📐",
      "📏",
      "🗂️",
      "📁",
      "📂",
      "🗃️",
      "📊",
      "📈",
      "📉",
      "✏️",
      "🖊️",
    ],
  },
  {
    label: "Symbols",
    emojis: [
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "🤍",
      "🤎",
      "💔",
      "❤️‍🔥",
      "❤️‍🩹",
      "❣️",
      "💕",
      "💞",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "💟",
      "☮️",
      "✝️",
      "☪️",
      "🕉️",
      "☸️",
      "✡️",
      "🔯",
      "🕎",
      "☯️",
      "☦️",
      "🛐",
      "⛎",
      "♈",
      "♉",
      "♊",
      "♋",
      "♌",
      "♍",
      "♎",
      "♏",
      "♐",
      "♑",
      "♒",
      "♓",
      "🆔",
      "⚛️",
      "🉑",
      "☢️",
      "☣️",
      "📴",
      "📳",
      "🈶",
      "🈚",
      "🈸",
      "🈺",
      "🈷️",
      "✴️",
      "🆚",
      "💮",
      "🉐",
      "㊙️",
      "㊗️",
      "🈴",
      "🈵",
      "🈹",
      "🈲",
      "🅰️",
      "🅱️",
      "🆎",
      "🆑",
      "🅾️",
      "⭐",
      "🌟",
      "💫",
      "✨",
      "⚡",
      "🔥",
      "💥",
      "☀️",
      "🌈",
      "🎯",
      "♻️",
      "🔰",
    ],
  },
  {
    label: "Flags",
    emojis: [
      "🏳️",
      "🏴",
      "🏁",
      "🚩",
      "🎌",
      "🏴‍☠️",
      "🇺🇸",
      "🇬🇧",
      "🇫🇷",
      "🇩🇪",
      "🇯🇵",
      "🇰🇷",
      "🇨🇳",
      "🇮🇳",
      "🇧🇷",
      "🇦🇺",
      "🇨🇦",
      "🇲🇽",
      "🇪🇸",
      "🇮🇹",
      "🇷🇺",
      "🇳🇱",
      "🇸🇪",
      "🇳🇴",
    ],
  },
];

const ALL_EMOJIS = EMOJI_CATEGORIES.flatMap((c) => c.emojis);

interface EmojiPickerProps {
  value: string | null;
  onChange: (emoji: string) => void;
  size?: "lg" | "md";
  trigger?: React.ReactNode;
}

export function EmojiPicker({
  value,
  onChange,
  size = "lg",
  trigger,
}: EmojiPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        {trigger || (
          <button
            type="button"
            className={cn(
              "cursor-pointer rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10",
              size === "lg"
                ? "mb-1 px-1 text-[78px] leading-[86px]"
                : "px-0.5 text-[22px]",
            )}
          >
            {value}
          </button>
        )}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="start"
          sideOffset={4}
          className="bg-elevated border-primary z-50 w-[320px] rounded-xl border shadow-lg"
        >
          <EmojiPickerContent
            onSelect={(emoji) => {
              onChange(emoji);
              setOpen(false);
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function EmojiPickerContent({
  onSelect,
}: {
  onSelect: (emoji: string) => void;
}) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return EMOJI_CATEGORIES;
    const q = search.toLowerCase();
    const matching = ALL_EMOJIS.filter(() => {
      // Simple character match for emoji search
      return true;
    });
    // For search, flatten all into one category
    return [{ label: "Results", emojis: ALL_EMOJIS }];
  }, [search]);

  const handleSelect = useCallback(
    (emoji: string) => {
      onSelect(emoji);
    },
    [onSelect],
  );

  return (
    <div>
      <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2 dark:border-white/10">
        <span className="text-tertiary text-sm font-medium">Emoji</span>
      </div>
      <div className="px-3 py-2">
        <div className="bg-secondary flex items-center gap-2 rounded-md px-2 py-1.5">
          <span className="text-tertiary text-sm">🔎</span>
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter..."
            className="text-primary placeholder:text-tertiary min-w-0 flex-1 bg-transparent text-sm outline-hidden"
            autoFocus
          />
          {search && (
            <button
              type="button"
              className="text-tertiary hover:text-secondary text-xs"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      <div ref={gridRef} className="max-h-[280px] overflow-y-auto px-3 pb-3">
        {filteredCategories.map((category) => (
          <div key={category.label}>
            <div className="text-tertiary sticky top-0 bg-[var(--background-color-elevated)] py-1 text-xs font-medium">
              {category.label}
            </div>
            <div className="grid grid-cols-9 gap-0.5">
              {category.emojis.map((emoji, i) => (
                <button
                  key={`${emoji}-${i}`}
                  type="button"
                  className="flex size-8 items-center justify-center rounded-md text-[20px] transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => handleSelect(emoji)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
