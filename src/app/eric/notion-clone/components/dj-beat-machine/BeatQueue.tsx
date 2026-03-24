"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useAtom } from "jotai";
import { useState } from "react";
import { beatPatternAtom, beatQueueAtom, bpmAtom, queuePlayingIndexAtom, type SavedBeat } from "./atoms";

export function BeatQueue() {
  const [queue, setQueue] = useAtom(beatQueueAtom);
  const [currentPattern] = useAtom(beatPatternAtom);
  const [currentBpm] = useAtom(bpmAtom);
  const [queuePlayingIndex, setQueuePlayingIndex] = useAtom(queuePlayingIndexAtom);
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [beatName, setBeatName] = useState("");

  const handleSaveBeat = () => {
    if (!beatName.trim()) return;

    const newBeat: SavedBeat = {
      id: Date.now().toString(),
      name: beatName.trim(),
      pattern: currentPattern,
      bpm: currentBpm,
      createdAt: Date.now(),
      author: "You",
    };

    setQueue((prev) => [...prev, newBeat]);
    setBeatName("");
    setShowSaveInput(false);
  };

  const handleRemoveBeat = (id: string) => {
    setQueue((prev) => prev.filter((beat) => beat.id !== id));
  };

  const handlePlayBeat = (index: number) => {
    setQueuePlayingIndex(index);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-title-sm text-primary font-semibold">
          Beat Queue
        </h3>
        {!showSaveInput && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSaveInput(true)}
          >
            <Icon icon={plusIcon} size={14} />
            Save Current
          </Button>
        )}
      </div>

      {showSaveInput && (
        <div className="flex gap-2">
          <Input
            placeholder="Beat name..."
            value={beatName}
            onChange={(e) => setBeatName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveBeat();
              if (e.key === "Escape") {
                setShowSaveInput(false);
                setBeatName("");
              }
            }}
            autoFocus
            className="flex-1"
          />
          <Button
            variant="primary"
            size="sm"
            onClick={handleSaveBeat}
            disabled={!beatName.trim()}
          >
            Save
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowSaveInput(false);
              setBeatName("");
            }}
          >
            Cancel
          </Button>
        </div>
      )}

      {queue.length === 0 ? (
        <div className="text-tertiary rounded-md border border-dashed border-purple-600/20 p-6 text-center text-body-sm">
          No beats in queue yet. Create a pattern and save it!
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {queue.map((beat, index) => (
            <div
              key={beat.id}
              className={cn(
                "bg-secondary hover:bg-tertiary group flex items-center gap-3 rounded-md p-3 transition-colors",
                queuePlayingIndex === index && "ring-2 ring-purple-500"
              )}
            >
              <button
                onClick={() => handlePlayBeat(index)}
                className="hover:bg-accent-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors"
              >
                <Icon
                  icon={mediaPlayIcon}
                  size={16}
                  color={queuePlayingIndex === index ? "purplePrimary" : "secondary"}
                />
              </button>

              <div className="min-w-0 flex-1">
                <div className="text-primary text-body font-medium">
                  {beat.name}
                </div>
                <div className="text-tertiary text-caption">
                  {beat.bpm} BPM · {beat.author}
                </div>
              </div>

              <button
                onClick={() => handleRemoveBeat(beat.id)}
                className="hover:bg-red-secondary text-tertiary hover:text-red-primary invisible flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors group-hover:visible"
              >
                <Icon icon={trashIcon} size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
