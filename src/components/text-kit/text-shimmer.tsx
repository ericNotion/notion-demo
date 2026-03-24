"use client";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import React, { useMemo, type JSX } from "react";

type TextShimmerProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
  baseColor?: string;
  shimmerColor?: string;
};

function TextShimmerComponent({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  baseColor = "#6b7280",
  shimmerColor = "#ffffff",
}: TextShimmerProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements,
  );

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        className,
      )}
      animate={{
        backgroundPosition: ["200% center", "-100% center"],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          backgroundImage: `linear-gradient(90deg,
            ${baseColor} 0%,
            ${baseColor} ${40 - dynamicSpread}%,
            ${shimmerColor} 50%,
            ${baseColor} ${60 + dynamicSpread}%,
            ${baseColor} 100%)`,
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

export const TextShimmer = React.memo(TextShimmerComponent);
