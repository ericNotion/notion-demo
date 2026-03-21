"use client";

import { useEffect } from "react";
import { PlaygroundSwitch } from "@/components/playground-kit/switch";
import { Icon } from "@nds-icons";
import { sunIcon } from "@nds-icons/sun/default.icon";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkModeAtom = atomWithStorage<boolean>(
  "eric-nc-dark-mode",
  false,
  undefined,
  { getOnInit: true },
);

const isInitializedAtom = atom(false);

export function DarkModeToggle() {
  const [isDark, setIsDark] = useAtom(darkModeAtom);
  const [isInitialized, setIsInitialized] = useAtom(isInitializedAtom);

  useEffect(() => {
    if (!isInitialized) {
      // On first load, check system preference if no stored value
      const stored = localStorage.getItem("eric-nc-dark-mode");
      if (stored === null) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        setIsDark(prefersDark);
      }
      setIsInitialized(true);
    }

    // Apply dark mode by setting both color-scheme and dark class
    // color-scheme: used by light-dark() CSS function
    // .dark class: used by Tailwind dark: variant
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, isInitialized, setIsDark, setIsInitialized]);

  return (
    <div className="flex items-center gap-2 px-2 py-1.5">
      <Icon icon={sunIcon} size={16} color="secondary" />
      <PlaygroundSwitch
        checked={isDark}
        onCheckedChange={setIsDark}
        aria-label="Toggle dark mode"
      />
    </div>
  );
}
