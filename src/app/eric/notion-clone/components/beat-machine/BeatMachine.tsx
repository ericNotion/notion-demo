"use client";

import { Button } from "@/components/playground-kit/Button";
import { Input } from "@/components/playground-kit/Input";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaPauseIcon } from "@nds-icons/mediaPause/default.icon";
import { mediaStopIcon } from "@nds-icons/mediaStop/default.icon";
import { volumeOnIcon } from "@nds-icons/volumeOn/default.icon";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import {
  bpmAtom,
  currentStepAtom,
  isPlayingAtom,
  patternsAtom,
  volumeAtom,
  type BeatPattern,
} from "./atoms";
import { AudioEngine } from "./audioEngine";
import { BeatQueue } from "./BeatQueue";
import { DrumPad } from "./DrumPad";
import { Visualizer } from "./Visualizer";

export function BeatMachine() {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [bpm, setBpm] = useAtom(bpmAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [patterns, setPatterns] = useAtom(patternsAtom);
  const [volume, setVolume] = useAtom(volumeAtom);

  const audioEngineRef = useRef<AudioEngine | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioEngineRef.current = new AudioEngine();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioEngineRef.current) {
      audioEngineRef.current.setVolume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      const stepDuration = (60 / bpm / 4) * 1000;

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const nextStep = (prev + 1) % 16;

          if (audioEngineRef.current) {
            if (patterns.kick[nextStep]) audioEngineRef.current.playKick();
            if (patterns.snare[nextStep]) audioEngineRef.current.playSnare();
            if (patterns.hihat[nextStep]) audioEngineRef.current.playHihat();
            if (patterns.clap[nextStep]) audioEngineRef.current.playClap();
          }

          return nextStep;
        });
      }, stepDuration);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm, patterns, setCurrentStep]);

  const toggleStep = (track: keyof typeof patterns, step: number) => {
    setPatterns({
      ...patterns,
      [track]: patterns[track].map((val, i) => (i === step ? !val : val)),
    });
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleClear = () => {
    setPatterns({
      kick: Array(16).fill(false),
      snare: Array(16).fill(false),
      hihat: Array(16).fill(false),
      clap: Array(16).fill(false),
    });
  };

  const handleLoadPattern = (pattern: BeatPattern) => {
    setPatterns(pattern.patterns);
    setBpm(pattern.bpm);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const tracks = [
    { name: "Kick", key: "kick" as const, color: "purple" },
    { name: "Snare", key: "snare" as const, color: "teal" },
    { name: "Hi-hat", key: "hihat" as const, color: "blue" },
    { name: "Clap", key: "clap" as const, color: "pink" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-title-lg text-primary font-semibold">
            DJ Beat Machine
          </h1>
          <p className="text-body text-secondary mt-1">
            Create beats and add them to the community queue
          </p>
        </div>
      </div>

      <div className="bg-elevated rounded-lg p-6 border border-border-primary shadow-lg-outline">
        <Visualizer isPlaying={isPlaying} currentStep={currentStep} />
      </div>

      <div className="bg-elevated rounded-lg p-6 border border-border-primary shadow-lg-outline space-y-6">
        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePlayPause}
            className="gap-2"
          >
            <Icon
              icon={isPlaying ? mediaPauseIcon : mediaPlayIcon}
              size={20}
              color="primary"
            />
            {isPlaying ? "Pause" : "Play"}
          </Button>

          <Button variant="outline" size="lg" onClick={handleStop}>
            <Icon icon={mediaStopIcon} size={20} color="secondary" />
          </Button>

          <div className="flex items-center gap-2">
            <label htmlFor="bpm" className="text-body text-secondary font-medium">
              BPM:
            </label>
            <Input
              id="bpm"
              type="number"
              min={60}
              max={200}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-20"
            />
          </div>

          <div className="flex items-center gap-2">
            <Icon icon={volumeOnIcon} size={20} color="secondary" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-32"
            />
          </div>

          <Button variant="outline" size="lg" onClick={handleClear}>
            Clear All
          </Button>
        </div>

        <div className="space-y-4">
          {tracks.map((track) => (
            <div key={track.key} className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-body font-semibold w-16",
                    `text-${track.color}-primary`,
                  )}
                >
                  {track.name}
                </span>
                <div className="flex gap-1">
                  {patterns[track.key].map((active, i) => (
                    <DrumPad
                      key={i}
                      active={active}
                      isCurrentStep={i === currentStep}
                      isPlaying={isPlaying}
                      onClick={() => toggleStep(track.key, i)}
                      stepIndex={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-elevated rounded-lg p-6 border border-border-primary shadow-lg-outline">
        <BeatQueue onLoadPattern={handleLoadPattern} />
      </div>
    </div>
  );
}
