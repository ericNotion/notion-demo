"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { slipperySidebarOpenAtom, slipperySidebarWidthAtom } from "./atoms";

const MIN_WIDTH_PX = 290;
const MAX_WIDTH_PX = 480;

let globalStyleElement: HTMLStyleElement | null = null;

function setGlobalCursor(cursor: string | null) {
  if (cursor) {
    if (!globalStyleElement) {
      globalStyleElement = document.createElement("style");
      document.head.appendChild(globalStyleElement);
    }
    globalStyleElement.textContent = `* { cursor: ${cursor} !important; }`;
  } else {
    if (globalStyleElement) {
      globalStyleElement.remove();
      globalStyleElement = null;
    }
  }
}

interface SlipperySidebarLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  minWidth?: number;
}

export function SlipperySidebarLayout({
  sidebar,
  children,
  className,
  minWidth = MIN_WIDTH_PX,
}: SlipperySidebarLayoutProps) {
  const [sidebarOpen] = useAtom(slipperySidebarOpenAtom);
  const [sidebarWidth, setSidebarWidth] = useAtom(slipperySidebarWidthAtom);
  const [isResizing, setIsResizing] = useState(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  useEffect(() => {
    if (sidebarWidth < minWidth) {
      setSidebarWidth(minWidth);
    }
  }, [sidebarWidth, minWidth, setSidebarWidth]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      startXRef.current = e.clientX;
      startWidthRef.current = sidebarWidth;
    },
    [sidebarWidth],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const delta = e.clientX - startXRef.current;
      const newWidth = Math.max(
        minWidth,
        Math.min(MAX_WIDTH_PX, startWidthRef.current + delta),
      );
      setSidebarWidth(newWidth);
    },
    [setSidebarWidth, minWidth],
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const controller = new AbortController();
    const options = { capture: true, signal: controller.signal };

    document.addEventListener("mousemove", handleMouseMove, options);
    document.addEventListener("mouseup", handleMouseUp, options);
    setGlobalCursor("col-resize");

    return () => {
      controller.abort();
      setGlobalCursor(null);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      data-resizing={isResizing || undefined}
      className={cn("flex flex-1 overflow-hidden", className)}
    >
      <div
        className="bg-secondary shrink-0 overflow-hidden"
        style={{
          width: sidebarOpen ? sidebarWidth : 0,
          pointerEvents: isResizing ? "none" : undefined,
        }}
      >
        <div className="flex h-full flex-col" style={{ width: sidebarWidth }}>
          {sidebar}
        </div>
      </div>

      {sidebarOpen && (
        <div
          onMouseDown={handleMouseDown}
          className="group/resize relative w-0 shrink-0 cursor-col-resize"
          style={{ touchAction: "none" }}
        >
          <div className="absolute inset-y-0 -right-1.5 -left-1.5 z-10" />
          <div
            className={cn(
              "bg-accent-blue pointer-events-none absolute inset-y-0 left-0 w-px transition-opacity",
              isResizing
                ? "opacity-100"
                : "opacity-0 group-hover/resize:opacity-100",
            )}
          />
        </div>
      )}

      <div
        className="flex min-w-0 flex-1 flex-col"
        style={{ pointerEvents: isResizing ? "none" : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
