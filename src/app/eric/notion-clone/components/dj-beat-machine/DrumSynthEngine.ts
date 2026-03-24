import type { DrumType } from "./types";

export class DrumSynthEngine {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new AudioContext();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.connect(this.audioContext.destination);
      this.masterGain.gain.value = 0.7;
    }
  }

  private getContext(): AudioContext {
    if (!this.audioContext) {
      throw new Error("AudioContext not initialized");
    }
    return this.audioContext;
  }

  private getMasterGain(): GainNode {
    if (!this.masterGain) {
      throw new Error("Master gain not initialized");
    }
    return this.masterGain;
  }

  playDrum(type: DrumType): void {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    switch (type) {
      case "kick":
        this.playKick(now);
        break;
      case "snare":
        this.playSnare(now);
        break;
      case "hihat":
        this.playHihat(now, false);
        break;
      case "openhat":
        this.playHihat(now, true);
        break;
      case "clap":
        this.playClap(now);
        break;
      case "perc":
        this.playPerc(now);
        break;
    }
  }

  private playKick(time: number): void {
    const ctx = this.getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    osc.connect(gain);
    gain.connect(this.getMasterGain());

    osc.start(time);
    osc.stop(time + 0.5);
  }

  private playSnare(time: number): void {
    const ctx = this.getContext();

    // Noise component
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(1, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    // Tone component
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 200;

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.7, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.getMasterGain());

    osc.connect(oscGain);
    oscGain.connect(this.getMasterGain());

    noise.start(time);
    osc.start(time);
    noise.stop(time + 0.2);
    osc.stop(time + 0.1);
  }

  private playHihat(time: number, open: boolean): void {
    const ctx = this.getContext();

    const bufferSize = ctx.sampleRate * (open ? 0.3 : 0.05);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 7000;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(open ? 0.3 : 0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + bufferSize / ctx.sampleRate);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.getMasterGain());

    noise.start(time);
    noise.stop(time + bufferSize / ctx.sampleRate);
  }

  private playClap(time: number): void {
    const ctx = this.getContext();

    // Three short noise bursts for a clap effect
    for (let i = 0; i < 3; i++) {
      const delay = i * 0.016;
      const bufferSize = ctx.sampleRate * 0.05;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 1500;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.5, time + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, time + delay + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.getMasterGain());

      noise.start(time + delay);
      noise.stop(time + delay + 0.05);
    }
  }

  private playPerc(time: number): void {
    const ctx = this.getContext();

    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(800, time);
    osc.frequency.exponentialRampToValueAtTime(100, time + 0.1);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    osc.connect(gain);
    gain.connect(this.getMasterGain());

    osc.start(time);
    osc.stop(time + 0.1);
  }

  setVolume(volume: number): void {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, volume));
    }
  }

  dispose(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
      this.masterGain = null;
    }
  }
}
