"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPauseIcon } from "@nds-icons/mediaPause/default.icon";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaStopIcon } from "@nds-icons/mediaStop/default.icon";
import { useAtom, useSetAtom } from "jotai";
import { bpmAtom, currentStepAtom, isPlayingAtom } from "./atoms";

export function TransportControls() {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [bpm, setBpm] = useAtom(bpmAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant={isPlaying ? "outline" : "primary"}
          size="md"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <Icon icon={isPlaying ? mediaPauseIcon : mediaPlayIcon} />
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button variant="outline" size="md" onClick={handleStop}>
          <Icon icon={mediaStopIcon} />
          Stop
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-body text-secondary">BPM:</label>
        <input
          type="range"
          min="60"
          max="200"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className={cn(
            "h-2 w-32 cursor-pointer appearance-none rounded-full",
            "bg-secondary",
            "[&::-webkit-slider-thumb]:appearance-none",
            "[&::-webkit-slider-thumb]:w-4",
            "[&::-webkit-slider-thumb]:h-4",
            "[&::-webkit-slider-thumb]:rounded-full",
            "[&::-webkit-slider-thumb]:bg-blue-500",
            "[&::-moz-range-thumb]:w-4",
            "[&::-moz-range-thumb]:h-4",
            "[&::-moz-range-thumb]:rounded-full",
            "[&::-moz-range-thumb]:bg-blue-500",
            "[&::-moz-range-thumb]:border-0",
          )}
        />
        <input
          type="number"
          min="60"
          max="200"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className={cn(
            "text-body text-primary w-16 px-2 py-1",
            "bg-secondary border-primary rounded-sm border",
            "focus:ring-2 focus:ring-blue-500 focus:outline-none",
          )}
        />
      </div>
    </div>
  );
}
