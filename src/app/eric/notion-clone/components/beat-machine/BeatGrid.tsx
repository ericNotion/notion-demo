"use client";

import { useAtom, useAtomValue } from "jotai";
import { motion } from "motion/react";
import { beatPatternAtom, currentStepAtom, isPlayingAtom } from "./atoms";
import { STEPS, TRACKS } from "./types";
import { cn } from "@/utils/cn";

export function BeatGrid() {
  const [pattern, setPattern] = useAtom(beatPatternAtom);
  const currentStep = useAtomValue(currentStepAtom);
  const isPlaying = useAtomValue(isPlayingAtom);

  const toggleStep = (trackType: string, stepIndex: number) => {
    setPattern((prev) => ({
      ...prev,
      [trackType]: prev[trackType as keyof typeof prev].map((val, i) =>
        i === stepIndex ? !val : val,
      ),
    }));
  };

  return (
    <div className="space-y-2">
      {TRACKS.map((track) => (
        <div key={track.type} className="flex items-center gap-2">
          <div className="w-16 text-body text-secondary">{track.label}</div>
          <div className="flex gap-1">
            {Array.from({ length: STEPS }).map((_, stepIndex) => {
              const isActive = pattern[track.type][stepIndex];
              const isCurrent = isPlaying && currentStep === stepIndex;
              const isMeasureStart = stepIndex % 4 === 0;

              return (
                <motion.button
                  key={stepIndex}
                  onClick={() => toggleStep(track.type, stepIndex)}
                  className={cn(
                    "w-8 h-8 rounded-sm transition-colors border",
                    isActive
                      ? "border-transparent"
                      : isMeasureStart
                        ? "border-primary bg-secondary"
                        : "border-secondary bg-tertiary",
                    isCurrent && "ring-2 ring-blue-500",
                  )}
                  style={{
                    backgroundColor: isActive ? track.color : undefined,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    opacity: isCurrent ? 1 : isActive ? 0.9 : 0.6,
                  }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
