"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type CollapsibleProps = {
  expanded: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  direction?: "vertical" | "horizontal";
};

export function Collapsible({
  expanded,
  children,
  className,
  duration = 0.15,
  direction = "vertical",
}: CollapsibleProps) {
  const isVertical = direction === "vertical";
  const sizeKey = isVertical ? "height" : "width";
  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, [sizeKey]: 0 } as any}
          animate={{ opacity: 1, [sizeKey]: "auto" } as any}
          exit={{ opacity: 0, [sizeKey]: 0 } as any}
          transition={{ duration, ease: "easeInOut" }}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
