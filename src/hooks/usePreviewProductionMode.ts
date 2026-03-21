"use client";

import { previewProductionModeAtom } from "@/root/atoms/previewProductionModeAtom";
import { isDevelopment, isProduction as isRealProduction } from "@/utils/env";
import { useAtom, useAtomValue } from "jotai";

/**
 * Hook to check if we should behave as if in production mode.
 * Returns true if either:
 * - We're actually in production
 * - We're in dev but preview production mode is enabled
 */
export function useIsProduction(): boolean {
  const previewMode = useAtomValue(previewProductionModeAtom);

  // If we're actually in production, always return true
  if (isRealProduction()) {
    return true;
  }

  // In development, check the preview override
  return previewMode;
}

/**
 * Hook to manage the preview production mode toggle.
 * Only functional in development mode.
 */
export function usePreviewProductionMode() {
  const [enabled, setEnabled] = useAtom(previewProductionModeAtom);
  const canToggle = isDevelopment();

  function toggle() {
    if (canToggle) {
      setEnabled((prev) => !prev);
    }
  }

  return {
    enabled: canToggle && enabled,
    canToggle,
    toggle,
    setEnabled: canToggle ? setEnabled : () => {},
  };
}
