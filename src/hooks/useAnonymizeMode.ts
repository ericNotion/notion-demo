"use client";

import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { anonymizeModeAtom } from "@/root/atoms/anonymizeModeAtom";
import { obscureTextSeeded } from "@/utils/obscureText";
import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";

/**
 * Hook for anonymize mode functionality.
 * Returns the current state and a helper to obscure text.
 * Automatically disables when not in production mode.
 */
export function useAnonymizeMode() {
  const [anonymizeEnabled, setAnonymizeEnabled] = useAtom(anonymizeModeAtom);
  const isProduction = useIsProduction();

  // Reset anonymize mode when leaving production
  useEffect(() => {
    if (!isProduction && anonymizeEnabled) {
      setAnonymizeEnabled(false);
    }
  }, [isProduction, anonymizeEnabled, setAnonymizeEnabled]);

  // Only enable if both the atom is true AND we're in production
  const enabled = isProduction && anonymizeEnabled;

  return useMemo(
    () => ({
      enabled,
      obscure: (text: string) => (enabled ? obscureTextSeeded(text) : text),
    }),
    [enabled],
  );
}
