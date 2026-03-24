"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { heartIcon } from "@nds-icons/heart/default.icon";
import { heartFillIcon } from "@nds-icons/heart/fill.icon";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { beatPatternAtom, bpmAtom, savedBeatsAtom } from "./atoms";
import type { BeatPattern } from "./types";

export function BeatQueue() {
  const [savedBeats, setSavedBeats] = useAtom(savedBeatsAtom);
  const currentPattern = useAtomValue(beatPatternAtom);
  const currentBpm = useAtomValue(bpmAtom);
  const setPattern = useSetAtom(beatPatternAtom);
  const setBpm = useSetAtom(bpmAtom);
  const [beatName, setBeatName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [upvotedBeats, setUpvotedBeats] = useState<Set<string>>(new Set());

  const handleSaveBeat = () => {
    if (!beatName.trim() || !authorName.trim()) return;

    const newBeat: BeatPattern = {
      id: Date.now().toString(),
      name: beatName,
      author: authorName,
      bpm: currentBpm,
      steps: currentPattern,
      upvotes: 0,
      createdAt: Date.now(),
    };

    setSavedBeats((prev) => [...prev, newBeat]);
    setBeatName("");
    setAuthorName("");
  };

  const handleLoadBeat = (beat: BeatPattern) => {
    setPattern(beat.steps);
    setBpm(beat.bpm);
  };

  const handleUpvote = (beatId: string) => {
    setSavedBeats((prev) =>
      prev.map((beat) =>
        beat.id === beatId
          ? {
              ...beat,
              upvotes: beat.upvotes + (upvotedBeats.has(beatId) ? -1 : 1),
            }
          : beat,
      ),
    );
    setUpvotedBeats((prev) => {
      const next = new Set(prev);
      if (next.has(beatId)) {
        next.delete(beatId);
      } else {
        next.add(beatId);
      }
      return next;
    });
  };

  const sortedBeats = [...savedBeats].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className="space-y-4">
      <div className="bg-secondary border-primary rounded-lg border p-4">
        <h3 className="text-title-sm text-primary mb-3">Add to Queue</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={beatName}
            onChange={(e) => setBeatName(e.target.value)}
            placeholder="Beat name"
            className={cn(
              "text-body text-primary w-full px-3 py-2",
              "bg-tertiary border-primary rounded-sm border",
              "placeholder:text-tertiary",
              "focus:ring-2 focus:ring-blue-500 focus:outline-none",
            )}
          />
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Your name"
            className={cn(
              "text-body text-primary w-full px-3 py-2",
              "bg-tertiary border-primary rounded-sm border",
              "placeholder:text-tertiary",
              "focus:ring-2 focus:ring-blue-500 focus:outline-none",
            )}
          />
          <Button
            variant="primary"
            size="md"
            onClick={handleSaveBeat}
            disabled={!beatName.trim() || !authorName.trim()}
            className="w-full"
          >
            Submit to Queue
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-title-sm text-primary">Beat Queue</h3>
        {sortedBeats.length === 0 ? (
          <div className="bg-secondary text-secondary rounded-lg p-8 text-center">
            No beats in queue yet. Be the first to submit!
          </div>
        ) : (
          <div className="space-y-2">
            {sortedBeats.map((beat) => (
              <div
                key={beat.id}
                className="bg-secondary border-primary flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex-1">
                  <div className="text-body text-primary font-medium">
                    {beat.name}
                  </div>
                  <div className="text-caption text-secondary">
                    by {beat.author}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpvote(beat.id)}
                    className={cn(
                      "flex items-center gap-1 rounded-sm px-2 py-1",
                      "hover:bg-tertiary transition-colors",
                      upvotedBeats.has(beat.id) && "text-red-500",
                    )}
                  >
                    <Icon
                      icon={
                        upvotedBeats.has(beat.id) ? heartFillIcon : heartIcon
                      }
                      className="h-4 w-4"
                    />
                    <span className="text-caption">{beat.upvotes}</span>
                  </button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleLoadBeat(beat)}
                  >
                    <Icon icon={mediaPlayIcon} />
                    Load
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
