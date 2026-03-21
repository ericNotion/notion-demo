"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

interface ShimmeringTextProps extends HTMLMotionProps<"div"> {
  text: string;
  duration?: number;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
  pauseDuration?: number;
}

export function ShimmeringText({
  text,
  duration = 2,
  wave = false,
  color = "#6b7280",
  shimmeringColor = "#ffffff",
  pauseDuration = 0,
  className,
  ...props
}: ShimmeringTextProps) {
  return (
    <motion.div
      className={className}
      style={{
        display: "inline-flex",
        overflow: "hidden",
      }}
      {...props}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
          animate={{
            color: [color, shimmeringColor, color],
            ...(wave && {
              transform: [
                "translateY(0px) scale(1) rotateX(0deg)",
                "translateY(-2px) scale(1.05) rotateX(5deg)",
                "translateY(0px) scale(1) rotateX(0deg)",
              ],
            }),
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatDelay: pauseDuration,
            delay: (i * duration) / text.length,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
