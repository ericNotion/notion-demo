"use client";

import { useEffect } from "react";

/**
 * RainbowRoadThemeProvider - Applies the mild rainbow road theme
 *
 * This component applies the `.rainbow-road` class to the document element
 * and sets the color scheme to dark. It cleans up on unmount.
 */
export function RainbowRoadThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply theme class and dark mode to document element
    const root = document.documentElement;

    // Store original values for cleanup
    const originalClass = root.className;
    const originalColorScheme = root.style.colorScheme;

    // Apply rainbow road theme
    root.classList.add("rainbow-road", "dark");
    root.style.colorScheme = "dark";

    // Cleanup on unmount
    return () => {
      root.className = originalClass;
      root.style.colorScheme = originalColorScheme;
    };
  }, []);

  return <>{children}</>;
}
