"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { useAtom } from "jotai";
import { beatQueueAtom, bpmAtom, patternsAtom, type BeatPattern } from "./atoms";

type BeatQueueProps = {
  onLoadPattern: (pattern: BeatPattern) => void;
};

export function BeatQueue({ onLoadPattern }: BeatQueueProps) {
  const [queue, setQueue] = useAtom(beatQueueAtom);
  const [patterns] = useAtom(patternsAtom);
  const [bpm] = useAtom(bpmAtom);

  const handleDelete = (id: string) => {
    setQueue(queue.filter((beat) => beat.id !== id));
  };

  const handleAddCurrent = () => {
    const newBeat: BeatPattern = {
      id: Date.now().toString(),
      name: `Beat ${queue.length + 1}`,
      bpm,
      patterns,
      createdBy: "You",
      timestamp: Date.now(),
    };
    setQueue([...queue, newBeat]);
  };

  const formatTimestamp = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "just now";
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-title-sm text-primary font-semibold">Beat Queue</h3>
        <Button variant="tint" size="sm" onClick={handleAddCurrent}>
          Add Current
        </Button>
      </div>

      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {queue.map((beat) => (
          <div
            key={beat.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-md",
              "bg-secondary border border-border-primary",
              "hover:bg-tertiary hover:border-border-strong",
              "transition-all duration-200",
            )}
          >
            <button
              type="button"
              onClick={() => onLoadPattern(beat)}
              className="flex items-center justify-center w-8 h-8 rounded-sm bg-purple-primary hover:bg-purple-secondary transition-colors"
            >
              <Icon icon={mediaPlayIcon} size={16} color="primary" />
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-body font-medium text-primary truncate">
                  {beat.name}
                </h4>
                <span className="text-caption text-secondary">
                  {beat.bpm} BPM
                </span>
              </div>
              <p className="text-caption text-tertiary">
                by {beat.createdBy} · {formatTimestamp(beat.timestamp)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleDelete(beat.id)}
              className="flex items-center justify-center w-8 h-8 rounded-sm hover:bg-tertiary transition-colors"
            >
              <Icon icon={trashIcon} size={16} color="tertiary" />
            </button>
          </div>
        ))}

        {queue.length === 0 && (
          <div className="flex items-center justify-center h-32 text-tertiary text-body">
            No beats in queue. Create and add one!
          </div>
        )}
      </div>
    </div>
  );
}
