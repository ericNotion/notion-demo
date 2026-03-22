"use client";

import { Icon } from "@nds-icons";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { useAtom } from "jotai";
import { rainbowRoadAtom } from "./atoms";
import { cn } from "@/utils/cn";

export function RainbowRoadToggle() {
  const [isActive, setIsActive] = useAtom(rainbowRoadAtom);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "rainbow-road-toggle-btn",
        "flex h-8 items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all",
        "hover:bg-secondary-translucent",
        isActive && "bg-secondary-translucent",
      )}
      title={
        isActive
          ? "Disable Rainbow Road mode"
          : "Enable Rainbow Road mode (experimental)"
      }
    >
      <Icon
        icon={sparklesIcon}
        size={16}
        color={isActive ? "primary" : "tertiary"}
      />
      <span
        className={cn(
          "text-sm font-medium",
          isActive ? "text-primary" : "text-tertiary",
        )}
      >
        Rainbow Road
      </span>
    </button>
  );
}
