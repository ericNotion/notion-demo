"use client";

import { cn } from "@/utils/cn";
import { DRUM_TRACKS, STEPS } from "./types";

interface BeatSequencerProps {
  pattern: boolean[][];
  currentStep: number;
  isPlaying: boolean;
  onToggleStep: (trackIndex: number, stepIndex: number) => void;
}

export function BeatSequencer({
  pattern,
  currentStep,
  isPlaying,
  onToggleStep,
}: BeatSequencerProps) {
  return (
    <div className="space-y-2">
      {DRUM_TRACKS.map((track, trackIndex) => (
        <div key={track.id} className="flex items-center gap-2">
          <div className="w-16 shrink-0">
            <span
              className="text-xs font-medium"
              style={{ color: track.color }}
            >
              {track.name}
            </span>
          </div>
          <div className="flex gap-1 flex-1">
            {Array.from({ length: STEPS }).map((_, stepIndex) => {
              const isActive = pattern[trackIndex]?.[stepIndex] || false;
              const isCurrent = isPlaying && stepIndex === currentStep;
              const isMeasureBoundary = stepIndex % 4 === 0;

              return (
                <button
                  key={stepIndex}
                  type="button"
                  onClick={() => onToggleStep(trackIndex, stepIndex)}
                  className={cn(
                    "relative h-10 flex-1 rounded-md border-2 transition-all duration-100",
                    isActive
                      ? "border-transparent shadow-lg"
                      : "border-gray-700 bg-gray-800/50 hover:bg-gray-700/70",
                    isCurrent && "ring-2 ring-white ring-offset-2 ring-offset-black",
                    isMeasureBoundary && !isActive && "border-gray-600",
                  )}
                  style={{
                    backgroundColor: isActive ? track.color : undefined,
                    boxShadow: isActive
                      ? `0 0 20px ${track.color}80, 0 0 40px ${track.color}40`
                      : undefined,
                  }}
                  aria-label={`${track.name} step ${stepIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
