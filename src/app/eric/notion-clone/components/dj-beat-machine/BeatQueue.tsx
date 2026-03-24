"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { playButtonIcon } from "@nds-icons/playButton/default.icon";
import type { BeatPattern } from "./types";

interface BeatQueueProps {
  queue: BeatPattern[];
  currentBeatId: string | null;
  onSelectBeat: (beat: BeatPattern) => void;
}

export function BeatQueue({
  queue,
  currentBeatId,
  onSelectBeat,
}: BeatQueueProps) {
  if (queue.length === 0) {
    return (
      <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center">
        <p className="text-tertiary text-sm">
          No beats in queue. Create and save a beat to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 mb-3">
        <Icon icon={playButtonIcon} className="text-primary" size="small" />
        <span className="text-body-sm text-primary font-medium">
          Beat Queue ({queue.length})
        </span>
      </div>
      <div className="space-y-1.5">
        {queue.map((beat, index) => {
          const isPlaying = beat.id === currentBeatId;
          return (
            <button
              key={beat.id}
              type="button"
              onClick={() => onSelectBeat(beat)}
              className={cn(
                "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all",
                isPlaying
                  ? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 shadow-lg"
                  : "bg-gray-800/50 hover:bg-gray-700/50",
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold",
                  isPlaying
                    ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white animate-pulse"
                    : "bg-gray-700 text-gray-400",
                )}
              >
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={cn(
                    "text-sm font-medium truncate",
                    isPlaying ? "text-white" : "text-primary",
                  )}
                >
                  {beat.name}
                </div>
                <div className="flex items-center gap-2 text-xs text-tertiary">
                  <span>{beat.contributor}</span>
                  <span>•</span>
                  <span>{beat.bpm} BPM</span>
                </div>
              </div>
              {isPlaying && (
                <div className="flex gap-0.5">
                  <div className="h-4 w-1 animate-pulse rounded-full bg-purple-400" />
                  <div
                    className="h-4 w-1 animate-pulse rounded-full bg-pink-400"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="h-4 w-1 animate-pulse rounded-full bg-purple-400"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
