"use client";

import { Icon } from "@nds-icons";
import { mediaPlayIcon } from "@nds-icons/mediaPlay/default.icon";
import { mediaStopIcon } from "@nds-icons/mediaStop/default.icon";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "motion/react";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState, useCallback } from "react";

// ============================================================================
// Types & Constants
// ============================================================================

type DrumType = "kick" | "snare" | "hihat" | "clap" | "openhat" | "rim";

interface BeatPattern {
  id: string;
  name: string;
  pattern: boolean[][];
  bpm: number;
}

const STEPS = 16;
const DRUMS: DrumType[] = ["kick", "snare", "hihat", "clap", "openhat", "rim"];

const DRUM_LABELS: Record<DrumType, string> = {
  kick: "Kick",
  snare: "Snare",
  hihat: "Hi-Hat",
  clap: "Clap",
  openhat: "Open Hat",
  rim: "Rim",
};

// Animation constants for the glow effect
const GLOW_VISIBLE = { opacity: 1 };
const GLOW_HIDDEN = { opacity: 0 };

// ============================================================================
// Audio Synthesis Engine (Web Audio API)
// ============================================================================

class DrumSynth {
  private audioContext: AudioContext | null = null;

  init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
  }

  play(drum: DrumType) {
    if (!this.audioContext) this.init();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;

    switch (drum) {
      case "kick":
        this.playKick(now);
        break;
      case "snare":
        this.playSnare(now);
        break;
      case "hihat":
        this.playHiHat(now);
        break;
      case "clap":
        this.playClap(now);
        break;
      case "openhat":
        this.playOpenHat(now);
        break;
      case "rim":
        this.playRim(now);
        break;
    }
  }

  private playKick(time: number) {
    if (!this.audioContext) return;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.5);
  }

  private playSnare(time: number) {
    if (!this.audioContext) return;
    const noise = this.createNoiseBuffer();
    const noiseSource = this.audioContext.createBufferSource();
    noiseSource.buffer = noise;

    const noiseFilter = this.audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;

    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.setValueAtTime(1, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.audioContext.destination);

    noiseSource.start(time);
    noiseSource.stop(time + 0.2);

    // Add tonal component
    const osc = this.audioContext.createOscillator();
    const oscGain = this.audioContext.createGain();
    osc.frequency.value = 100;
    oscGain.gain.setValueAtTime(0.7, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    osc.connect(oscGain);
    oscGain.connect(this.audioContext.destination);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  private playHiHat(time: number) {
    if (!this.audioContext) return;
    const noise = this.createNoiseBuffer();
    const noiseSource = this.audioContext.createBufferSource();
    noiseSource.buffer = noise;

    const noiseFilter = this.audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 7000;

    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.6, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.audioContext.destination);

    noiseSource.start(time);
    noiseSource.stop(time + 0.05);
  }

  private playClap(time: number) {
    if (!this.audioContext) return;
    for (let i = 0; i < 3; i++) {
      const noise = this.createNoiseBuffer();
      const noiseSource = this.audioContext.createBufferSource();
      noiseSource.buffer = noise;

      const noiseFilter = this.audioContext.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = 1500;

      const noiseGain = this.audioContext.createGain();
      const offset = i * 0.01;
      noiseGain.gain.setValueAtTime(0.5, time + offset);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, time + offset + 0.05);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.audioContext.destination);

      noiseSource.start(time + offset);
      noiseSource.stop(time + offset + 0.05);
    }
  }

  private playOpenHat(time: number) {
    if (!this.audioContext) return;
    const noise = this.createNoiseBuffer();
    const noiseSource = this.audioContext.createBufferSource();
    noiseSource.buffer = noise;

    const noiseFilter = this.audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 7000;

    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.5, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.audioContext.destination);

    noiseSource.start(time);
    noiseSource.stop(time + 0.3);
  }

  private playRim(time: number) {
    if (!this.audioContext) return;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.frequency.value = 400;
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.03);

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.03);
  }

  private createNoiseBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("AudioContext not initialized");
    const bufferSize = this.audioContext.sampleRate * 0.5;
    const buffer = this.audioContext.createBuffer(
      1,
      bufferSize,
      this.audioContext.sampleRate,
    );
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    return buffer;
  }
}

// ============================================================================
// State Management
// ============================================================================

const drumSynth = new DrumSynth();

const createEmptyPattern = (): boolean[][] =>
  DRUMS.map(() => Array(STEPS).fill(false));

const patternAtom = atom<boolean[][]>(createEmptyPattern());
const isPlayingAtom = atom<boolean>(false);
const bpmAtom = atom<number>(120);
const currentStepAtom = atom<number>(0);
const queueAtom = atom<BeatPattern[]>([]);

// ============================================================================
// Components
// ============================================================================

export function DJBeatMachine() {
  const [pattern, setPattern] = useAtom(patternAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [bpm, setBpm] = useAtom(bpmAtom);
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [queue, setQueue] = useAtom(queueAtom);
  const [beatName, setBeatName] = useState("");

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stepDuration = (60 / bpm / 4) * 1000; // ms per 16th note

  const playStep = useCallback(
    (step: number) => {
      DRUMS.forEach((drum, drumIndex) => {
        if (pattern[drumIndex][step]) {
          drumSynth.play(drum);
        }
      });
    },
    [pattern],
  );

  useEffect(() => {
    if (isPlaying) {
      drumSynth.init();
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const next = (prev + 1) % STEPS;
          playStep(next);
          return next;
        });
      }, stepDuration);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentStep(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, stepDuration, playStep, setCurrentStep]);

  const toggleStep = (drumIndex: number, stepIndex: number) => {
    setPattern((prev) => {
      const newPattern = prev.map((row) => [...row]);
      newPattern[drumIndex][stepIndex] = !newPattern[drumIndex][stepIndex];
      return newPattern;
    });
  };

  const clearPattern = () => {
    setPattern(createEmptyPattern());
    setIsPlaying(false);
  };

  const addToQueue = () => {
    if (beatName.trim() === "") return;
    const newBeat: BeatPattern = {
      id: Date.now().toString(),
      name: beatName,
      pattern: pattern.map((row) => [...row]),
      bpm,
    };
    setQueue((prev) => [...prev, newBeat]);
    setBeatName("");
  };

  const loadBeat = (beat: BeatPattern) => {
    setPattern(beat.pattern);
    setBpm(beat.bpm);
    setIsPlaying(false);
  };

  const removeBeat = (id: string) => {
    setQueue((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-title-sm font-semibold text-primary">
            DJ Beat Machine
          </h2>
          <p className="text-caption text-tertiary">
            Berlin techno vibes 🎧 Build your beat
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={clearPattern}
            className={cn(
              "rounded-md px-3 py-1.5 text-caption font-medium transition-colors",
              "bg-secondary text-secondary hover:bg-tertiary",
            )}
          >
            Clear
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={cn(
              "flex items-center gap-2 rounded-md px-4 py-2 text-body font-medium transition-all",
              isPlaying
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-purple-primary text-white hover:bg-purple-600",
            )}
          >
            <Icon icon={isPlaying ? mediaStopIcon : mediaPlayIcon} size="sm" />
            {isPlaying ? "Stop" : "Play"}
          </button>
        </div>
      </div>

      {/* BPM Control */}
      <div className="flex items-center gap-4 rounded-lg bg-secondary p-4">
        <label className="text-body font-medium text-secondary">BPM</label>
        <input
          type="range"
          min="60"
          max="180"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="h-2 flex-1 cursor-pointer appearance-none rounded-lg bg-tertiary"
          style={{
            background: `linear-gradient(to right, rgb(139, 92, 246) 0%, rgb(139, 92, 246) ${((bpm - 60) / 120) * 100}%, rgb(var(--color-bg-tertiary)) ${((bpm - 60) / 120) * 100}%, rgb(var(--color-bg-tertiary)) 100%)`,
          }}
        />
        <span className="min-w-[3rem] text-right text-body font-mono font-semibold text-primary">
          {bpm}
        </span>
      </div>

      {/* Sequencer Grid */}
      <div className="rounded-xl border border-primary bg-[#0a0a0a] p-6 shadow-lg-outline">
        <div className="space-y-3">
          {DRUMS.map((drum, drumIndex) => (
            <div key={drum} className="flex items-center gap-3">
              <div className="w-20 text-caption font-medium text-gray-400">
                {DRUM_LABELS[drum]}
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: STEPS }).map((_, stepIndex) => {
                  const isActive = pattern[drumIndex][stepIndex];
                  const isCurrent = currentStep === stepIndex && isPlaying;
                  const isMeasureStart = stepIndex % 4 === 0;

                  return (
                    <motion.button
                      key={stepIndex}
                      onClick={() => toggleStep(drumIndex, stepIndex)}
                      className={cn(
                        "relative h-10 w-10 rounded-md border transition-all",
                        isMeasureStart
                          ? "border-purple-500/30"
                          : "border-gray-700",
                        isActive
                          ? "bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50"
                          : "bg-gray-900 hover:bg-gray-800",
                        isCurrent && "ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0a0a0a]",
                      )}
                      animate={
                        isCurrent
                          ? {
                              scale: [1, 1.1, 1],
                              transition: { duration: 0.15 },
                            }
                          : {}
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visualizer */}
      <Visualizer isPlaying={isPlaying} currentStep={currentStep} />

      {/* Save to Queue */}
      <div className="rounded-lg border border-primary bg-secondary p-4">
        <div className="mb-3 flex items-center gap-3">
          <input
            type="text"
            value={beatName}
            onChange={(e) => setBeatName(e.target.value)}
            placeholder="Name your beat..."
            className={cn(
              "flex-1 rounded-md border border-primary bg-elevated px-3 py-2",
              "text-body text-primary placeholder:text-tertiary",
              "focus:outline-none focus:ring-2 focus:ring-purple-primary",
            )}
            onKeyDown={(e) => {
              if (e.key === "Enter") addToQueue();
            }}
          />
          <button
            onClick={addToQueue}
            disabled={beatName.trim() === ""}
            className={cn(
              "rounded-md px-4 py-2 text-body font-medium transition-colors",
              "bg-purple-primary text-white hover:bg-purple-600",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            Add to Queue
          </button>
        </div>

        {/* Queue List */}
        {queue.length > 0 && (
          <div className="space-y-2">
            <div className="text-caption font-semibold text-secondary">
              Beat Queue ({queue.length})
            </div>
            <div className="space-y-1.5">
              {queue.map((beat) => (
                <div
                  key={beat.id}
                  className="flex items-center justify-between rounded-md bg-elevated p-3"
                >
                  <div>
                    <div className="text-body font-medium text-primary">
                      {beat.name}
                    </div>
                    <div className="text-caption text-tertiary">
                      {beat.bpm} BPM
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => loadBeat(beat)}
                      className="rounded-md bg-secondary px-3 py-1.5 text-caption font-medium text-secondary transition-colors hover:bg-tertiary"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => removeBeat(beat.id)}
                      className="rounded-md bg-secondary px-3 py-1.5 text-caption font-medium text-secondary transition-colors hover:bg-red-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Visualizer Component
// ============================================================================

function Visualizer({
  isPlaying,
  currentStep,
}: {
  isPlaying: boolean;
  currentStep: number;
}) {
  return (
    <div className="relative h-32 overflow-hidden rounded-xl border border-primary bg-gradient-to-br from-purple-950/50 to-pink-950/50 p-4">
      <div className="flex h-full items-end justify-around gap-1">
        {Array.from({ length: 16 }).map((_, i) => {
          const isActive = isPlaying && currentStep === i;
          const height = isActive
            ? Math.random() * 60 + 40
            : Math.random() * 20 + 10;

          return (
            <motion.div
              key={i}
              className={cn(
                "w-full rounded-t-md",
                isActive
                  ? "bg-gradient-to-t from-cyan-400 to-purple-500"
                  : "bg-gray-700/30",
              )}
              animate={{
                height: isActive ? `${height}%` : "10%",
                transition: { duration: 0.1 },
              }}
            />
          );
        })}
      </div>

      {/* Glow effect */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={GLOW_HIDDEN}
            animate={GLOW_VISIBLE}
            exit={GLOW_HIDDEN}
            className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
