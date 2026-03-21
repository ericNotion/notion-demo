"use client";

/**
 * Scrolling squiggle animation component.
 *
 * This component displays an animated squiggle line that continuously scrolls
 * and loops, providing a dynamic "thinking" animation. The squiggle follows
 * a sine wave pattern with varying radius to create a lively, pen-like motion.
 */

import { useEffect, useMemo, useRef } from "react";

// Default values for ScrollingSquiggle
const SCROLLING_SQUIGGLE_DEFAULTS = {
  width: 24,
  height: 16,
  tempo: 18,
  minLoopSize: 24,
  maxLoopSize: 32,
  acceleration: 0.3,
  tailLength: 72,
  strokeWidth: 1.5,
  loopSpacing: 1.3, // Multiplier for horizontal spacing between loops
  // Modulation parameters
  modulationSpeed: 0.4, // Hz - speed of the sine wave
  modulationPhaseOffset: 2, // Phase offset for the sine wave (radians)
  tempoModulation: 10, // -10 to 10, modulation amount for tempo
  accelerationModulation: 0.12, // -0.5 to 0.5, modulation amount for acceleration
} as const;

interface LoadingSquiggleProps {
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  tempo?: number;
  minLoopSize?: number;
  maxLoopSize?: number;
  acceleration?: number;
  tailLength?: number;
  strokeWidth?: number;
  strokeColor?: string;
  loopSpacing?: number;
  // Modulation parameters
  modulationSpeed?: number;
  modulationPhaseOffset?: number;
  tempoModulation?: number;
  accelerationModulation?: number;
}

export function LoadingSquiggle(props: LoadingSquiggleProps) {
  const {
    style,
    width = SCROLLING_SQUIGGLE_DEFAULTS.width,
    height = SCROLLING_SQUIGGLE_DEFAULTS.height,
    tempo = SCROLLING_SQUIGGLE_DEFAULTS.tempo,
    minLoopSize = SCROLLING_SQUIGGLE_DEFAULTS.minLoopSize,
    maxLoopSize = SCROLLING_SQUIGGLE_DEFAULTS.maxLoopSize,
    acceleration = SCROLLING_SQUIGGLE_DEFAULTS.acceleration,
    tailLength = SCROLLING_SQUIGGLE_DEFAULTS.tailLength,
    strokeWidth = SCROLLING_SQUIGGLE_DEFAULTS.strokeWidth,
    strokeColor,
    loopSpacing = SCROLLING_SQUIGGLE_DEFAULTS.loopSpacing,
    // Modulation parameters
    modulationSpeed = SCROLLING_SQUIGGLE_DEFAULTS.modulationSpeed,
    modulationPhaseOffset = SCROLLING_SQUIGGLE_DEFAULTS.modulationPhaseOffset,
    tempoModulation = SCROLLING_SQUIGGLE_DEFAULTS.tempoModulation,
    accelerationModulation = SCROLLING_SQUIGGLE_DEFAULTS.accelerationModulation,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  // Get stroke color from CSS variable if not provided
  const defaultStrokeColor =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--color-text-quaternary",
        ) || "#9b9a97"
      : "#9b9a97";

  // Memoize animation constants to avoid recalculation
  const animationParams = useMemo(() => {
    const W = width;
    const H = height;
    const BASE_Y = H / 2;
    const FRAMES_PER_RAD = tempo;
    const SUB_STEPS = 3; // Reduced from 5 for better performance
    const DX_PER_RAD = 8 * (W / 200) * loopSpacing;
    const ACC_FACTOR = acceleration;

    // Loop geometry
    const MIN_R = Math.min((minLoopSize / 100) * H, H * 0.45);
    const MAX_R = Math.min((maxLoopSize / 100) * H, H * 0.45);
    const R_BASE = (MIN_R + MAX_R) / 2;
    const R_VAR = (MAX_R - MIN_R) / 2;
    const R_FREQ1 = 0.2;
    const R_FREQ2 = 0.1;

    // Trail control
    const TAIL_RADS = Math.max(3, tailLength * Math.min(1, W / 200));
    const PURGE_PAD_R = 5;

    // Start position
    const START_OFFSET = W * 0.95 - MAX_R;

    // Target FPS
    const TARGET_FPS = 60;
    const D_THETA_PER_SECOND = (Math.PI / FRAMES_PER_RAD) * TARGET_FPS;

    return {
      W,
      H,
      BASE_Y,
      FRAMES_PER_RAD,
      SUB_STEPS,
      DX_PER_RAD,
      ACC_FACTOR,
      MIN_R,
      MAX_R,
      R_BASE,
      R_VAR,
      R_FREQ1,
      R_FREQ2,
      TAIL_RADS,
      PURGE_PAD_R,
      START_OFFSET,
      D_THETA_PER_SECOND,
    };
  }, [
    width,
    height,
    tempo,
    minLoopSize,
    maxLoopSize,
    acceleration,
    tailLength,
    loopSpacing,
  ]);

  // Memoize modulation parameters
  const modulationParams = useMemo(
    () => ({
      modulationSpeed,
      modulationPhaseOffset,
      tempoModulation,
      accelerationModulation,
    }),
    [
      modulationSpeed,
      modulationPhaseOffset,
      tempoModulation,
      accelerationModulation,
    ],
  );

  // Handle visibility changes to pause animation when tab is backgrounded
  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", {
      willReadFrequently: false,
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) {
      return;
    }

    // Set up 2x oversampling for crisper rendering
    const scale = 2;
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.scale(scale, scale);

    // Performance optimizations
    ctx.imageSmoothingEnabled = false;

    // Extract memoized parameters
    const {
      W,
      H,
      BASE_Y,
      SUB_STEPS,
      DX_PER_RAD,
      ACC_FACTOR,
      MIN_R,
      R_BASE,
      R_VAR,
      R_FREQ1,
      R_FREQ2,
      TAIL_RADS,
      PURGE_PAD_R,
      START_OFFSET,
    } = animationParams;

    // ───────── CONTEXT ─────────
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = strokeColor || defaultStrokeColor;
    ctx.lineWidth = strokeWidth;

    // ───────── STATE ─────────
    let theta = 0; // global param (radians)
    let lastTime = performance.now(); // track last frame time
    const startTime = performance.now(); // track animation start time for modulation

    // Circular buffer for points to avoid array shift() GC pressure
    const BUFFER_SIZE = 1000; // Pre-allocate buffer size
    const pts: Array<{ x: number; y: number; t: number }> = new Array(
      BUFFER_SIZE,
    );
    let ptsStart = 0; // Start index in circular buffer
    let ptsEnd = 0; // End index in circular buffer
    let ptsCount = 0; // Number of valid points

    // Performance monitoring
    let frameBudgetExceeded = 0;
    const FRAME_BUDGET_MS = 16; // Target 60fps
    const ADAPTATION_THRESHOLD = 5; // Number of slow frames before adapting

    // Dirty rectangle tracking for optimized rendering
    let lastCamX = 0;

    // Radius function with dual‑sine flourish
    function radius(t: number): number {
      const mix =
        0.6 * Math.sin(R_FREQ1 * t) + 0.4 * Math.sin(R_FREQ2 * t + 1.1);
      return Math.max(MIN_R, R_BASE + R_VAR * mix);
    }

    function worldPoint(t: number) {
      const r = radius(t);
      return {
        x: t * DX_PER_RAD + r * Math.cos(t),
        y: BASE_Y - r * Math.sin(t),
        t,
      };
    }

    function tick(context: CanvasRenderingContext2D) {
      const frameStartTime = performance.now();
      const deltaTime = Math.min((frameStartTime - lastTime) / 1000, 0.1); // cap at 100ms
      lastTime = frameStartTime;

      // Calculate modulation value (starts at 0 when animation begins)
      const elapsedTime = (frameStartTime - startTime) / 1000; // Convert to seconds
      const modulationValue = Math.sin(
        2 * Math.PI * modulationParams.modulationSpeed * elapsedTime +
          modulationParams.modulationPhaseOffset,
      );

      // Apply modulation to parameters
      const modulatedTempo =
        tempo + modulationParams.tempoModulation * modulationValue;
      const modulatedAcceleration =
        ACC_FACTOR + modulationParams.accelerationModulation * modulationValue;

      // Calculate modulated D_THETA_PER_SECOND based on modulated tempo
      const modulatedDThetaPerSecond =
        (Math.PI / Math.max(1, modulatedTempo)) * 60;

      // Adaptive quality based on performance
      const adaptedSubSteps =
        frameBudgetExceeded > ADAPTATION_THRESHOLD
          ? Math.max(1, Math.floor(SUB_STEPS / 2))
          : SUB_STEPS;

      // Determine frame advance with gentle accel/decel, now time-based
      const dThetaFrame =
        modulatedDThetaPerSecond *
        deltaTime *
        (1 + modulatedAcceleration * -Math.sin(theta));
      const dSub = dThetaFrame / adaptedSubSteps;

      // Integrate sub‑steps
      for (let i = 0; i < adaptedSubSteps; i++) {
        theta += dSub;
        // Add to circular buffer
        pts[ptsEnd] = worldPoint(theta);
        ptsEnd = (ptsEnd + 1) % BUFFER_SIZE;
        if (ptsCount < BUFFER_SIZE) {
          ptsCount++;
        } else {
          ptsStart = (ptsStart + 1) % BUFFER_SIZE;
        }
      }

      // Define trailing cutoff in param‑space
      const tailTheta = theta - TAIL_RADS;

      // Remove super‑old points from circular buffer
      while (ptsCount > 0 && pts[ptsStart].t < tailTheta - PURGE_PAD_R) {
        ptsStart = (ptsStart + 1) % BUFFER_SIZE;
        ptsCount--;
      }

      // ───────── SMOOTH CAMERA MOTION ─────────
      // Camera follows the pen's baseline drift for smooth, constant motion
      // Start offset ensures pen begins near right edge
      const camX = theta * DX_PER_RAD - START_OFFSET;

      // ───────── DRAW ─────────
      // Calculate dirty region based on camera movement
      const camDelta = camX - lastCamX;
      lastCamX = camX;

      // Clear only the necessary region
      if (Math.abs(camDelta) < W) {
        // Small movement - clear only the dirty regions
        if (camDelta > 0) {
          // Moving right - clear left edge
          context.clearRect(0, 0, Math.ceil(camDelta) + 10, H);
        } else if (camDelta < 0) {
          // Moving left - clear right edge
          context.clearRect(
            W + Math.floor(camDelta) - 10,
            0,
            -camDelta + 10,
            H,
          );
        }
        // Clear the trail area
        context.clearRect(0, 0, W, H);
      } else {
        // Large movement or first frame - clear entire canvas
        context.clearRect(0, 0, W, H);
      }

      context.save();
      context.translate(-camX, 0);

      // Find start index for visible tail in circular buffer
      let visibleStart = ptsStart;
      let stepsFromStart = 0;
      while (stepsFromStart < ptsCount && pts[visibleStart].t < tailTheta) {
        visibleStart = (visibleStart + 1) % BUFFER_SIZE;
        stepsFromStart++;
      }

      // If first visible point is not exact parameter, interpolate for smooth tail
      let firstPoint;
      if (stepsFromStart === 0 || ptsCount === 0) {
        firstPoint = pts[ptsStart];
      } else if (stepsFromStart < ptsCount) {
        const prevIdx = (visibleStart - 1 + BUFFER_SIZE) % BUFFER_SIZE;
        const pPrev = pts[prevIdx];
        const pCurr = pts[visibleStart];
        const ratio = (tailTheta - pPrev.t) / (pCurr.t - pPrev.t);
        firstPoint = {
          x: pPrev.x + (pCurr.x - pPrev.x) * ratio,
          y: pPrev.y + (pCurr.y - pPrev.y) * ratio,
        };
      }

      if (firstPoint && ptsCount > 0) {
        context.beginPath();
        context.moveTo(firstPoint.x, firstPoint.y);
        // Draw from visible start to end of circular buffer
        let idx = visibleStart;
        for (let i = stepsFromStart; i < ptsCount; i++) {
          context.lineTo(pts[idx].x, pts[idx].y);
          idx = (idx + 1) % BUFFER_SIZE;
        }
        context.stroke();
      }
      context.restore();

      // Performance monitoring
      const frameEndTime = performance.now();
      const frameTime = frameEndTime - frameStartTime;

      if (frameTime > FRAME_BUDGET_MS) {
        frameBudgetExceeded++;
      } else if (frameBudgetExceeded > 0) {
        // Slowly recover when performance improves
        frameBudgetExceeded = Math.max(0, frameBudgetExceeded - 0.1);
      }

      // Only continue animation if tab is visible
      if (isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(() => tick(context));
      } else {
        // Check periodically when tab is hidden
        setTimeout(() => {
          if (isVisibleRef.current) {
            animationRef.current = requestAnimationFrame(() => tick(context));
          }
        }, 100);
      }
    }

    animationRef.current = requestAnimationFrame(() => tick(ctx));

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    animationParams,
    modulationParams,
    width,
    height,
    strokeWidth,
    strokeColor,
    defaultStrokeColor,
    tempo,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width,
        height,
        display: "block",
        ...style,
      }}
    />
  );
}
