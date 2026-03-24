"use client";

import { useAtom, useAtomValue } from "jotai";
import { patternAtom, currentStepAtom, STEPS } from "./atoms";
import {
  TRACKS,
  TRACK_COLORS,
  TRACK_LABELS,
  playSound,
  type TrackName,
} from "./audio-engine";

const gridStyle = { gridTemplateColumns: "repeat(16, minmax(0, 1fr))" };
const dimTextStyle = { color: "rgba(255,255,255,0.25)" };

function getStepStyle(isActive: boolean, isCurrent: boolean, step: number, color: string) {
  return {
    background: isActive
      ? color
      : isCurrent
        ? "rgba(255,255,255,0.08)"
        : step % 4 === 0
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.03)",
    boxShadow: isActive
      ? `0 0 8px ${color}60, inset 0 0 4px rgba(255,255,255,0.2)`
      : "none",
    border:
      isCurrent && !isActive
        ? "1px solid rgba(255,255,255,0.15)"
        : isActive
          ? `1px solid ${color}`
          : "1px solid rgba(255,255,255,0.04)",
  };
}

export function StepSequencer() {
  const [pattern, setPattern] = useAtom(patternAtom);
  const currentStep = useAtomValue(currentStepAtom);

  const toggleStep = (track: TrackName, step: number) => {
    const newPattern = { ...pattern };
    newPattern[track] = [...newPattern[track]];
    newPattern[track][step] = !newPattern[track][step];
    setPattern(newPattern);

    if (newPattern[track][step]) {
      playSound[track]();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Step numbers */}
      <div className="flex items-center">
        <div className="w-[72px] shrink-0" />
        <div className="flex-1 grid gap-[3px]" style={gridStyle}>
          {Array.from({ length: STEPS }).map((_, i) => (
            <div
              key={i}
              className="text-center font-mono text-[10px]"
              style={dimTextStyle}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Tracks */}
      {TRACKS.map((track) => (
        <div key={track} className="flex items-center">
          <div
            className="w-[72px] shrink-0 pr-3 text-right font-mono text-[11px] font-bold tracking-wider"
            style= color: TRACK_COLORS[track] 
          >
            {TRACK_LABELS[track]}
          </div>
          <div className="flex-1 grid gap-[3px]" style={gridStyle}>
            {Array.from({ length: STEPS }).map((_, step) => {
              const isActive = pattern[track][step];
              const isCurrent = step === currentStep;
              const color = TRACK_COLORS[track];

              return (
                <button
                  key={step}
                  onClick={() => toggleStep(track, step)}
                  className="aspect-square w-full rounded-sm transition-all duration-75"
                  style={getStepStyle(isActive, isCurrent, step, color)}
                  aria-label={`${TRACK_LABELS[track]} step ${step + 1} ${
                    isActive ? "on" : "off"
                  }`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
