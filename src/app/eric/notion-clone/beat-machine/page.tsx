"use client";

import { Agentation } from "@/components/playground-kit";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { trashIcon } from "@nds-icons/trash/default.icon";
import { atom, useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ────────────────────────────────────────────────────────────────────────────
// TYPES & CONSTANTS
// ────────────────────────────────────────────────────────────────────────────

const TRACKS = ["Kick", "Snare", "Hi-Hat", "Clap", "Open Hat", "Perc"];
const STEPS = 16;
const DEFAULT_BPM = 120;

type Pattern = boolean[][];
type Beat = {
  id: string;
  name: string;
  pattern: Pattern;
  bpm: number;
};

// Track colors (Berlin nightclub neon)
const TRACK_COLORS = [
  "#ff00aa", // magenta - kick
  "#00f0ff", // cyan - snare
  "#9d4edd", // purple - hi-hat
  "#ff6b9d", // pink - clap
  "#00ffcc", // teal - open hat
  "#ffaa00", // orange - perc
];

// ────────────────────────────────────────────────────────────────────────────
// AUDIO ENGINE
// ────────────────────────────────────────────────────────────────────────────

class DrumSynth {
  private ctx: AudioContext | null = null;

  init() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    return this.ctx;
  }

  playKick() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playSnare() {
    if (!this.ctx) return;
    const noise = this.ctx.createBufferSource();
    const noiseBuffer = this.ctx.createBuffer(
      1,
      this.ctx.sampleRate * 0.2,
      this.ctx.sampleRate,
    );
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    noise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 1000;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(
      0.01,
      this.ctx.currentTime + 0.2,
    );

    const osc = this.ctx.createOscillator();
    osc.frequency.value = 200;
    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(
      0.01,
      this.ctx.currentTime + 0.1,
    );

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    osc.connect(oscGain);

    noiseGain.connect(this.ctx.destination);
    oscGain.connect(this.ctx.destination);

    noise.start(this.ctx.currentTime);
    osc.start(this.ctx.currentTime);
    noise.stop(this.ctx.currentTime + 0.2);
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playHiHat(openHat = false) {
    if (!this.ctx) return;
    const noise = this.ctx.createBufferSource();
    const noiseBuffer = this.ctx.createBuffer(
      1,
      this.ctx.sampleRate * (openHat ? 0.3 : 0.05),
      this.ctx.sampleRate,
    );
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    noise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 7000;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      this.ctx.currentTime + (openHat ? 0.3 : 0.05),
    );

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(this.ctx.currentTime);
    noise.stop(this.ctx.currentTime + (openHat ? 0.3 : 0.05));
  }

  playClap() {
    if (!this.ctx) return;
    const noise = this.ctx.createBufferSource();
    const noiseBuffer = this.ctx.createBuffer(
      1,
      this.ctx.sampleRate * 0.08,
      this.ctx.sampleRate,
    );
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    noise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1500;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.6, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(this.ctx.currentTime);
    noise.stop(this.ctx.currentTime + 0.08);
  }

  playPerc() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    osc.frequency.value = 800;
    osc.type = "triangle";

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playTrack(trackIndex: number) {
    switch (trackIndex) {
      case 0:
        this.playKick();
        break;
      case 1:
        this.playSnare();
        break;
      case 2:
        this.playHiHat(false);
        break;
      case 3:
        this.playClap();
        break;
      case 4:
        this.playHiHat(true);
        break;
      case 5:
        this.playPerc();
        break;
    }
  }
}

// ────────────────────────────────────────────────────────────────────────────
// STATE
// ────────────────────────────────────────────────────────────────────────────

const createEmptyPattern = (): Pattern =>
  TRACKS.map(() => Array(STEPS).fill(false));

const beatQueueAtom = atom<Beat[]>([]);

// ────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ────────────────────────────────────────────────────────────────────────────

function StepCell({
  active,
  isPlaying,
  color,
  onClick,
}: {
  active: boolean;
  isPlaying: boolean;
  color: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative h-10 w-full rounded border transition-all",
        active
          ? "border-transparent"
          : "border-white/10 bg-white/5 hover:bg-white/10",
      )}
      style={{
        backgroundColor: active ? color : undefined,
        boxShadow: active
          ? `0 0 10px ${color}80, inset 0 0 10px ${color}40`
          : undefined,
      }}
      animate={{
        scale: isPlaying ? (active ? 1.05 : 0.98) : 1,
      }}
      transition={{ duration: 0.05 }}
    >
      {active && (
        <div
          className="absolute inset-0 rounded"
          style={{
            background: `radial-gradient(circle at center, ${color}ff 0%, ${color}00 70%)`,
          }}
        />
      )}
    </motion.button>
  );
}

function Visualizer({
  pattern,
  currentStep,
  isPlaying,
}: {
  pattern: Pattern;
  currentStep: number;
  isPlaying: boolean;
}) {
  return (
    <div className="flex h-24 items-end justify-center gap-1 rounded-lg border border-cyan-500/20 bg-[#0a0a0f] p-4">
      {Array.from({ length: STEPS }).map((_, i) => {
        const activeTracks = pattern.filter((track) => track[i]).length;
        const isActive = i === currentStep && isPlaying;
        const height = activeTracks > 0 ? (activeTracks / TRACKS.length) * 100 : 5;

        return (
          <motion.div
            key={i}
            className="w-full rounded-sm"
            style={{
              backgroundColor: isActive ? "#00f0ff" : "#ffffff20",
              boxShadow: isActive ? "0 0 15px #00f0ff" : "none",
            }}
            animate={{
              height: isActive ? `${Math.min(height * 1.2, 100)}%` : `${height}%`,
            }}
            transition={{ duration: 0.05 }}
          />
        );
      })}
    </div>
  );
}

function BeatQueue({
  beats,
  onLoad,
  onDelete,
}: {
  beats: Beat[];
  onLoad: (beat: Beat) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="space-y-2">
      <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400">
        Beat Queue
      </h3>
      <div className="space-y-2">
        {beats.length === 0 ? (
          <div className="rounded border border-white/10 bg-white/5 p-4 text-center text-sm text-white/40">
            No beats saved yet
          </div>
        ) : (
          beats.map((beat) => (
            <motion.div
              key={beat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center justify-between rounded border border-white/10 bg-white/5 p-3 transition-all hover:border-cyan-500/40 hover:bg-white/10"
            >
              <button
                onClick={() => onLoad(beat)}
                className="flex-1 text-left"
              >
                <div className="font-medium text-white">{beat.name}</div>
                <div className="font-mono text-xs text-white/60">
                  {beat.bpm} BPM
                </div>
              </button>
              <button
                onClick={() => onDelete(beat.id)}
                className="ml-2 rounded p-1.5 text-red-400/60 transition-colors hover:bg-red-500/20 hover:text-red-400"
              >
                <Icon icon={trashIcon} size={16} />
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────────────────────

export default function BeatMachinePage() {
  const [pattern, setPattern] = useState<Pattern>(createEmptyPattern());
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(DEFAULT_BPM);
  const [beatQueue, setBeatQueue] = useAtom(beatQueueAtom);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [beatName, setBeatName] = useState("");

  const synthRef = useRef<DrumSynth>(new DrumSynth());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stepDuration = (60 / bpm / 4) * 1000;

  const toggleCell = useCallback((trackIndex: number, stepIndex: number) => {
    setPattern((prev) => {
      const newPattern = prev.map((track) => [...track]);
      newPattern[trackIndex][stepIndex] = !newPattern[trackIndex][stepIndex];
      return newPattern;
    });
  }, []);

  const playStep = useCallback(
    (step: number) => {
      pattern.forEach((track, trackIndex) => {
        if (track[step]) {
          synthRef.current.playTrack(trackIndex);
        }
      });
    },
    [pattern],
  );

  useEffect(() => {
    if (isPlaying) {
      synthRef.current.init();
      playStep(currentStep);

      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          const next = (prev + 1) % STEPS;
          return next;
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
  }, [isPlaying, stepDuration, playStep]);

  useEffect(() => {
    if (isPlaying) {
      playStep(currentStep);
    }
  }, [currentStep, isPlaying, playStep]);

  const handlePlayPause = () => {
    if (!isPlaying) {
      synthRef.current.init();
    }
    setIsPlaying(!isPlaying);
  };

  const handleClear = () => {
    setPattern(createEmptyPattern());
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleSave = () => {
    if (!beatName.trim()) return;

    const newBeat: Beat = {
      id: Date.now().toString(),
      name: beatName,
      pattern: pattern.map((track) => [...track]),
      bpm,
    };

    setBeatQueue((prev) => [...prev, newBeat]);
    setBeatName("");
    setShowSaveDialog(false);
  };

  const handleLoad = (beat: Beat) => {
    setPattern(beat.pattern.map((track) => [...track]));
    setBpm(beat.bpm);
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const handleDelete = (id: string) => {
    setBeatQueue((prev) => prev.filter((beat) => beat.id !== id));
  };

  return (
    <Agentation>
      <div className="min-h-screen bg-[#0a0a0f] p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div className="border-b border-magenta-500/20 pb-6">
            <h1
              className="mb-2 font-mono text-4xl font-bold uppercase tracking-wider"
              style={{
                background:
                  "linear-gradient(135deg, #ff00aa 0%, #00f0ff 50%, #9d4edd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DJ Beat Machine
            </h1>
            <p className="font-mono text-sm text-white/60">
              Berlin nightclub step sequencer
            </p>
          </div>

          {/* Visualizer */}
          <Visualizer
            pattern={pattern}
            currentStep={currentStep}
            isPlaying={isPlaying}
          />

          {/* Transport Controls */}
          <div className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-[#0a0a0f] p-6">
            <div className="flex gap-3">
              <button
                onClick={handlePlayPause}
                className={cn(
                  "rounded-lg px-6 py-3 font-mono font-semibold uppercase tracking-wider transition-all",
                  isPlaying
                    ? "border border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-cyan-500/30"
                    : "border border-magenta-500 bg-magenta-500/20 text-magenta-400 shadow-[0_0_20px_rgba(255,0,170,0.3)] hover:bg-magenta-500/30",
                )}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={handleClear}
                className="rounded-lg border border-red-500/40 bg-red-500/10 px-6 py-3 font-mono font-semibold uppercase tracking-wider text-red-400 transition-all hover:bg-red-500/20"
              >
                Clear
              </button>
              <button
                onClick={() => setShowSaveDialog(!showSaveDialog)}
                className="rounded-lg border border-purple-500/40 bg-purple-500/10 px-6 py-3 font-mono font-semibold uppercase tracking-wider text-purple-400 transition-all hover:bg-purple-500/20"
              >
                Save Beat
              </button>
            </div>

            <div className="flex items-center gap-4">
              <label className="font-mono text-sm font-semibold uppercase tracking-wider text-white/80">
                BPM
              </label>
              <input
                type="range"
                min="60"
                max="180"
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-32"
                style={{
                  accentColor: "#9d4edd",
                }}
              />
              <div
                className="min-w-[4rem] rounded border border-purple-500/40 bg-purple-500/10 px-3 py-2 text-center font-mono text-lg font-bold text-purple-300"
                style={{
                  textShadow: "0 0 10px rgba(157, 78, 221, 0.6)",
                }}
              >
                {bpm}
              </div>
            </div>
          </div>

          {/* Save Dialog */}
          <AnimatePresence>
            {showSaveDialog && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="rounded-lg border border-purple-500/40 bg-[#0a0a0f] p-6"
              >
                <h3 className="mb-4 font-mono text-lg font-semibold text-purple-300">
                  Save your beat
                </h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={beatName}
                    onChange={(e) => setBeatName(e.target.value)}
                    placeholder="Enter beat name..."
                    className="flex-1 rounded border border-white/20 bg-white/5 px-4 py-2 font-mono text-white placeholder:text-white/40 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSave();
                    }}
                  />
                  <button
                    onClick={handleSave}
                    disabled={!beatName.trim()}
                    className="rounded bg-purple-500/20 px-6 py-2 font-mono font-semibold text-purple-300 transition-all hover:bg-purple-500/30 disabled:opacity-40 disabled:hover:bg-purple-500/20"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step Sequencer */}
          <div className="rounded-lg border border-cyan-500/20 bg-[#0a0a0f] p-6">
            <div className="space-y-2">
              {TRACKS.map((trackName, trackIndex) => (
                <div key={trackName} className="flex items-center gap-2">
                  <div
                    className="w-24 text-right font-mono text-sm font-semibold uppercase tracking-wider"
                    style={{
                      color: TRACK_COLORS[trackIndex],
                      textShadow: `0 0 8px ${TRACK_COLORS[trackIndex]}60`,
                    }}
                  >
                    {trackName}
                  </div>
                  <div className="flex flex-1 gap-1">
                    {Array.from({ length: STEPS }).map((_, stepIndex) => (
                      <StepCell
                        key={stepIndex}
                        active={pattern[trackIndex][stepIndex]}
                        isPlaying={stepIndex === currentStep && isPlaying}
                        color={TRACK_COLORS[trackIndex]}
                        onClick={() => toggleCell(trackIndex, stepIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Step markers */}
            <div className="mt-2 flex items-center gap-2">
              <div className="w-24" />
              <div className="flex flex-1 gap-1">
                {Array.from({ length: STEPS }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex w-full justify-center font-mono text-xs",
                      i % 4 === 0 ? "text-white/60" : "text-white/20",
                    )}
                  >
                    {i % 4 === 0 ? i + 1 : "·"}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Beat Queue */}
          <div className="rounded-lg border border-cyan-500/20 bg-[#0a0a0f] p-6">
            <BeatQueue
              beats={beatQueue}
              onLoad={handleLoad}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </Agentation>
  );
}
