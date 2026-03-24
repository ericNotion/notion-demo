"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import type { DrumType } from "./types";

interface BeatGridProps {
  steps: Record<DrumType, boolean[]>;
  currentStep: number;
  isPlaying: boolean;
  onStepToggle: (drum: DrumType, step: number) => void;
}

const drumLabels: Record<DrumType, string> = {
  kick: "KICK",
  snare: "SNARE",
  hihat: "HIHAT",
  openhat: "OPEN HAT",
  clap: "CLAP",
  perc: "PERC",
};

const drumColors: Record<DrumType, string> = {
  kick: "purple",
  snare: "blue",
  hihat: "green",
  openhat: "yellow",
  clap: "pink",
  perc: "orange",
};

export function BeatGrid({
  steps,
  currentStep,
  isPlaying,
  onStepToggle,
}: BeatGridProps) {
  const drums: DrumType[] = ["kick", "snare", "hihat", "openhat", "clap", "perc"];

  return (
    <div className="space-y-2">
      {drums.map((drum) => (
        <div key={drum} className="flex items-center gap-2">
          <div className="w-20 text-caption font-mono text-secondary">
            {drumLabels[drum]}
          </div>
          <div className="flex gap-1">
            {steps[drum].map((isActive, stepIndex) => {
              const isCurrentStep = isPlaying && currentStep === stepIndex;
              const color = drumColors[drum];

              return (
                <motion.button
                  key={stepIndex}
                  onClick={() => onStepToggle(drum, stepIndex)}
                  className={cn(
                    "relative h-8 w-8 rounded-sm transition-all",
                    "hover:brightness-110",
                    stepIndex % 4 === 0 && "ml-1",
                    isActive
                      ? cn(
                          color === "purple" && "bg-purple-primary",
                          color === "blue" && "bg-blue-primary",
                          color === "green" && "bg-green-primary",
                          color === "yellow" && "bg-yellow-primary",
                          color === "pink" && "bg-pink-primary",
                          color === "orange" && "bg-orange-primary"
                        )
                      : "bg-tertiary",
                    isCurrentStep && "ring-2 ring-white"
                  )}
                  style={{
                    boxShadow:
                      isActive && isCurrentStep
                        ? `0 0 20px ${
                            color === "purple"
                              ? "#8b5cf6"
                              : color === "blue"
                              ? "#3b82f6"
                              : color === "green"
                              ? "#10b981"
                              : color === "yellow"
                              ? "#eab308"
                              : color === "pink"
                              ? "#ec4899"
                              : "#f97316"
                          }`
                        : undefined,
                  }}
                  animate={{
                    scale: isActive && isCurrentStep ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.1 }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
