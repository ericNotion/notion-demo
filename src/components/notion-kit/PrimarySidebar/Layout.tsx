"use client";

import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { primarySidebarAtom, primarySidebarWidthAtom } from "./atoms";

const MIN_WIDTH_PX = 200;
const MAX_WIDTH_PX = 480;

// -----------------------------------------------------------------------------
// Global cursor management (prevents cursor flickering during fast drags)
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

interface PrimarySidebarLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  minWidth?: number;
}

export function PrimarySidebarLayout({
  sidebar,
  children,
  className,
  minWidth = MIN_WIDTH_PX,
}: PrimarySidebarLayoutProps) {
  const [sidebarOpen] = useAtom(primarySidebarAtom);
  const [sidebarWidth, setSidebarWidth] = useAtom(primarySidebarWidthAtom);
  const [isResizing, setIsResizing] = useState(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

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

  // Manage event listeners and global cursor during resize
  useEffect(() => {
    if (!isResizing) return;

    const controller = new AbortController();
    const options = { capture: true, signal: controller.signal };

    document.addEventListener("mousemove", handleMouseMove, options);
    document.addEventListener("mouseup", handleMouseUp, options);

    // Set global cursor to prevent flickering
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
      {/* Sidebar */}
      <div
        className="bg-secondary flex-shrink-0 overflow-hidden"
        style={{
          width: sidebarOpen ? sidebarWidth : 0,
          pointerEvents: isResizing ? "none" : undefined,
        }}
      >
        <div className="flex h-full flex-col" style={{ width: sidebarWidth }}>
          {sidebar}
        </div>
      </div>

      {/* Resize handle */}
      {sidebarOpen && (
        <div
          onMouseDown={handleMouseDown}
          className={cn(
            "hover:bg-accent-blue relative w-0 flex-shrink-0 cursor-col-resize transition-colors hover:w-px",
            isResizing && "bg-accent-blue w-px",
          )}
          style={{
            touchAction: "none",
          }}
        >
          {/* Larger hit area for easier grabbing */}
          <div className="absolute inset-y-0 -right-1 -left-1" />
        </div>
      )}

      {/* Main content */}
      <div
        className="flex min-w-0 flex-1 flex-col"
        style={{ pointerEvents: isResizing ? "none" : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
