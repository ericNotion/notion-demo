import { atomWithStorage } from "jotai/utils";

/**
 * Halloween theme state atom
 * Persists to localStorage so the theme preference is remembered
 */
export const halloweenThemeAtom = atomWithStorage<boolean>(
  "notion-halloween-theme",
  false
);
