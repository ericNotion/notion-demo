"use client";

import { useEffect, useRef, useState } from "react";
import { atom, useAtom } from "jotai";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaPauseIcon } from "@nds-icons/mediaPause/default.icon";
import { mediaStopIcon } from "@nds-icons/mediaStop/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { volumeOnIcon } from "@nds-icons/volumeOn/default.icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/utils/cn";
import { BeatGrid } from "./dj-beat-machine/BeatGrid";
import { BeatVisualizer } from "./dj-beat-machine/BeatVisualizer";
import { BeatQueue } from "./dj-beat-machine/BeatQueue";
import { DrumSynthEngine } from "./dj-beat-machine/DrumSynthEngine";
import type { DrumType, BeatPattern, QueuedBeat } from "./dj-beat-machine/types";

const createEmptyPattern = (bpm: number = 120): BeatPattern => ({
  id: Date.now().toString(),
  name: "Untitled Beat",
  author: "Anonymous",
  bpm,
  steps: {
    kick: Array(16).fill(false),
    snare: Array(16).fill(false),
    hihat: Array(16).fill(false),
    openhat: Array(16).fill(false),
    clap: Array(16).fill(false),
    perc: Array(16).fill(false),
  },
  createdAt: Date.now(),
});

const beatQueueAtom = atom<QueuedBeat[]>([]);

export function DJBeatMachine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, setBpm] = useState(120);
  const [volume, setVolume] = useState(0.7);
  const [pattern, setPattern] = useState<BeatPattern>(createEmptyPattern(120));
  const [queue, setQueue] = useAtom(beatQueueAtom);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [beatName, setBeatName] = useState("");
  const [authorName, setAuthorName] = useState("");

  const synthRef = useRef<DrumSynthEngine | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    synthRef.current = new DrumSynthEngine();
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (synthRef.current) {
      synthRef.current.setVolume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isPlaying) {
      const stepDuration = (60 / bpm / 4) * 1000;
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const nextStep = (prev + 1) % 16;

          // Play drums for the new step
          if (synthRef.current) {
            const drums: DrumType[] = [
              "kick",
              "snare",
              "hihat",
              "openhat",
              "clap",
              "perc",
            ];
            drums.forEach((drum) => {
              if (pattern.steps[drum][nextStep]) {
                synthRef.current!.playDrum(drum);
              }
            });
          }

          return nextStep;
        });
      }, stepDuration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm, pattern]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleStepToggle = (drum: DrumType, step: number) => {
    setPattern((prev) => ({
      ...prev,
      steps: {
        ...prev.steps,
        [drum]: prev.steps[drum].map((val, idx) => (idx === step ? !val : val)),
      },
    }));
  };

  const handleAddToQueue = () => {
    if (!beatName.trim() || !authorName.trim()) return;

    const queuedBeat: QueuedBeat = {
      id: Date.now().toString(),
      pattern: {
        ...pattern,
        name: beatName,
        author: authorName,
        bpm,
      },
      contributedBy: authorName,
      contributedAt: Date.now(),
    };

    setQueue((prev) => [...prev, queuedBeat]);
    setBeatName("");
    setAuthorName("");
    setIsAddDialogOpen(false);
  };

  const handlePlayBeat = (beat: QueuedBeat) => {
    setIsPlaying(false);
    setPattern(beat.pattern);
    setBpm(beat.pattern.bpm);
    setCurrentStep(0);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const handleRemoveBeat = (beatId: string) => {
    setQueue((prev) => prev.filter((b) => b.id !== beatId));
  };

  const handleClear = () => {
    setPattern(createEmptyPattern(bpm));
  };

  return (
    <div
      className={cn(
        "w-full max-w-6xl mx-auto p-6 rounded-lg",
        "bg-accent-primary border border-primary"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-title-sm font-semibold text-inverse-primary">
            DJ Beat Machine
          </h2>
          <p className="text-body-sm text-secondary">
            Berlin Nightclub Edition
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isPlaying ? "secondary" : "default"}
            size="sm"
            onClick={handlePlay}
            disabled={isPlaying}
          >
            <Icon icon={mediaPlayIcon} />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handlePause}
            disabled={!isPlaying}
          >
            <Icon icon={mediaPauseIcon} />
          </Button>
          <Button variant="secondary" size="sm" onClick={handleStop}>
            <Icon icon={mediaStopIcon} />
          </Button>
        </div>
      </div>

      {/* Visualizer */}
      <div className="mb-6">
        <BeatVisualizer
          steps={pattern.steps}
          currentStep={currentStep}
          isPlaying={isPlaying}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-body-sm text-secondary font-mono">BPM</span>
          <div className="w-32">
            <Slider
              value={[bpm]}
              onValueChange={(v) => setBpm(v[0])}
              min={80}
              max={180}
              step={1}
            />
          </div>
          <span className="text-body font-mono text-purple-primary w-12">
            {bpm}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Icon icon={volumeOnIcon} className="text-secondary" />
          <div className="w-24">
            <Slider
              value={[volume]}
              onValueChange={(v) => setVolume(v[0])}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
        </div>
        <Button variant="secondary" size="sm" onClick={handleClear}>
          Clear
        </Button>
      </div>

      {/* Beat Grid */}
      <div className="mb-8">
        <BeatGrid
          steps={pattern.steps}
          currentStep={currentStep}
          isPlaying={isPlaying}
          onStepToggle={handleStepToggle}
        />
      </div>

      {/* Queue Section */}
      <div className="border-t border-primary pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-body font-semibold text-primary">Beat Queue</h3>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="sm">
                <Icon icon={plusIcon} />
                <span>Add to Queue</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Beat to Queue</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <label className="text-body-sm text-secondary mb-2 block">
                    Beat Name
                  </label>
                  <Input
                    value={beatName}
                    onChange={(e) => setBeatName(e.target.value)}
                    placeholder="Enter beat name"
                  />
                </div>
                <div>
                  <label className="text-body-sm text-secondary mb-2 block">
                    Your Name
                  </label>
                  <Input
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <Button
                  onClick={handleAddToQueue}
                  disabled={!beatName.trim() || !authorName.trim()}
                  className="w-full"
                >
                  Add to Queue
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <BeatQueue
          queue={queue}
          onPlayBeat={handlePlayBeat}
          onRemoveBeat={handleRemoveBeat}
        />
      </div>
    </div>
  );
}
