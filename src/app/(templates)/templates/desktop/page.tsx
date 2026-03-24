"use client";

import { DesktopMenuBar } from "@/components/desktop-kit/DesktopMenuBar";
import { DesktopUI } from "@/components/desktop-kit/DesktopUI";
import { WindowChrome } from "@/components/desktop-kit/WindowChrome";

export default function DesktopTemplatePage() {
  return (
    <DesktopUI>
      <DesktopMenuBar appName="App" />

      {/* Window container - positioned below menu bar */}
      <div className="relative mt-7 flex-1">
        <WindowChrome
          resizable
          initialSize={{ width: 800, height: 600 }}
          minWidth={400}
          minHeight={300}
        >
          {/* Entire window is draggable - replace with your own drag handle if needed */}
          <WindowChrome.DragHandle className="flex flex-1 items-center justify-center p-8">
            <p className="text-secondary text-sm">
              Replace this with your prototype content
            </p>
          </WindowChrome.DragHandle>
        </WindowChrome>
      </div>
    </DesktopUI>
  );
}
