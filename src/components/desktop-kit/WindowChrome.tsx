"use client";

import { IconButton } from "@/components/ui/icon-button";
import { sidebarLeftIcon } from "@/nds-icons/src/sidebarLeft/default.icon";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------

interface WindowChromeContextValue {
  isDragging: boolean;
  isResizing: boolean;
  position: { x: number; y: number } | null;
  size: { width: number; height: number } | null;
  startDrag: (e: React.MouseEvent) => void;
}

const WindowChromeContext = createContext<WindowChromeContextValue | null>(
  null,
);

/**
 * Hook to access WindowChrome state and controls from child components.
 * Must be used within a WindowChrome component.
 */
function useWindowChrome() {
  const context = useContext(WindowChromeContext);
  if (!context) {
    throw new Error("useWindowChrome must be used within a WindowChrome");
  }
  return context;
}

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface WindowChromeProps {
  children: React.ReactNode;
  /** Additional class names for the window */
  className?: string;
  showTrafficLights?: boolean;
  /** Position offset of traffic lights from top-left corner (default: { x: 10, y: 10 }) */
  trafficLightsPosition?: { x: number; y: number };
  /** Enable window resizing. Requires the window to be absolutely positioned. */
  resizable?: boolean;
  /** Minimum width when resizable (default: 400) */
  minWidth?: number;
  /** Minimum height when resizable (default: 300) */
  minHeight?: number;
  /** Initial position (default: centered) */
  initialPosition?: { x: number; y: number };
  /** Initial size */
  initialSize?: { width: number; height: number };
  /** Callback when size changes */
  onSizeChange?: (size: { width: number; height: number }) => void;
  /** Callback when position changes */
  onPositionChange?: (position: { x: number; y: number }) => void;
  /** Show a sidebar toggle button next to traffic lights */
  showSidebarToggle?: boolean;
  /** Callback when sidebar toggle is clicked */
  onSidebarToggle?: () => void;
  /** Current sidebar open state (for visual feedback) */
  sidebarOpen?: boolean;
  /** Whether the window is focused/foregrounded (affects traffic light colors) */
  focused?: boolean;
  /** Callback when red (close) traffic light is clicked */
  onClose?: () => void;
  /** Callback when mouse down anywhere on window (for focus management) */
  onMouseDownCapture?: () => void;
}

/**
 * macOS-style window frame with built-in traffic lights and content wrapper.
 */
export function WindowChrome({
  children,
  className,
  showTrafficLights = true,
  trafficLightsPosition = { x: 10, y: 10 },
  resizable = true,
  minWidth = 400,
  minHeight = 300,
  initialPosition,
  initialSize,
  onSizeChange,
  onPositionChange,
  showSidebarToggle,
  onSidebarToggle,
  sidebarOpen,
  focused = true,
  onClose,
  onMouseDownCapture,
}: WindowChromeProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    initialPosition ?? null,
  );
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    initialSize ?? null,
  );
  const [hasCentered, setHasCentered] = useState(!!initialPosition);

  // Center window on mount if no initialPosition provided
  useEffect(() => {
    if (hasCentered || initialPosition) return;

    const windowEl = windowRef.current;
    if (!windowEl) return;

    const parent = windowEl.offsetParent as HTMLElement | null;
    if (!parent) return;

    const windowRect = windowEl.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const centeredX = Math.max(0, (parentRect.width - windowRect.width) / 2);
    const centeredY = Math.max(0, (parentRect.height - windowRect.height) / 2);

    setPosition({ x: centeredX, y: centeredY });
    setHasCentered(true);
  }, [hasCentered, initialPosition]);

  const handleResetWindow = useCallback(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    } else {
      // Re-center the window
      const windowEl = windowRef.current;
      if (windowEl) {
        const parent = windowEl.offsetParent as HTMLElement | null;
        if (parent) {
          const windowRect = windowEl.getBoundingClientRect();
          const parentRect = parent.getBoundingClientRect();
          const centeredX = Math.max(
            0,
            (parentRect.width - windowRect.width) / 2,
          );
          const centeredY = Math.max(
            0,
            (parentRect.height - windowRect.height) / 2,
          );
          setPosition({ x: centeredX, y: centeredY });
        }
      }
    }
    if (initialSize) {
      setSize(initialSize);
    }
  }, [initialPosition, initialSize]);

  const startPosRef = useRef({ x: 0, y: 0 });
  const startSizeRef = useRef({ width: 0, height: 0 });
  const startWindowPosRef = useRef({ x: 0, y: 0 });

  // Get current window position and size from DOM
  const getWindowRect = useCallback(() => {
    if (!windowRef.current) return null;
    const rect = windowRef.current.getBoundingClientRect();
    const parentRect =
      windowRef.current.offsetParent?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
    return {
      x: rect.left - parentRect.left,
      y: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
    };
  }, []);

  const startDrag = useCallback(
    (e: React.MouseEvent) => {
      // Don't start drag if clicking on traffic lights
      if ((e.target as HTMLElement).closest("[data-slot='traffic-lights']"))
        return;

      const windowRect = getWindowRect();
      if (!windowRect) return;
      e.preventDefault();

      // Initialize position/size state if not already set
      if (position === null) {
        setPosition({ x: windowRect.x, y: windowRect.y });
        setSize({ width: windowRect.width, height: windowRect.height });
      }

      setIsDragging(true);
      startPosRef.current = { x: e.clientX, y: e.clientY };
      startWindowPosRef.current = { x: windowRect.x, y: windowRect.y };
    },
    [getWindowRect, position],
  );

  const handleResizeMouseDown = useCallback(
    (e: React.MouseEvent, direction: string) => {
      if (!resizable) return;

      const windowRect = getWindowRect();
      if (!windowRect) return;
      e.preventDefault();
      e.stopPropagation();

      // Initialize position/size state if not already set
      if (position === null) {
        setPosition({ x: windowRect.x, y: windowRect.y });
        setSize({ width: windowRect.width, height: windowRect.height });
      }

      setIsResizing(true);
      setResizeDirection(direction);
      startPosRef.current = { x: e.clientX, y: e.clientY };
      startSizeRef.current = {
        width: windowRect.width,
        height: windowRect.height,
      };
      startWindowPosRef.current = { x: windowRect.x, y: windowRect.y };
    },
    [resizable, getWindowRect, position],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!windowRef.current) return;

      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;

      // Handle dragging
      if (isDragging) {
        const newX = startWindowPosRef.current.x + deltaX;
        const newY = startWindowPosRef.current.y + deltaY;
        setPosition({
          x: newX,
          y: Math.max(0, newY), // Can't drag above the top of the container (menu bar is above)
        });
        return;
      }

      if (!isResizing) return;

      let newWidth = startSizeRef.current.width;
      let newHeight = startSizeRef.current.height;
      let newX = startWindowPosRef.current.x;
      let newY = startWindowPosRef.current.y;

      // East edge: increase width, position stays
      if (resizeDirection.includes("e")) {
        newWidth = Math.max(minWidth, startSizeRef.current.width + deltaX);
      }
      // West edge: increase width, move position left
      if (resizeDirection.includes("w")) {
        const proposedWidth = startSizeRef.current.width - deltaX;
        if (proposedWidth >= minWidth) {
          newWidth = proposedWidth;
          newX = startWindowPosRef.current.x + deltaX;
        } else {
          newWidth = minWidth;
          newX =
            startWindowPosRef.current.x +
            (startSizeRef.current.width - minWidth);
        }
      }
      // South edge: increase height, position stays
      if (resizeDirection.includes("s")) {
        newHeight = Math.max(minHeight, startSizeRef.current.height + deltaY);
      }
      // North edge: increase height, move position up (but not above 0)
      if (resizeDirection.includes("n")) {
        const proposedY = startWindowPosRef.current.y + deltaY;
        const clampedY = Math.max(0, proposedY);
        const actualDeltaY = clampedY - startWindowPosRef.current.y;
        const proposedHeight = startSizeRef.current.height - actualDeltaY;

        if (proposedHeight >= minHeight) {
          newHeight = proposedHeight;
          newY = clampedY;
        } else {
          newHeight = minHeight;
          newY =
            startWindowPosRef.current.y +
            (startSizeRef.current.height - minHeight);
        }
      }

      setSize({ width: newWidth, height: newHeight });
      setPosition({ x: newX, y: newY });
    },
    [isDragging, isResizing, resizeDirection, minWidth, minHeight],
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging && onPositionChange && position) {
      onPositionChange(position);
    }
    if (isResizing) {
      if (onSizeChange && size) {
        onSizeChange(size);
      }
      if (onPositionChange && position) {
        onPositionChange(position);
      }
    }
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection("");
  }, [isDragging, isResizing, onSizeChange, onPositionChange, size, position]);

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  // Build style object for positioning
  const style: React.CSSProperties = {
    // @ts-expect-error - cornerShape is a non-standard CSS property
    cornerShape: "superellipse(1.1)",
    // Enable pointer events so clicks register on the window
    // (parent FocusableWindow has pointer-events:none to allow clicking through)
    pointerEvents: "auto",
  };

  if (position !== null) {
    style.left = position.x;
    style.top = position.y;
  }
  if (size !== null) {
    style.width = size.width;
    style.height = size.height;
  }

  // Create memoized context value
  const contextValue = useMemo<WindowChromeContextValue>(
    () => ({
      isDragging,
      isResizing,
      position,
      size,
      startDrag,
    }),
    [isDragging, isResizing, position, size, startDrag],
  );

  return (
    <WindowChromeContext.Provider value={contextValue}>
      <div
        ref={windowRef}
        data-slot="window-chrome"
        data-dragging={isDragging || undefined}
        data-resizing={isResizing || undefined}
        className={cn(
          "relative flex flex-col rounded-[16px] bg-white dark:bg-black",
          // light shadow (outer only - inset handled by overlay)
          "shadow-[0_0_0_0.5px_rgba(0,0,0,0.2),_0_1px_4px_0px_rgba(0,0,0,0.1),_0_2px_24px_0px_rgba(0,0,0,0.1),_0_4px_48px_0px_rgba(0,0,0,0.1)]",
          // dark shadow (outer only - inset handled by overlay)
          "dark:shadow-[0_0_0_0.5px_rgba(0,0,0,0.9),_0_1px_4px_0px_rgba(0,0,0,0.1),_0_2px_24px_0px_rgba(0,0,0,0.1),_0_4px_48px_0px_rgba(0,0,0,0.1)]",
          (isDragging || isResizing) && "select-none",
          className,
        )}
        style={style}
        onMouseDownCapture={onMouseDownCapture}
      >
        {/* Traffic lights - positioned absolutely */}
        {showTrafficLights && (
          <TrafficLights
            onRedClick={onClose}
            onGreenClick={handleResetWindow}
            position={trafficLightsPosition}
            showSidebarToggle={showSidebarToggle}
            onSidebarToggle={onSidebarToggle}
            sidebarOpen={sidebarOpen}
            focused={focused}
          />
        )}

        {/* Content wrapper - clips children to window bounds */}
        <div
          data-slot="window-chrome-content"
          className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[16px]"
        >
          {children}
        </div>

        {/* Inset shadow overlay - renders above content for consistent edge contrast */}
        <div
          data-slot="window-chrome-inset-shadow"
          className="pointer-events-none absolute inset-0 z-20 rounded-[16px] shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.25),inset_0_0.5px_0_0_rgba(255,255,255,0.25)]"
        />

        {/* Resize handles */}
        {resizable && (
          <>
            {/* Edge handles */}
            <div
              className="absolute top-0 right-0 bottom-0 w-1 cursor-e-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "e")}
            />
            <div
              className="absolute top-0 bottom-0 left-0 w-1 cursor-w-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "w")}
            />
            <div
              className="absolute right-0 bottom-0 left-0 h-1 cursor-s-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "s")}
            />
            <div
              className="absolute top-0 right-0 left-0 h-1 cursor-n-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "n")}
            />

            {/* Corner handles (larger hit area, higher z-index) */}
            <div
              className="absolute right-0 bottom-0 z-10 h-3 w-3 cursor-se-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "se")}
            />
            <div
              className="absolute bottom-0 left-0 z-10 h-3 w-3 cursor-sw-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "sw")}
            />
            <div
              className="absolute top-0 right-0 z-10 h-3 w-3 cursor-ne-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "ne")}
            />
            <div
              className="absolute top-0 left-0 z-10 h-3 w-3 cursor-nw-resize"
              onMouseDown={(e) => handleResizeMouseDown(e, "nw")}
            />
          </>
        )}
      </div>
    </WindowChromeContext.Provider>
  );
}

function TrafficLights({
  onRedClick,
  onGreenClick,
  position,
  showSidebarToggle,
  onSidebarToggle,
  sidebarOpen,
  focused,
}: {
  onRedClick?: () => void;
  onGreenClick?: () => void;
  position: { x: number; y: number };
  showSidebarToggle?: boolean;
  onSidebarToggle?: () => void;
  sidebarOpen?: boolean;
  focused?: boolean;
}) {
  // When unfocused, all traffic lights show as tertiary/gray
  const unfocusedClass = "bg-tertiary";

  return (
    <div
      data-slot="traffic-lights"
      className="absolute z-20 flex items-center gap-2"
      style={{ left: position.x, top: position.y }}
    >
      <div
        className={cn(
          "size-3 rounded-full shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.08)]",
          focused ? "bg-[#FF4F4E]" : unfocusedClass,
          onRedClick && "cursor-pointer",
        )}
        onClick={onRedClick}
      />
      <div
        className={cn(
          "size-3 rounded-full shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.08)]",
          focused ? "bg-[#FFB900]" : unfocusedClass,
        )}
      />
      <div
        className={cn(
          "size-3 cursor-pointer rounded-full shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.08)]",
          focused ? "bg-[#00CD19]" : unfocusedClass,
        )}
        onClick={onGreenClick}
      />
      {showSidebarToggle && (
        <IconButton
          variant="ghost"
          size="sm"
          onClick={onSidebarToggle}
          className="ml-0.5"
          data-no-drag
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Icon icon={sidebarLeftIcon} color="secondary" />
        </IconButton>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// DragHandle Compound Component
// -----------------------------------------------------------------------------

interface DragHandleProps {
  children: React.ReactNode;
  className?: string;
  /** Additional selectors to exclude from dragging (default exclusions: button, a, input, etc.) */
  excludeSelectors?: string[];
}

/**
 * A draggable region within a WindowChrome.
 * Clicking and dragging within this area will move the window.
 * Interactive elements (buttons, links, inputs) are automatically excluded.
 * Add `data-no-drag` attribute to any element to exclude it from triggering drag.
 */
function DragHandle({
  children,
  className,
  excludeSelectors = [],
}: DragHandleProps) {
  const { startDrag } = useWindowChrome();

  // Default elements that should not trigger drag
  const defaultExclusions = [
    "button",
    "a",
    "input",
    "textarea",
    "select",
    "[role='button']",
    "[data-no-drag]",
  ];

  function handleMouseDown(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const allExclusions = [...defaultExclusions, ...excludeSelectors];

    // Check if click is on an excluded element
    for (const selector of allExclusions) {
      if (target.closest(selector)) return;
    }

    startDrag(e);
  }

  return (
    <div
      data-slot="window-chrome-drag-handle"
      className={cn("cursor-default", className)}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}

// Attach compound component
WindowChrome.DragHandle = DragHandle;
