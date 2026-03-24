import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const DESKTOP_WALLPAPERS = [
  "/img/desktop/raycast.jpeg",
  "/img/desktop/gradient-blur.jpeg",
  "/img/desktop/caustics.png",
] as const;

export const DEFAULT_WALLPAPER = DESKTOP_WALLPAPERS[0];

export const wallpaperAtom = atomWithStorage<string>(
  "desktop-wallpaper",
  DEFAULT_WALLPAPER,
);

type WallpaperBrightness = "light" | "dark" | "unknown";
export const wallpaperBrightnessAtom = atom<WallpaperBrightness>("unknown");
