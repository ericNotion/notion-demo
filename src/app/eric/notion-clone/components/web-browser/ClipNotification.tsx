"use client";

import { Icon } from "@nds-icons";
import { checkmarkIcon } from "@nds-icons/checkmark/default.icon";
import { linkIcon } from "@nds-icons/link/default.icon";
import { motion, AnimatePresence } from "motion/react";

const toastInitial = { opacity: 0, y: -20 };
const toastAnimate = { opacity: 1, y: 0 };
const toastTransition = { duration: 0.3 };

interface ClipNotificationProps {
  visible: boolean;
  url: string;
  type?: "clip" | "quote" | "summary";
}

export function ClipNotification({
  visible,
  url,
  type = "clip",
}: ClipNotificationProps) {
  const getMessage = () => {
    switch (type) {
      case "quote":
        return "Quote added to page";
      case "summary":
        return "Summary added to page";
      default:
        return "Clipped to page";
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={toastInitial}
          animate={toastAnimate}
          exit={toastInitial}
          transition={toastTransition}
          className="pointer-events-none fixed left-1/2 top-16 z-50 -translate-x-1/2"
        >
          <div className="flex items-center gap-3 rounded-lg border border-primary bg-elevated px-4 py-3 shadow-lg-outline">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-green-primary/10">
              <Icon icon={checkmarkIcon} color="green-primary" size="sm" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-body font-medium text-primary">
                {getMessage()}
              </div>
              <div className="flex items-center gap-1.5 text-caption text-tertiary">
                <Icon icon={linkIcon} size="sm" />
                <span className="truncate">{url}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
