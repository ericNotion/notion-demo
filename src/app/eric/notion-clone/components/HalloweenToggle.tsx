"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

// Atom to persist Halloween theme state
export const halloweenModeAtom = atomWithStorage<boolean>(
  "halloween-mode",
  false
);

export function HalloweenToggle() {
  const [isHalloweenMode, setIsHalloweenMode] = useAtom(halloweenModeAtom);

  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (isHalloweenMode) {
      htmlElement.classList.add("halloween");
      htmlElement.style.colorScheme = "dark";
    } else {
      htmlElement.classList.remove("halloween");
      // Restore original color-scheme (light dark for light-dark() function)
      htmlElement.style.colorScheme = "light dark";
    }
  }, [isHalloweenMode]);

  return (
    <button
      onClick={() => setIsHalloweenMode(!isHalloweenMode)}
      className="flex h-8 w-8 items-center justify-center rounded-md transition-all hover:bg-[var(--background-color-tertiary)] active:scale-95"
      title={isHalloweenMode ? "Disable Halloween mode" : "Enable Halloween mode"}
      aria-label={isHalloweenMode ? "Disable Halloween mode" : "Enable Halloween mode"}
    >
      <span className="text-xl leading-none">
        {isHalloweenMode ? "🎃" : "🎃"}
      </span>
    </button>
  );
}
