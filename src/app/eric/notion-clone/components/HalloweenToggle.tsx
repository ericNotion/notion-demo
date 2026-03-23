"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "notion-clone-halloween";

export function HalloweenToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setEnabled(true);
      document.documentElement.classList.add("halloween", "dark");
      document.documentElement.style.colorScheme = "dark";
    }
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      document.documentElement.classList.add("halloween", "dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      document.documentElement.classList.remove("halloween", "dark");
      document.documentElement.style.colorScheme = "";
      localStorage.setItem(STORAGE_KEY, "false");
    }
  };

  if (!mounted) return null;

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 16,
    right: 16,
    zIndex: 9999,
    fontSize: 24,
    background: enabled
      ? "rgba(255, 107, 26, 0.15)"
      : "rgba(0, 0, 0, 0.05)",
    border: enabled
      ? "1px solid rgba(255, 107, 26, 0.3)"
      : "1px solid rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    padding: "8px",
    borderRadius: 12,
    transition: "all 0.2s ease",
    transform: enabled ? "scale(1.1)" : "scale(1)",
    filter: enabled
      ? "drop-shadow(0 0 8px rgba(255, 107, 26, 0.6))"
      : "none",
    lineHeight: 1,
  };

  return (
    <button
      onClick={toggle}
      title={enabled ? "Disable Halloween theme" : "Enable Halloween theme"}
      aria-label={
        enabled ? "Disable Halloween theme" : "Enable Halloween theme"
      }
      style={buttonStyle}
    >
      🎃
    </button>
  );
}
