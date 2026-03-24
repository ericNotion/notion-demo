"use client";

import { cn } from "@/utils/cn";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  DEFAULT_WALLPAPER,
  wallpaperAtom,
  wallpaperBrightnessAtom,
} from "./desktopAtoms";
import { useWallpaperBrightness } from "./useWallpaperBrightness";

interface DesktopUIProps {
  children: React.ReactNode;
  wallpaper?: string;
  className?: string;
}

/**
 * Full-bleed desktop environment wrapper.
 * Prevents overscrolling and provides a wallpaper background.
 * If no wallpaper prop is provided, uses the shared wallpaper state.
 * Automatically detects wallpaper brightness for menu bar text color.
 */
export function DesktopUI({ children, wallpaper, className }: DesktopUIProps) {
  const sharedWallpaper = useAtomValue(wallpaperAtom);
  const activeWallpaper = wallpaper ?? sharedWallpaper ?? DEFAULT_WALLPAPER;
  const brightness = useWallpaperBrightness(activeWallpaper);
  const setBrightness = useSetAtom(wallpaperBrightnessAtom);

  // Sync brightness to atom so DesktopMenuBar can read it
  useEffect(() => {
    setBrightness(brightness);
  }, [brightness, setBrightness]);

  useEffect(() => {
    // Store original values
    const originalHtmlBg = document.documentElement.style.backgroundColor;
    const originalBodyBg = document.body.style.backgroundColor;
    const originalHtmlOverscroll =
      document.documentElement.style.overscrollBehavior;
    const originalBodyOverscroll = document.body.style.overscrollBehavior;
    const originalBodyOverflow = document.body.style.overflow;

    // Apply desktop styles
    document.documentElement.style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";

    // Cleanup on unmount
    return () => {
      document.documentElement.style.backgroundColor = originalHtmlBg;
      document.body.style.backgroundColor = originalBodyBg;
      document.documentElement.style.overscrollBehavior =
        originalHtmlOverscroll;
      document.body.style.overscrollBehavior = originalBodyOverscroll;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  return (
    <main
      data-slot="desktop-ui"
      className={cn(
        "flex h-svh flex-col overflow-hidden overscroll-none bg-black",
        className,
      )}
      style={{
        backgroundImage: `url('${activeWallpaper}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-20 w-full bg-linear-to-b from-black/5 to-transparent" />
      {children}
    </main>
  );
}
