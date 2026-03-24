"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaPauseIcon } from "@nds-icons/mediaPause/default.icon";
import { waveformIcon } from "@nds-icons/waveform/default.icon";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import {
  beatPatternAtom,
  beatQueueAtom,
  bpmAtom,
  currentStepAtom,
  DRUM_SOUNDS,
  isPlayingAtom,
  queuePlayingIndexAtom,
  visualizerDataAtom,
} from "./atoms";
import { BeatQueue } from "./BeatQueue";
import { BeatVisualizer } from "./BeatVisualizer";
import { DrumSynth } from "./DrumSynth";
import { StepSequencer } from "./StepSequencer";

export function DJBeatMachine() {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [bpm, setBpm] = useAtom(bpmAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [pattern] = useAtom(beatPatternAtom);
  const [, setVisualizerData] = useAtom(visualizerDataAtom);
  const [queue] = useAtom(beatQueueAtom);
  const [queuePlayingIndex] = useAtom(queuePlayingIndexAtom);

  const drumSynthRef = useRef<DrumSynth | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    drumSynthRef.current = new DrumSynth();
    return () => {
      if (drumSynthRef.current) {
        drumSynthRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const stepDuration = (60 / bpm / 4) * 1000; // 16th note duration in ms

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % 16;

        // Get current pattern (from queue if playing queue, otherwise use current pattern)
        const activePattern =
          queuePlayingIndex !== null && queue[queuePlayingIndex]
            ? queue[queuePlayingIndex].pattern
            : pattern;

        // Play sounds for this step
        DRUM_SOUNDS.forEach((sound) => {
          if (activePattern[sound][nextStep] && drumSynthRef.current) {
            drumSynthRef.current.playSound(sound);

            // Update visualizer
            setVisualizerData((prev) =>
              prev.map((val, i) => {
                if (i === nextStep || i === nextStep + 16) {
                  return Math.min(1, val + 0.6);
                }
                return val;
              })
            );
          }
        });

        return nextStep;
      });
    }, stepDuration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm, pattern, setCurrentStep, setVisualizerData, queue, queuePlayingIndex]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleClear = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-purple-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
            <Icon icon={waveformIcon} size={24} color="purplePrimary" />
          </div>
          <div>
            <h1 className="text-title-lg text-primary font-bold">
              DJ Beat Machine
            </h1>
            <p className="text-tertiary text-body-sm">
              Berlin underground vibes
            </p>
          </div>
        </div>
      </div>

      {/* Visualizer */}
      <BeatVisualizer />

      {/* Controls */}
      <div className="bg-elevated flex items-center gap-6 rounded-xl border border-purple-600/20 p-4 shadow-sm">
        {/* Play/Pause */}
        <div className="flex items-center gap-2">
          <IconButton
            variant="primary"
            size="lg"
            onClick={togglePlay}
            className="h-12 w-12 rounded-xl"
          >
            <Icon
              icon={isPlaying ? mediaPauseIcon : mediaPlayIcon}
              size={20}
            />
          </IconButton>
          <Button variant="ghost" size="sm" onClick={handleClear}>
            Clear
          </Button>
        </div>

        {/* BPM Control */}
        <div className="flex flex-1 items-center gap-4">
          <span className="text-secondary shrink-0 text-body-sm font-medium">
            BPM
          </span>
          <Slider
            value={[bpm]}
            onValueChange={([value]) => setBpm(value)}
            min={60}
            max={180}
            step={1}
            className="flex-1"
          />
          <div className="bg-secondary flex h-9 w-16 items-center justify-center rounded-md">
            <span className="text-primary text-body font-mono font-semibold">
              {bpm}
            </span>
          </div>
        </div>
      </div>

      {/* Step Sequencer */}
      <div className="bg-elevated rounded-xl border border-purple-600/20 p-6 shadow-sm">
        <StepSequencer />
      </div>

      {/* Beat Queue */}
      <div className="bg-elevated rounded-xl border border-purple-600/20 p-6 shadow-sm">
        <BeatQueue />
      </div>

      {/* Attribution */}
      <div className="text-tertiary pb-4 text-center text-caption">
        <span className="opacity-60">
          Built with Web Audio API · Inspired by Berlin techno culture
        </span>
      </div>
    </div>
  );
}
