"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaStopIcon } from "@nds-icons/mediaStop/default.icon";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { BeatQueue } from "./BeatQueue";
import { BeatSequencer } from "./BeatSequencer";
import { BeatVisualizer } from "./BeatVisualizer";
import { DRUM_TRACKS, STEPS, type BeatPattern } from "./types";
import { useDrumSynth } from "./useDrumSynth";

const beatQueueAtom = atomWithStorage<BeatPattern[]>("dj-beat-machine-queue", []);

interface DJBeatMachineProps {
  blockId: string;
}

export function DJBeatMachine({ blockId }: DJBeatMachineProps) {
  const [queue, setQueue] = useAtom(beatQueueAtom);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [pattern, setPattern] = useState<boolean[][]>(() =>
    Array(DRUM_TRACKS.length)
      .fill(null)
      .map(() => Array(STEPS).fill(false))
  );
  const [beatName, setBeatName] = useState("Untitled Beat");
  const [contributor, setContributor] = useState("Anonymous");
  const [currentBeatId, setCurrentBeatId] = useState<string | null>(null);

  const { playDrum } = useDrumSynth();
  const intervalRef = useRef<NodeJS.Timeout>();

  const stepInterval = (60 / bpm) * 1000 / 4;

  const playStep = useCallback(() => {
    setCurrentStep((prev) => {
      const nextStep = (prev + 1) % STEPS;
      
      pattern.forEach((track, trackIndex) => {
        if (track[prev]) {
          playDrum(DRUM_TRACKS[trackIndex].type);
        }
      });

      return nextStep;
    });
  }, [pattern, playDrum]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(playStep, stepInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, playStep, stepInterval]);

  const togglePlay = () => {
    if (!isPlaying) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleStep = (trackIndex: number, stepIndex: number) => {
    setPattern((prev) => {
      const newPattern = prev.map((track) => [...track]);
      newPattern[trackIndex][stepIndex] = !newPattern[trackIndex][stepIndex];
      return newPattern;
    });
  };

  const clearPattern = () => {
    setPattern(
      Array(DRUM_TRACKS.length)
        .fill(null)
        .map(() => Array(STEPS).fill(false))
    );
  };

  const saveToQueue = () => {
    const newBeat: BeatPattern = {
      id: `beat_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      name: beatName,
      contributor,
      bpm,
      steps: pattern,
      timestamp: Date.now(),
    };
    setQueue((prev) => [...prev, newBeat]);
    setCurrentBeatId(newBeat.id);
  };

  const loadBeat = (beat: BeatPattern) => {
    setPattern(beat.steps);
    setBpm(beat.bpm);
    setBeatName(beat.name);
    setContributor(beat.contributor);
    setCurrentBeatId(beat.id);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const activeColors = pattern
    .map((track, idx) => (track[currentStep] ? DRUM_TRACKS[idx].color : null))
    .filter((c): c is string => c !== null);

  return (
    <div className="rounded-xl bg-black border-2 border-gray-800 p-6 space-y-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎧</div>
          <div>
            <h3 className="text-lg font-bold text-white">DJ Beat Machine</h3>
            <p className="text-xs text-gray-400">Berlin nightclub vibes</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-400">BPM:</div>
          <input
            type="number"
            min="60"
            max="200"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-16 rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-sm text-white"
          />
        </div>
      </div>

      <BeatVisualizer
        isPlaying={isPlaying}
        currentStep={currentStep}
        activeColors={activeColors}
      />

      <div className="space-y-4">
        <BeatSequencer
          pattern={pattern}
          currentStep={currentStep}
          isPlaying={isPlaying}
          onToggleStep={toggleStep}
        />

        <div className="flex items-center gap-2">
          <Button
            onClick={togglePlay}
            className={cn(
              "flex-1",
              isPlaying
                ? "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            )}
          >
            <Icon
              icon={isPlaying ? mediaStopIcon : mediaPlayIcon}
              size="small"
            />
            <span className="ml-2">{isPlaying ? "Stop" : "Play"}</span>
          </Button>
          <Button
            onClick={clearPattern}
            variant="outline"
            className="border-gray-700 bg-gray-900 text-white hover:bg-gray-800"
          >
            Clear
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Beat Name
            </label>
            <input
              type="text"
              value={beatName}
              onChange={(e) => setBeatName(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-white"
              placeholder="My Beat"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={contributor}
              onChange={(e) => setContributor(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-white"
              placeholder="DJ Name"
            />
          </div>
        </div>

        <Button
          onClick={saveToQueue}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
        >
          Add to Queue
        </Button>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <BeatQueue
          queue={queue}
          currentBeatId={currentBeatId}
          onSelectBeat={loadBeat}
        />
      </div>
    </div>
  );
}
