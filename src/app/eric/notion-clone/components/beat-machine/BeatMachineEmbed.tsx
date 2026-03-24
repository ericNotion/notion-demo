"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  beatPatternAtom,
  bpmAtom,
  currentStepAtom,
  isPlayingAtom,
} from "./atoms";
import { audioEngine } from "./audioEngine";
import { BeatGrid } from "./BeatGrid";
import { BeatQueue } from "./BeatQueue";
import { BeatVisualizer } from "./BeatVisualizer";
import { TransportControls } from "./TransportControls";
import { STEPS, TRACKS } from "./types";

export function BeatMachineEmbed() {
  const isPlaying = useAtomValue(isPlayingAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);
  const bpm = useAtomValue(bpmAtom);
  const pattern = useAtomValue(beatPatternAtom);

  useEffect(() => {
    audioEngine.initialize();
    return () => {
      audioEngine.cleanup();
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const stepDuration = (60 / bpm / 4) * 1000;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % STEPS;

        TRACKS.forEach((track) => {
          if (pattern[track.type][nextStep]) {
            audioEngine.playSound(track.type);
          }
        });

        return nextStep;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isPlaying, bpm, pattern, setCurrentStep]);

  return (
    <div className="space-y-4">
      <div className="bg-secondary border-primary rounded-lg border p-4">
        <TransportControls />
      </div>

      <BeatVisualizer />

      <BeatGrid />

      <div className="bg-secondary border-primary rounded-lg border p-4">
        <h3 className="text-primary mb-3 text-sm font-medium">
          Boiler Room Queue
        </h3>
        <BeatQueue />
      </div>
    </div>
  );
}
