"use client";

import { useEffect, useState } from "react";

export function HalloweenToggle() {
  const [isHalloween, setIsHalloween] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("halloween-theme");
    const shouldEnable = stored === "true";
    setIsHalloween(shouldEnable);
    
    if (shouldEnable) {
      document.documentElement.classList.add("halloween");
      document.documentElement.style.colorScheme = "dark";
    }
  }, []);

  const toggleHalloween = () => {
    const newValue = !isHalloween;
    setIsHalloween(newValue);
    localStorage.setItem("halloween-theme", String(newValue));

    if (newValue) {
      document.documentElement.classList.add("halloween");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("halloween");
      document.documentElement.style.colorScheme = "light dark";
    }
  };

  return (
    <button
      onClick={toggleHalloween}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-500/30 bg-gray-900/90 text-3xl shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:border-orange-500/60 hover:bg-gray-900 hover:shadow-xl hover:shadow-orange-500/20"
      title={isHalloween ? "Disable Halloween theme" : "Enable Halloween theme"}
      aria-label={isHalloween ? "Disable Halloween theme" : "Enable Halloween theme"}
    >
      <span className="transition-transform group-hover:scale-110">
        {isHalloween ? "🎃" : "👻"}
      </span>
    </button>
  );
}
