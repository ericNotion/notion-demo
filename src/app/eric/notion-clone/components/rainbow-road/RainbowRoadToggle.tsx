"use client";

import { Switch } from "@/components/playground-kit/Switch";
import { Icon } from "@nds-icons";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { starIcon } from "@nds-icons/star/fill.icon";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import { rainbowRoadModeAtom } from "../../atoms";

export function RainbowRoadToggle() {
  const [isRainbowMode, setIsRainbowMode] = useAtom(rainbowRoadModeAtom);

  const iconAnimation = { rotate: isRainbowMode ? 360 : 0 };
  const iconTransition = { duration: 0.5 };

  return (
    <div className="flex items-center gap-2 px-2">
      <motion.div animate={iconAnimation} transition={iconTransition}>
        <Icon
          icon={isRainbowMode ? starIcon : sparklesIcon}
          size={20}
          color={isRainbowMode ? "blue" : "secondary"}
        />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <span className="text-primary text-body font-medium">
          Rainbow Road
        </span>
        <span className="text-tertiary text-caption">
          {isRainbowMode ? "Cosmic mode active 🌈" : "Enable cosmic theme"}
        </span>
      </div>
      <Switch checked={isRainbowMode} onCheckedChange={setIsRainbowMode} />
    </div>
  );
}
