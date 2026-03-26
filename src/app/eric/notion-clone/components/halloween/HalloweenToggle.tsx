"use client";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { halloweenThemeAtom } from "./atoms";

/**
 * Halloween Theme Toggle Button
 * 
 * A floating toggle button that enables/disables the Halloween theme.
 * When enabled, adds the `.halloween` class to the document root and
 * forces dark color-scheme for proper theme application.
 */
export function HalloweenToggle() {
  const [isHalloweenEnabled, setIsHalloweenEnabled] = useAtom(halloweenThemeAtom);

  // Apply/remove theme class and color-scheme when state changes
  useEffect(() => {
    if (isHalloweenEnabled) {
      document.documentElement.classList.add("halloween");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("halloween");
      // Restore original color-scheme
      document.documentElement.style.colorScheme = "";
    }
  }, [isHalloweenEnabled]);

  const handleToggle = () => {
    setIsHalloweenEnabled(!isHalloweenEnabled);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-lg bg-elevated shadow-md-outline transition-all duration-200 hover:scale-110 active:scale-95"
      title={isHalloweenEnabled ? "Disable Halloween Theme" : "Enable Halloween Theme"}
      aria-label={isHalloweenEnabled ? "Disable Halloween Theme" : "Enable Halloween Theme"}
      style={{
        fontSize: "28px",
        background: isHalloweenEnabled 
          ? "linear-gradient(135deg, #ff8c00 0%, #8b3fa0 100%)"
          : undefined,
      }}
    >
      <span
        className="transition-transform duration-300"
        style={{
          transform: isHalloweenEnabled ? "scale(1.2) rotate(10deg)" : "scale(1)",
          filter: isHalloweenEnabled ? "drop-shadow(0 0 8px rgba(255, 140, 0, 0.6))" : undefined,
        }}
      >
        🎃
      </span>
    </button>
  );
}
