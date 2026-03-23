"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { WebBrowserPanel } from "./WebBrowserPanel";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { dragHandleIcon } from "@nds-icons/dragHandle/default.icon";

interface WebBrowserLayoutProps {
  children: React.ReactNode;
}

export function WebBrowserLayout({ children }: WebBrowserLayoutProps) {
  const [panelWidth, setPanelWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showPanel, setShowPanel] = useState(true);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      const newWidth = ((rect.right - e.clientX) / rect.width) * 100;
      setPanelWidth(Math.max(30, Math.min(70, newWidth)));
    }
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-secondary"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Left Side - Notion Page */}
      <motion.div
        className="flex flex-col overflow-hidden bg-primary"
        style={{ width: showPanel ? `${100 - panelWidth}%` : "100%" }}
        layout
      >
        {children}
      </motion.div>

      {showPanel && (
        <>
          {/* Resizable Divider */}
          <div
            className={cn(
              "group relative flex w-1 cursor-col-resize items-center justify-center bg-secondary transition-colors hover:bg-blue-primary/20",
              isDragging && "bg-blue-primary/20"
            )}
            onMouseDown={handleMouseDown}
          >
            <div
              className={cn(
                "absolute flex h-12 w-4 items-center justify-center rounded-md bg-secondary opacity-0 shadow-sm-outline transition-opacity group-hover:opacity-100",
                isDragging && "opacity-100"
              )}
            >
              <Icon icon={dragHandleIcon} color="tertiary" size="sm" />
            </div>
          </div>

          {/* Right Side - Browser Panel */}
          <motion.div
            className="flex flex-col overflow-hidden"
            style={{ width: `${panelWidth}%` }}
            layout
          >
            <WebBrowserPanel onClose={() => setShowPanel(false)} />
          </motion.div>
        </>
      )}
    </div>
  );
}
