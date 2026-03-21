"use client";

import { cn } from "@/utils/cn";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import {
  DESKTOP_WALLPAPERS,
  wallpaperAtom,
  wallpaperBrightnessAtom,
} from "./desktopAtoms";

interface DesktopMenuBarProps {
  appName?: string;
  menuItems?: string[];
  showDateTime?: boolean;
  className?: string;
}

const DEFAULT_MENU_ITEMS = [
  "File",
  "Edit",
  "View",
  "History",
  "Window",
  "Help",
];

/**
 * macOS-style menu bar with app name, menu items, and date/time display.
 * Clicking the date/time cycles through available wallpapers.
 * Text color automatically adjusts based on wallpaper brightness.
 */
export function DesktopMenuBar({
  appName = "Notion",
  menuItems = DEFAULT_MENU_ITEMS,
  showDateTime = true,
  className,
}: DesktopMenuBarProps) {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  const [wallpaper, setWallpaper] = useAtom(wallpaperAtom);
  const brightness = useAtomValue(wallpaperBrightnessAtom);

  const isLightBackground = brightness === "light";

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      setDateTime({
        date: now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        time: now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    }

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  function cycleWallpaper() {
    const currentIndex = DESKTOP_WALLPAPERS.indexOf(
      wallpaper as (typeof DESKTOP_WALLPAPERS)[number],
    );
    const nextIndex = (currentIndex + 1) % DESKTOP_WALLPAPERS.length;
    setWallpaper(DESKTOP_WALLPAPERS[nextIndex]);
  }

  return (
    <div
      data-slot="desktop-menu-bar"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex h-7 items-center justify-between px-3.5 select-none",
        isLightBackground ? "text-black" : "text-white",
        className,
      )}
    >
      {/* Left side */}
      <div
        className={cn(
          "flex items-center gap-5 text-[13px]",
          !isLightBackground && "text-shadow-sm",
        )}
      >
        <div className="text-[20px]"></div>
        <div className="font-bold">{appName}</div>
        {menuItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      {/* Right side */}
      {showDateTime && (
        <div className="flex items-center gap-4 text-[13px]">
          <SystemStatusIcon isLight={isLightBackground} />
          <div
            className={cn(
              "flex cursor-pointer gap-1 font-normal transition-opacity hover:opacity-70",
              !isLightBackground && "text-shadow-sm",
            )}
            onClick={cycleWallpaper}
          >
            <span>{dateTime.date}</span>
            <span>{dateTime.time}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function SystemStatusIcon({ isLight }: { isLight: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00195 11.2949C2.53711 11.2949 2.11523 11.1934 1.73633 10.9902C1.35742 10.791 1.05469 10.5098 0.828125 10.1465C0.605469 9.78711 0.494141 9.36719 0.494141 8.88672C0.494141 8.40625 0.605469 7.98633 0.828125 7.62695C1.05469 7.26367 1.35742 6.98242 1.73633 6.7832C2.11523 6.58008 2.53711 6.47852 3.00195 6.47852H9.16016C9.625 6.47852 10.0469 6.58008 10.4258 6.7832C10.8047 6.98242 11.1055 7.26367 11.3281 7.62695C11.5547 7.98633 11.668 8.40625 11.668 8.88672C11.668 9.36719 11.5547 9.78711 11.3281 10.1465C11.1055 10.5098 10.8047 10.791 10.4258 10.9902C10.0469 11.1934 9.625 11.2949 9.16016 11.2949H3.00195ZM9.3125 10.4102C9.58984 10.4102 9.84375 10.3418 10.0742 10.2051C10.3047 10.0684 10.4883 9.88281 10.625 9.64844C10.7617 9.41406 10.832 9.15625 10.8359 8.875C10.8359 8.59766 10.7676 8.3457 10.6309 8.11914C10.4941 7.88867 10.3105 7.70508 10.0801 7.56836C9.84961 7.43164 9.59375 7.36328 9.3125 7.36328C9.03125 7.36328 8.77539 7.43164 8.54492 7.56836C8.31445 7.70508 8.13086 7.88867 7.99414 8.11914C7.86133 8.34961 7.79492 8.60352 7.79492 8.88086C7.79492 9.16211 7.86133 9.41797 7.99414 9.64844C8.13086 9.87891 8.31445 10.0625 8.54492 10.1992C8.77539 10.3359 9.03125 10.4062 9.3125 10.4102ZM3.24219 5.57617C2.73828 5.57617 2.27734 5.46484 1.85938 5.24219C1.44531 5.01953 1.11328 4.70703 0.863281 4.30469C0.617188 3.90234 0.494141 3.43555 0.494141 2.9043C0.494141 2.37305 0.617188 1.90625 0.863281 1.50391C1.11328 1.10156 1.44531 0.789062 1.85938 0.566406C2.27734 0.34375 2.73828 0.232422 3.24219 0.232422H8.91992C9.42383 0.232422 9.88281 0.34375 10.2969 0.566406C10.7148 0.789062 11.0469 1.10156 11.293 1.50391C11.543 1.90625 11.668 2.37305 11.668 2.9043C11.668 3.43555 11.543 3.90234 11.293 4.30469C11.0469 4.70703 10.7148 5.01953 10.2969 5.24219C9.88281 5.46484 9.42383 5.57617 8.91992 5.57617H3.24219ZM3.24219 4.69141H8.91992C9.24805 4.69141 9.55273 4.61719 9.83398 4.46875C10.1191 4.31641 10.3477 4.10742 10.5195 3.8418C10.6953 3.57227 10.7832 3.25977 10.7832 2.9043C10.7832 2.54883 10.6953 2.23828 10.5195 1.97266C10.3477 1.70312 10.1191 1.49414 9.83398 1.3457C9.55273 1.19336 9.24805 1.11719 8.91992 1.11719H3.24219C2.91406 1.11719 2.60742 1.19336 2.32227 1.3457C2.04102 1.49414 1.8125 1.70312 1.63672 1.97266C1.46484 2.23828 1.37891 2.54883 1.37891 2.9043C1.37891 3.25977 1.46484 3.57227 1.63672 3.8418C1.8125 4.10742 2.04102 4.31641 2.32227 4.46875C2.60742 4.61719 2.91406 4.69141 3.24219 4.69141ZM3.24219 4.29297C2.98438 4.29297 2.75 4.23047 2.53906 4.10547C2.32812 3.98047 2.16016 3.8125 2.03516 3.60156C1.91406 3.39062 1.85352 3.15625 1.85352 2.89844C1.85352 2.64453 1.91406 2.41211 2.03516 2.20117C2.16016 1.99023 2.32812 1.82227 2.53906 1.69727C2.75 1.57227 2.98438 1.50977 3.24219 1.50977C3.5 1.50977 3.73438 1.57227 3.94531 1.69727C4.16016 1.81836 4.33008 1.98438 4.45508 2.19531C4.58008 2.40234 4.64062 2.63477 4.63672 2.89258C4.63672 3.15039 4.57227 3.38672 4.44336 3.60156C4.31836 3.8125 4.15039 3.98242 3.93945 4.11133C3.73242 4.23633 3.5 4.29688 3.24219 4.29297Z"
        fill={isLight ? "black" : "white"}
      />
    </svg>
  );
}
