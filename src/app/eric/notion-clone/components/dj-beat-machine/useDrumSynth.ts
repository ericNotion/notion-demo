import { useCallback, useRef } from "react";

type DrumType = "kick" | "snare" | "hihat" | "clap";

export function useDrumSynth() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playKick = useCallback(() => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.5,
    );

    gain.gain.setValueAtTime(1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.5,
    );

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  }, [getAudioContext]);

  const playSnare = useCallback(() => {
    const ctx = getAudioContext();

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    oscGain.gain.setValueAtTime(0.7, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.2,
    );
    osc.connect(oscGain);

    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.setValueAtTime(1000, ctx.currentTime);

    noiseGain.gain.setValueAtTime(1, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.2,
    );

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.6, ctx.currentTime);
    oscGain.connect(masterGain);
    noiseGain.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    noise.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
    noise.stop(ctx.currentTime + 0.2);
  }, [getAudioContext]);

  const playHiHat = useCallback(() => {
    const ctx = getAudioContext();

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
    filter.frequency.setValueAtTime(7000, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.05,
    );

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + 0.05);
  }, [getAudioContext]);

  const playClap = useCallback(() => {
    const ctx = getAudioContext();

    const bufferSize = ctx.sampleRate * 0.1;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1500, ctx.currentTime);
    filter.Q.setValueAtTime(1.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.8, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      ctx.currentTime + 0.1,
    );

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + 0.1);
  }, [getAudioContext]);

  const playDrum = useCallback(
    (type: DrumType) => {
      switch (type) {
        case "kick":
          playKick();
          break;
        case "snare":
          playSnare();
          break;
        case "hihat":
          playHiHat();
          break;
        case "clap":
          playClap();
          break;
      }
    },
    [playKick, playSnare, playHiHat, playClap],
  );

  return { playDrum };
}
