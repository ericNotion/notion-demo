"use client";

import { useAtomValue } from "jotai";
import { motion } from "motion/react";
import { beatPatternAtom, currentStepAtom, isPlayingAtom } from "./atoms";
import { TRACKS } from "./types";

export function BeatVisualizer() {
  const pattern = useAtomValue(beatPatternAtom);
  const currentStep = useAtomValue(currentStepAtom);
  const isPlaying = useAtomValue(isPlayingAtom);

  const activeTracksAtCurrentStep = TRACKS.filter(
    (track) => pattern[track.type][currentStep],
  );

  return (
    <div className="bg-tertiary rounded-lg p-6 h-48 flex items-end justify-center gap-2">
      {TRACKS.map((track) => {
        const isActive =
          isPlaying && pattern[track.type][currentStep];
        const baseHeight = 20;
        const activeHeight = 140;

        return (
          <motion.div
            key={track.type}
            className="w-12 rounded-sm"
            style={{
              backgroundColor: track.color,
            }}
            initial={{ height: baseHeight }}
            animate={{
              height: isActive ? activeHeight : baseHeight,
              opacity: isActive ? 1 : 0.3,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
