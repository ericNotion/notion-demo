"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import { beatPatternAtom, currentStepAtom, DRUM_SOUNDS, type DrumSound } from "./atoms";

const DRUM_LABELS: Record<DrumSound, string> = {
  kick: "Kick",
  snare: "Snare",
  hihat: "Hi-Hat",
  clap: "Clap",
  tom: "Tom",
  cymbal: "Cymbal",
  rim: "Rim",
  cowbell: "Bell",
};

export function StepSequencer() {
  const [pattern, setPattern] = useAtom(beatPatternAtom);
  const [currentStep] = useAtom(currentStepAtom);

  const toggleStep = (sound: DrumSound, step: number) => {
    setPattern((prev) => ({
      ...prev,
      [sound]: prev[sound].map((val, i) => (i === step ? !val : val)),
    }));
  };

  return (
    <div className="w-full">
      {/* Step markers */}
      <div className="mb-2 flex gap-1 pl-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex h-6 flex-1 items-center justify-center text-caption-sm font-medium",
              i % 4 === 0 ? "text-primary" : "text-tertiary"
            )}
          >
            {i % 4 === 0 ? i + 1 : ""}
          </div>
        ))}
      </div>

      {/* Drum rows */}
      <div className="flex flex-col gap-1.5">
        {DRUM_SOUNDS.map((sound) => (
          <div key={sound} className="flex items-center gap-1">
            {/* Drum label */}
            <div className="text-secondary w-16 text-right text-body-sm font-medium">
              {DRUM_LABELS[sound]}
            </div>

            {/* Step buttons */}
            <div className="flex flex-1 gap-1">
              {Array.from({ length: 16 }).map((_, step) => {
                const isActive = pattern[sound][step];
                const isCurrent = step === currentStep;

                return (
                  <button
                    key={step}
                    onClick={() => toggleStep(sound, step)}
                    className={cn(
                      "relative flex-1 rounded-sm transition-all",
                      "hover:scale-105",
                      isActive
                        ? "bg-purple-primary shadow-sm ring-1 ring-purple-600/50"
                        : step % 4 === 0
                          ? "bg-tertiary hover:bg-accent-secondary"
                          : "bg-secondary hover:bg-accent-secondary"
                    )}
                    style={{ aspectRatio: "1" }}
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="playhead"
                        className={cn(
                          "absolute inset-0 rounded-sm",
                          isActive
                            ? "bg-purple-primary ring-2 ring-blue-400"
                            : "ring-2 ring-blue-400"
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
