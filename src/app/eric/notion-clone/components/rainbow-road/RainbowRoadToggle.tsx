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

  return (
    <div className="flex items-center gap-2 px-2">
      <motion.div
        animate= rotate: isRainbowMode ? 360 : 0 
        transition= duration: 0.5 
      >
        <Icon
          icon={isRainbowMode ? starIcon : sparklesIcon}
          size={20}
          color={isRainbowMode ? "blue" : "secondary"}
        />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <span className="text-body text-primary font-medium">
          Rainbow Road
        </span>
        <span className="text-caption text-tertiary">
          {isRainbowMode ? "Cosmic mode active \uD83C\uDF08" : "Enable cosmic theme"}
        </span>
      </div>
      <Switch checked={isRainbowMode} onCheckedChange={setIsRainbowMode} />
    </div>
  );
}
