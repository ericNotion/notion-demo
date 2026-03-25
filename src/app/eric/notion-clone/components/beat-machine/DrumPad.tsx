"use client";

import { cn } from "@/utils/cn";

type DrumPadProps = {
  active: boolean;
  isCurrentStep: boolean;
  isPlaying: boolean;
  onClick: () => void;
  stepIndex: number;
};

export function DrumPad({
  active,
  isCurrentStep,
  isPlaying,
  onClick,
  stepIndex,
}: DrumPadProps) {
  const isBeatMarker = stepIndex % 4 === 0;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative h-10 w-10 rounded-sm transition-all duration-100",
        "border border-border-primary hover:border-border-strong",
        active
          ? "bg-purple-primary shadow-[0_0_12px_rgba(168,85,247,0.5)]"
          : "bg-secondary hover:bg-tertiary",
        isCurrentStep && isPlaying && "ring-2 ring-teal-primary ring-offset-2 ring-offset-primary",
        isBeatMarker && !active && "border-border-strong",
      )}
    >
      {active && (
        <div className="absolute inset-0 rounded-sm bg-purple-primary opacity-50 blur-sm" />
      )}
    </button>
  );
}
