"use client";

import { useAtom } from "jotai";
import { useEffect, type ReactNode } from "react";
import { rainbowRoadAtom } from "./atoms";

export function RainbowRoadProvider({ children }: { children: ReactNode }) {
  const [isRainbowRoad] = useAtom(rainbowRoadAtom);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isRainbowRoad) {
      // Add rainbow-road class to root
      htmlElement.classList.add("rainbow-road-active");
      // Force dark mode
      htmlElement.classList.add("dark");
      htmlElement.style.colorScheme = "dark";
    } else {
      // Remove rainbow-road class
      htmlElement.classList.remove("rainbow-road-active");
      // Restore default dark mode preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (prefersDark) {
        htmlElement.classList.add("dark");
        htmlElement.style.colorScheme = "dark";
      } else {
        htmlElement.classList.remove("dark");
        htmlElement.style.colorScheme = "light";
      }
    }

    return () => {
      // Cleanup on unmount
      htmlElement.classList.remove("rainbow-road-active");
    };
  }, [isRainbowRoad]);

  return <>{children}</>;
}
