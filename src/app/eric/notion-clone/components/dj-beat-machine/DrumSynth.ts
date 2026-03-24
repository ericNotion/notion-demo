import type { DrumSound } from "./atoms";

export class DrumSynth {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new AudioContext();
    }
  }

  private getContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
    return this.audioContext;
  }

  playSound(sound: DrumSound, intensity: number = 1.0): void {
    const ctx = this.getContext();
    const now = ctx.currentTime;

    switch (sound) {
      case "kick":
        this.playKick(ctx, now, intensity);
        break;
      case "snare":
        this.playSnare(ctx, now, intensity);
        break;
      case "hihat":
        this.playHiHat(ctx, now, intensity);
        break;
      case "clap":
        this.playClap(ctx, now, intensity);
        break;
      case "tom":
        this.playTom(ctx, now, intensity);
        break;
      case "cymbal":
        this.playCymbal(ctx, now, intensity);
        break;
      case "rim":
        this.playRim(ctx, now, intensity);
        break;
      case "cowbell":
        this.playCowbell(ctx, now, intensity);
        break;
    }
  }

  private playKick(ctx: AudioContext, startTime: number, intensity: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, startTime);
    osc.frequency.exponentialRampToValueAtTime(40, startTime + 0.1);

    filter.type = "lowpass";
    filter.frequency.value = 200;

    gain.gain.setValueAtTime(0.8 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.3);
  }

  private playSnare(ctx: AudioContext, startTime: number, intensity: number): void {
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
    noiseGain.gain.setValueAtTime(0.5 * intensity, startTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    // Tone component
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(200, startTime);
    osc.frequency.exponentialRampToValueAtTime(100, startTime + 0.1);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.3 * intensity, startTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(startTime);
    osc.start(startTime);
    osc.stop(startTime + 0.15);
  }

  private playHiHat(ctx: AudioContext, startTime: number, intensity: number): void {
    const bufferSize = ctx.sampleRate * 0.05;
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
    gain.gain.setValueAtTime(0.3 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
  }

  private playClap(ctx: AudioContext, startTime: number, intensity: number): void {
    // Three quick bursts of noise to simulate clap
    for (let i = 0; i < 3; i++) {
      const bufferSize = ctx.sampleRate * 0.02;
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
      filter.Q.value = 1;

      const gain = ctx.createGain();
      const time = startTime + i * 0.015;
      gain.gain.setValueAtTime(0.4 * intensity, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.02);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(time);
    }
  }

  private playTom(ctx: AudioContext, startTime: number, intensity: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(120, startTime);
    osc.frequency.exponentialRampToValueAtTime(60, startTime + 0.15);

    gain.gain.setValueAtTime(0.6 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.2);
  }

  private playCymbal(ctx: AudioContext, startTime: number, intensity: number): void {
    const bufferSize = ctx.sampleRate * 0.5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 5000;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
  }

  private playRim(ctx: AudioContext, startTime: number, intensity: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "square";
    osc.frequency.setValueAtTime(400, startTime);
    osc.frequency.exponentialRampToValueAtTime(200, startTime + 0.02);

    filter.type = "highpass";
    filter.frequency.value = 300;

    gain.gain.setValueAtTime(0.3 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.02);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.02);
  }

  private playCowbell(ctx: AudioContext, startTime: number, intensity: number): void {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "square";
    osc1.frequency.value = 540;
    osc2.type = "square";
    osc2.frequency.value = 800;

    gain.gain.setValueAtTime(0.4 * intensity, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + 0.1);
    osc2.stop(startTime + 0.1);
  }

  dispose(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }
}
