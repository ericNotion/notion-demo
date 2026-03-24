"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import { useEffect } from "react";
import { visualizerDataAtom } from "./atoms";

export function BeatVisualizer() {
  const [data, setData] = useAtom(visualizerDataAtom);

  useEffect(() => {
    // Simulate visualizer data changes
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((val) => {
          const change = (Math.random() - 0.5) * 0.3;
          const newVal = Math.max(0, Math.min(1, val + change));
          return newVal * 0.9; // Decay
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [setData]);

  return (
    <div className="flex h-32 items-end justify-center gap-1 rounded-lg border border-purple-600/20 bg-purple-primary/5 p-4">
      {data.map((value, i) => (
        <motion.div
          key={i}
          className={cn(
            "w-full rounded-t-sm",
            i % 4 === 0 ? "bg-purple-primary" : "bg-blue-primary"
          )}
          style={{
            height: `${Math.max(2, value * 100)}%`,
            opacity: 0.6 + value * 0.4,
          }}
          animate={{
            height: `${Math.max(2, value * 100)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      ))}
    </div>
  );
}
