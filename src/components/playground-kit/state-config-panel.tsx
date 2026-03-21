"use client";

import { xMarkSmallIcon } from "@/nds-icons/src/xMark/small.icon";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { Atom, atom, useAtom } from "jotai";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import React from "react";
import { useHotkeys } from "react-hotkeys-hook";

const panelMinimizedAtom = atom(false);

export function StateConfigPanel({
  title = "State",
  children,
  position = "bottom right",
  defaultMinimized = false,
  storageKey,
}: {
  title?: string;
  children: React.ReactNode;
  position?: "bottom right" | "bottom left" | "top right" | "top left";
  defaultMinimized?: boolean;
  /** Unique key for persisting open/closed state to localStorage. If provided, the panel will remember its state across page loads. */
  storageKey?: string;
}) {
  const fullStorageKey = storageKey
    ? `state-config-panel:${storageKey}:minimized`
    : null;

  const [minimized, setMinimized] = React.useState(() => {
    if (typeof window === "undefined" || !fullStorageKey)
      return defaultMinimized;
    const stored = localStorage.getItem(fullStorageKey);
    return stored !== null ? stored === "true" : defaultMinimized;
  });

  React.useEffect(() => {
    if (!fullStorageKey) return;
    localStorage.setItem(fullStorageKey, String(minimized));
  }, [minimized, fullStorageKey]);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [minimizedWidth, setMinimizedWidth] = React.useState<number>(180);
  const [contentHeight, setContentHeight] = React.useState<number>(0);
  const [maxContentHeight, setMaxContentHeight] =
    React.useState<number>(Infinity);
  const [hasMeasured, setHasMeasured] = React.useState(false);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const [canScrollDown, setCanScrollDown] = React.useState(false);

  // Calculate max content height based on viewport
  React.useEffect(() => {
    const updateMaxHeight = () => {
      // viewport - margins (32px) - header (44px)
      setMaxContentHeight(window.innerHeight - 32 - 44);
    };
    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  // The actual height to animate to (capped at max)
  const targetContentHeight = Math.min(contentHeight, maxContentHeight);

  // Check scroll state
  const updateScrollState = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const hasOverflow = scrollHeight > clientHeight + 1;
    setCanScrollUp(hasOverflow && scrollTop > 1);
    setCanScrollDown(
      hasOverflow && scrollTop < scrollHeight - clientHeight - 1,
    );
  }, []);

  // Update scroll state when content changes or panel expands
  React.useEffect(() => {
    if (!minimized) {
      // Delay until after animation completes (0.4s) to get accurate measurements
      const timeout = setTimeout(updateScrollState, 450);
      return () => clearTimeout(timeout);
    } else {
      // Reset scroll state when minimized
      setCanScrollUp(false);
      setCanScrollDown(false);
    }
  }, [minimized, contentHeight, updateScrollState]);

  // Measure header width for minimized state
  React.useLayoutEffect(() => {
    if (headerRef.current) {
      const titleEl = headerRef.current.querySelector("span");
      if (titleEl) {
        const titleWidth = titleEl.scrollWidth;
        const padding = 24; // pl-3 + pl-2 (inner) + pr-3 = 12 + 8 + 12
        setMinimizedWidth(titleWidth + padding);
      }
    }
  }, []);

  // Measure content height for smooth animation (avoids height: "auto" jank)
  React.useLayoutEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        // Use offsetHeight to include padding
        setContentHeight(contentRef.current.offsetHeight);
      }
    });

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Enable animations after first measurement settles (prevents initial animation)
  React.useEffect(() => {
    if (contentHeight > 0 && !hasMeasured) {
      const frame = requestAnimationFrame(() => {
        setHasMeasured(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [contentHeight, hasMeasured]);

  useHotkeys(
    "mod+shift+period",
    (e) => {
      e.preventDefault();
      setMinimized(!minimized);
    },
    {
      enableOnContentEditable: true,
      enableOnFormTags: true,
    },
  );

  const positionClasses = cn(
    "fixed z-50 select-none",
    position === "bottom right" && "right-4 bottom-4",
    position === "bottom left" && "bottom-4 left-4",
    position === "top right" && "top-4 right-4",
    position === "top left" && "top-4 left-4",
  );

  const expandedWidth = 280;

  return (
    <MotionConfig
      transition={
        hasMeasured
          ? { type: "spring", bounce: 0, duration: 0.4 }
          : { duration: 0 }
      }
    >
      <div className={positionClasses}>
        <motion.div
          className={cn(
            "dark:shadow-contrast dark:bg-elevated flex max-h-[calc(100vh-32px)] flex-col overflow-hidden bg-black fill-white text-white shadow-2xl",
            minimized && "cursor-pointer",
          )}
          initial={false}
          animate={{
            width: minimized ? minimizedWidth : expandedWidth,
            borderRadius: 22,
          }}
          style={{ willChange: "transform" }}
          onClick={minimized ? () => setMinimized(false) : undefined}
        >
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="flex h-11 shrink-0 items-center py-3 pr-2.5 pl-2 whitespace-nowrap"
            initial={false}
          >
            <span className="pl-2 text-base font-medium">{title}</span>
            <AnimatePresence initial={false}>
              {!minimized && (
                <motion.button
                  className="ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/40"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMinimized(true);
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <Icon
                    icon={xMarkSmallIcon}
                    size="sm"
                    weight="bold"
                    color="inherit"
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={false}
            animate={{
              height: minimized ? 0 : targetContentHeight,
              opacity: minimized ? 0 : 1,
            }}
            className="relative flex min-h-0 flex-col overflow-hidden"
          >
            {/* Top gradient scrim */}
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black to-transparent transition-opacity duration-200 dark:from-[var(--color-elevated)]",
                canScrollUp && !minimized ? "opacity-100" : "opacity-0",
              )}
            />
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto"
            >
              <div
                ref={contentRef}
                className="flex cursor-default flex-col gap-3 p-2"
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
            {/* Bottom gradient scrim */}
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black to-transparent transition-opacity duration-200 dark:from-[var(--color-elevated)]",
                canScrollDown && !minimized ? "opacity-100" : "opacity-0",
              )}
            />
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}

export function PanelCheckboxItem({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 text-base transition-colors hover:bg-white/20">
      <div className="relative flex h-4 w-4 items-center justify-center">
        <input
          type="checkbox"
          checked={checked ?? false}
          onChange={(e) => onChange(e.target.checked)}
          className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/30 bg-transparent transition-colors checked:border-white checked:bg-white"
        />
        <svg
          className="pointer-events-none absolute h-2.5 w-2.5 text-black opacity-0 transition-opacity peer-checked:opacity-100"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M2 5L4 7L8 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="line-clamp-1 text-white/90">{label}</span>
    </label>
  );
}

export function PanelRadioItem({
  checked,
  onChange,
  label,
  name,
  value,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  name: string;
  value: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-full px-2 py-1.5 text-base transition-colors hover:bg-white/20">
      <div className="relative flex h-4 w-4 items-center justify-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-white/30 bg-transparent transition-colors checked:border-white"
        />
        <div className="pointer-events-none absolute h-2 w-2 scale-0 rounded-full bg-white transition-transform peer-checked:scale-100" />
      </div>
      <span className="line-clamp-1 text-white/90">{label}</span>
    </label>
  );
}

export function PanelCheckbox({
  atom: at,
  label,
}: {
  atom: Atom<boolean>;
  label: string;
}) {
  const [value, setValue] = useAtom(at);

  return (
    <PanelCheckboxItem
      checked={value}
      onChange={(checked) => (setValue as (value: boolean) => void)(checked)}
      label={label}
    />
  );
}

export function PanelRadioGroup<T extends string>({
  atom: at,
  options,
  name,
}: {
  atom: Atom<T>;
  options: { value: T; label: string }[];
  name: string;
}) {
  const [value, setValue] = useAtom(at);

  return (
    <div className="flex flex-col gap-1">
      {options.map((opt) => (
        <PanelRadioItem
          key={opt.value}
          checked={value === opt.value}
          onChange={() => (setValue as (value: T) => void)(opt.value)}
          label={opt.label}
          name={name}
          value={opt.value}
        />
      ))}
    </div>
  );
}

export function PanelButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { className, ...rest } = props;
  return (
    <button
      className={cn(
        "w-full rounded-full bg-white/20 px-3.5 py-1.5 text-base font-medium text-white transition-colors hover:bg-white/30 active:bg-white/25",
        className,
      )}
      {...rest}
    />
  );
}

export function PanelSection({
  label,
  children,
  className,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <div className="mb-1.5 px-2 text-xs font-medium text-white/50">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export function PanelDivider() {
  return <div className="-mx-2 my-1 h-px bg-white/15" />;
}

export function PanelSlider({
  value,
  onChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  formatValue = (v: number) => `${v}%`,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  formatValue?: (value: number) => string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2 px-2 py-1.5">
      <div className="flex items-center justify-between">
        <span className="line-clamp-1 text-base text-white/90">{label}</span>
        {showValue && (
          <span className="text-base text-white/50">{formatValue(value)}</span>
        )}
      </div>
      <div className="relative flex h-4 items-center">
        <div className="relative h-1 w-full rounded-full bg-white/20">
          <div
            className="absolute h-full rounded-full bg-blue-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute h-5 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
        />
      </div>
    </div>
  );
}

export function PanelSelect<T extends string>({
  value,
  onChange,
  label,
  options,
}: {
  value: T;
  onChange: (value: T) => void;
  label: string;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-2 py-1.5">
      <span className="text-base text-white/90">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
          className="cursor-pointer appearance-none rounded-full bg-white/20 py-1 pr-7 pl-3 text-base text-white transition-colors outline-none hover:bg-white/30"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-black">
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-white/60"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function PanelSwitch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-full px-2 py-1.5 transition-colors hover:bg-white/10">
      <span className="text-base text-white/90">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          checked ? "bg-blue-500" : "bg-white/30",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all",
            checked && "translate-x-4",
          )}
        />
      </button>
    </label>
  );
}

export function PanelNumberInput({
  value,
  onChange,
  label,
  min,
  max,
  step = 1,
  disabled = false,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 px-2 py-1.5",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <span className="text-base text-white/90">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className="w-16 [appearance:textfield] rounded-full bg-white/20 px-3 py-1 text-center text-base text-white transition-colors outline-none hover:bg-white/30 focus:bg-white/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  );
}

const panelAtoms = {
  minimized: panelMinimizedAtom,
};
