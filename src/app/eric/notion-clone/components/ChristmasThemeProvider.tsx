"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "eric-notion-clone-christmas-theme";

export function ChristmasThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChristmasTheme, setIsChristmasTheme] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsChristmasTheme(true);
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(STORAGE_KEY, String(isChristmasTheme));
    }
  }, [isChristmasTheme, isMounted]);

  const toggleTheme = () => {
    setIsChristmasTheme((prev) => !prev);
  };

  return (
    <div className={isChristmasTheme ? "christmas-theme" : ""}>
      {children}

      {/* Snowflakes - only render when theme is active */}
      {isChristmasTheme && (
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❄</div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={toggleTheme}
        className="christmas-theme-toggle"
        aria-label={
          isChristmasTheme
            ? "Disable Christmas theme"
            : "Enable Christmas theme"
        }
        title={
          isChristmasTheme
            ? "Disable Christmas theme"
            : "Enable Christmas theme"
        }
      >
        🎄
      </button>
    </div>
  );
}
