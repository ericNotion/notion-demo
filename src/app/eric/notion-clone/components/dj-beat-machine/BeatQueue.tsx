"use client";

import { Icon } from "@nds-icons";
import { playButtonIcon } from "@nds-icons/playButton/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import type { QueuedBeat } from "./types";

interface BeatQueueProps {
  queue: QueuedBeat[];
  onPlayBeat: (beat: QueuedBeat) => void;
  onRemoveBeat: (beatId: string) => void;
}

export function BeatQueue({
  queue,
  onPlayBeat,
  onRemoveBeat,
}: BeatQueueProps) {
  if (queue.length === 0) {
    return (
      <div className="text-center py-8 text-tertiary text-body-sm">
        No beats in the queue yet. Create and add your first beat!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {queue.map((queuedBeat) => (
        <div
          key={queuedBeat.id}
          className={cn(
            "flex items-center justify-between p-3 rounded-md",
            "bg-secondary hover:bg-tertiary transition-colors"
          )}
        >
          <div className="flex-1 min-w-0">
            <div className="text-body font-medium text-primary truncate">
              {queuedBeat.pattern.name}
            </div>
            <div className="text-body-sm text-secondary">
              by {queuedBeat.contributedBy} • {queuedBeat.pattern.bpm} BPM
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPlayBeat(queuedBeat)}
            >
              <Icon icon={playButtonIcon} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveBeat(queuedBeat.id)}
            >
              <Icon icon={trashIcon} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
