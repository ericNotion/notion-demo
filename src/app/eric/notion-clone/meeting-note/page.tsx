"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { docOnDocIcon } from "@nds-icons/docOnDoc/default.icon";
import { pencilLineIcon } from "@nds-icons/pencilLine/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { viewCalendarIcon } from "@nds-icons/viewCalendar/default.icon";
import { volumeOffIcon } from "@nds-icons/volumeOff/default.icon";
import { volumeOnIcon } from "@nds-icons/volumeOn/default.icon";
import { useMemo, useRef, useState } from "react";

function formatMeetingTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

function DateMention({ children }: { children?: React.ReactNode }) {
  return (
    <span className="text-[#9B9A97] dark:text-[#6B6B6B]">
      {children ?? "@Today"}
    </span>
  );
}

const INSTRUCTION_OPTIONS = [
  { id: "auto", label: "Auto", detail: "Default", icon: "🪄" },
  { id: "candidate", label: "Candidate Interview", icon: "👤" },
  { id: "customer", label: "Customer Call", icon: "📞" },
  { id: "standup", label: "Stand-Up", icon: "👥" },
];

function InstructionsDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("auto");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  const current = INSTRUCTION_OPTIONS.find((o) => o.id === selected);

  const handleOpen = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 4, left: rect.left });
    }
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="text-primary flex items-center gap-1 text-xs font-medium"
        onClick={handleOpen}
      >
        {current?.label ?? "Auto"}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-current"
        >
          <path
            d="M2.5 4L5 6.5L7.5 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            className="bg-elevated fixed z-50 w-56 rounded-lg border border-black/8 py-1 shadow-sm dark:border-white/10"
            style={{ top: menuPos.top, left: menuPos.left }}
          >
            <p className="text-tertiary px-3 py-1.5 text-[11px] font-medium">
              Summary instructions
            </p>
            {INSTRUCTION_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={cn(
                  "hover:bg-secondary-translucent flex w-full items-center gap-2.5 px-3 py-1.5 text-left text-sm",
                  selected === opt.id && "text-primary",
                )}
                onClick={() => {
                  setSelected(opt.id);
                  setOpen(false);
                }}
              >
                <span className="text-sm">{opt.icon}</span>
                <span className="text-primary flex-1 text-[13px]">
                  {opt.label}
                  {opt.detail && (
                    <span className="text-tertiary ml-1.5 text-[11px]">
                      {opt.detail}
                    </span>
                  )}
                </span>
                {selected === opt.id && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    className="text-accent-blue shrink-0"
                  >
                    <path
                      d="M3 7l3 3 5-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
            <div className="border-primary mx-2 my-1 border-t" />
            <button
              type="button"
              className="hover:bg-secondary-translucent flex w-full items-center gap-2.5 px-3 py-1.5 text-left"
            >
              <span className="text-accent-blue text-sm">＋</span>
              <span className="text-accent-blue text-[13px]">
                Add custom instructions
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function MeetingNotePage() {
  const timeStr = useMemo(() => formatMeetingTime(), []);
  const [notes, setNotes] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-8 pb-[30vh]">
      <div className="pt-[40px] pb-[4px]">
        <h1 className="text-primary text-[40px] leading-[1.2] font-bold">
          <DateMention>@Today</DateMention> {timeStr}
        </h1>
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center gap-2">
          <Icon icon={viewCalendarIcon} size={18} color="secondary" />
          <span className="text-tertiary text-sm">·</span>
          <h2 className="text-primary text-lg font-semibold">
            Meeting <DateMention>@Today</DateMention>
          </h2>
        </div>

        <div className="border-primary overflow-hidden rounded-lg border shadow-xs">
          <div className="border-primary flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-1.5">
              <div className="bg-secondary-translucent flex items-center gap-1.5 rounded-md px-2 py-1">
                <Icon icon={pencilLineIcon} size={14} color="secondary" />
                <span className="text-primary text-sm font-medium">Notes</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="text-tertiary hover:bg-secondary-translucent rounded-md p-1.5"
              >
                <Icon icon={slidersIcon} size={16} color="inherit" />
              </button>
              <Button
                variant="primary"
                size="sm"
                className="h-7 rounded-md px-3 text-xs font-medium"
                onClick={() => setIsTranscribing(!isTranscribing)}
              >
                {isTranscribing ? "Stop transcribing" : "Start transcribing"}
              </Button>
            </div>
          </div>

          <div className="px-4 py-4">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notion AI will summarize the notes and transcript"
              className="text-primary placeholder:text-tertiary min-h-[80px] w-full resize-none bg-transparent text-sm outline-hidden"
            />
          </div>

          <div className="border-primary flex items-center justify-between border-t px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-tertiary text-xs">Instructions:</span>
              <InstructionsDropdown />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-tertiary max-w-[320px] truncate text-[11px]">
                By starting, you confirm everyone consents to being recorded and
                transcribed.
              </span>
              <button
                type="button"
                className="text-tertiary hover:text-secondary p-1"
              >
                <Icon icon={volumeOnIcon} size={14} color="inherit" />
              </button>
              <button
                type="button"
                className="text-tertiary hover:text-secondary p-1"
              >
                <Icon icon={volumeOffIcon} size={14} color="inherit" />
              </button>
              <button
                type="button"
                className="text-tertiary hover:text-secondary p-1"
              >
                <Icon icon={docOnDocIcon} size={14} color="inherit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
