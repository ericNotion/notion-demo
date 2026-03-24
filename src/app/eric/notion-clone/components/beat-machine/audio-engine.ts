"use client";

// Web Audio API drum synthesis engine
// Synthesizes kick, snare, hihat, and clap sounds using oscillators and noise

let audioContext: AudioContext | null = null;
let analyserNode: AnalyserNode | null = null;
let masterGain: GainNode | null = null;

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

export function getAnalyserNode(): AnalyserNode {
  if (!analyserNode) {
    const ctx = getAudioContext();
    analyserNode = ctx.createAnalyser();
    analyserNode.fftSize = 256;
    analyserNode.smoothingTimeConstant = 0.8;
    masterGain = ctx.createGain();
    masterGain.connect(analyserNode);
    analyserNode.connect(ctx.destination);
  }
  return analyserNode;
}

export function getMasterGain(): GainNode {
  if (!masterGain) {
    getAnalyserNode();
  }
  return masterGain!;
}

export function setMasterVolume(value: number) {
  const gain = getMasterGain();
  gain.gain.setValueAtTime(value, getAudioContext().currentTime);
}

function createNoiseBuffer(ctx: AudioContext, duration: number): AudioBuffer {
  const sampleRate = ctx.sampleRate;
  const length = sampleRate * duration;
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

export function playKick(time?: number) {
  const ctx = getAudioContext();
  const t = time ?? ctx.currentTime;
  const gain = getMasterGain();

  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);

  oscGain.gain.setValueAtTime(1, t);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

  osc.connect(oscGain);
  oscGain.connect(gain);

  osc.start(t);
  osc.stop(t + 0.3);
}

export function playSnare(time?: number) {
  const ctx = getAudioContext();
  const t = time ?? ctx.currentTime;
  const gain = getMasterGain();

  // Noise component
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 0.2);
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = "highpass";
  noiseFilter.frequency.value = 1000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.7, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(gain);

  // Tone component
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(180, t);
  const oscGain = ctx.createGain();
  oscGain.gain.setValueAtTime(0.5, t);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

  osc.connect(oscGain);
  oscGain.connect(gain);

  noise.start(t);
  noise.stop(t + 0.2);
  osc.start(t);
  osc.stop(t + 0.1);
}

export function playHihat(time?: number) {
  const ctx = getAudioContext();
  const t = time ?? ctx.currentTime;
  const gain = getMasterGain();

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 0.08);
  const filter = ctx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 6000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.4, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(gain);

  noise.start(t);
  noise.stop(t + 0.08);
}

export function playClap(time?: number) {
  const ctx = getAudioContext();
  const t = time ?? ctx.currentTime;
  const gain = getMasterGain();

  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 0.15);
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 2000;
  filter.Q.value = 2;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0, t);
  noiseGain.gain.setValueAtTime(0.8, t + 0.01);
  noiseGain.gain.setValueAtTime(0.2, t + 0.02);
  noiseGain.gain.setValueAtTime(0.7, t + 0.03);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(gain);

  noise.start(t);
  noise.stop(t + 0.15);
}

export const TRACKS = ["kick", "snare", "hihat", "clap"] as const;
export type TrackName = (typeof TRACKS)[number];

export const playSound: Record<TrackName, (time?: number) => void> = {
  kick: playKick,
  snare: playSnare,
  hihat: playHihat,
  clap: playClap,
};

export const TRACK_COLORS: Record<TrackName, string> = {
  kick: "#ff006e",
  snare: "#8338ec",
  hihat: "#3a86ff",
  clap: "#06d6a0",
};

export const TRACK_LABELS: Record<TrackName, string> = {
  kick: "KICK",
  snare: "SNARE",
  hihat: "HI-HAT",
  clap: "CLAP",
};
