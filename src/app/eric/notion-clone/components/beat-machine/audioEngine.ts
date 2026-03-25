export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.connect(this.audioContext.destination);
      this.masterGain.gain.value = 0.7;
    }
  }

  setVolume(volume: number) {
    if (this.masterGain) {
      this.masterGain.gain.value = volume;
    }
  }

  playKick() {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.5);

    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  playSnare() {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const noiseBuffer = this.createNoiseBuffer();
    const noise = this.audioContext.createBufferSource();
    const noiseFilter = this.audioContext.createBiquadFilter();
    const noiseGain = this.audioContext.createGain();

    noise.buffer = noiseBuffer;
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;

    noiseGain.gain.setValueAtTime(1, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    const osc = this.audioContext.createOscillator();
    const oscGain = this.audioContext.createGain();

    osc.type = "triangle";
    osc.frequency.value = 200;

    oscGain.gain.setValueAtTime(0.7, now);
    oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playHihat() {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    const noiseBuffer = this.createNoiseBuffer();
    const noise = this.audioContext.createBufferSource();
    const filter = this.audioContext.createBiquadFilter();
    const gain = this.audioContext.createGain();

    noise.buffer = noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = 7000;

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.05);
  }

  playClap() {
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;

    for (let i = 0; i < 3; i++) {
      const delay = i * 0.01;
      const noiseBuffer = this.createNoiseBuffer();
      const noise = this.audioContext.createBufferSource();
      const filter = this.audioContext.createBiquadFilter();
      const gain = this.audioContext.createGain();

      noise.buffer = noiseBuffer;
      filter.type = "bandpass";
      filter.frequency.value = 1000;

      gain.gain.setValueAtTime(0.5, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.1);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start(now + delay);
      noise.stop(now + delay + 0.1);
    }
  }

  private createNoiseBuffer(): AudioBuffer {
    if (!this.audioContext) throw new Error("No audio context");

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
