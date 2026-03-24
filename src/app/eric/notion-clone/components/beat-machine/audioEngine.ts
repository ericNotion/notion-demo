import type { DrumType } from "./types";

export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  initialize() {
    if (this.audioContext) return;
    this.audioContext = new AudioContext();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0.5;
    this.masterGain.connect(this.audioContext.destination);
  }

  playSound(type: DrumType) {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;

    switch (type) {
      case "kick":
        this.playKick(now);
        break;
      case "snare":
        this.playSnare(now);
        break;
      case "hihat":
        this.playHihat(now);
        break;
      case "clap":
        this.playClap(now);
        break;
    }
  }

  private playKick(time: number) {
    if (!this.audioContext || !this.masterGain) return;

    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.5);
  }

  private playSnare(time: number) {
    if (!this.audioContext || !this.masterGain) return;

    const noise = this.audioContext.createBufferSource();
    const noiseFilter = this.audioContext.createBiquadFilter();
    const noiseEnvelope = this.audioContext.createGain();

    const buffer = this.audioContext.createBuffer(
      1,
      this.audioContext.sampleRate * 0.2,
      this.audioContext.sampleRate,
    );
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;

    noiseEnvelope.gain.setValueAtTime(1, time);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseEnvelope);
    noiseEnvelope.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.2);

    const osc = this.audioContext.createOscillator();
    const oscGain = this.audioContext.createGain();

    osc.frequency.value = 100;
    oscGain.gain.setValueAtTime(0.7, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.1);
  }

  private playHihat(time: number) {
    if (!this.audioContext || !this.masterGain) return;

    const noise = this.audioContext.createBufferSource();
    const noiseFilter = this.audioContext.createBiquadFilter();
    const noiseEnvelope = this.audioContext.createGain();

    const buffer = this.audioContext.createBuffer(
      1,
      this.audioContext.sampleRate * 0.05,
      this.audioContext.sampleRate,
    );
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 7000;

    noiseEnvelope.gain.setValueAtTime(0.3, time);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.05);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseEnvelope);
    noiseEnvelope.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.05);
  }

  private playClap(time: number) {
    if (!this.audioContext || !this.masterGain) return;

    const noise = this.audioContext.createBufferSource();
    const noiseFilter = this.audioContext.createBiquadFilter();
    const noiseEnvelope = this.audioContext.createGain();

    const buffer = this.audioContext.createBuffer(
      1,
      this.audioContext.sampleRate * 0.15,
      this.audioContext.sampleRate,
    );
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;

    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 1000;

    noiseEnvelope.gain.setValueAtTime(0, time);
    noiseEnvelope.gain.setValueAtTime(1, time + 0.01);
    noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseEnvelope);
    noiseEnvelope.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.15);
  }

  cleanup() {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
      this.masterGain = null;
    }
  }
}

export const audioEngine = new AudioEngine();
