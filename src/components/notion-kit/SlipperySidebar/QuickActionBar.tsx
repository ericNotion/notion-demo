"use client";

import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSlipperySidebarContext, type TabRegistration } from "./context";

const ICON_ONLY_WIDTH_THRESHOLD = 300;
const ICON_ONLY_WIDTH_THRESHOLD_4_TABS = 360;

interface SidebarTabProps {
  tab: TabRegistration;
  active: boolean;
  compact: boolean;
  isFirstTab: boolean;
  onClick: () => void;
}

function SidebarTab({
  tab,
  active,
  compact,
  isFirstTab,
  onClick,
}: SidebarTabProps) {
  const isCompact = compact && !active;
  const shouldShowLabel = !compact || active;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "relative flex h-8 items-center justify-center rounded-full text-sm font-medium",
        "transition-[padding,margin] duration-200 ease-out",
        active
          ? "bg-tertiary-translucent text-primary"
          : "text-tertiary hover:bg-secondary-translucent",
        isCompact ? "px-[5px]" : "pr-3 pl-2",
        compact && active && !isFirstTab && "mr-0.5 ml-0.5",
      )}
    >
      <span className="relative flex items-center">
        <Icon
          icon={tab.icon}
          size={22}
          color={active ? "primary" : "secondary"}
        />
        {tab.count != null && tab.count > 0 && (
          <span
            className="bg-red-accent-primary text-red-inverse-primary absolute -top-[3px] flex h-3 min-w-3 items-center justify-center rounded-full px-[3px] text-[9px] font-semibold"
            style={{ right: 3, transform: "translateX(50%)" }}
          >
            {tab.count > 99 ? "•" : tab.count}
          </span>
        )}
      </span>
      <span
        className="grid min-w-0 overflow-hidden transition-[grid-template-columns] duration-200 ease-out"
        style={{
          gridTemplateColumns: shouldShowLabel ? "1fr" : "0fr",
        }}
      >
        <span className="min-w-0 overflow-hidden">
          <span
            className={cn("pl-1.5 whitespace-nowrap", {
              "text-primary": active,
              "text-secondary": !active,
            })}
          >
            {tab.label}
          </span>
        </span>
      </span>
    </button>
  );
}

export function QuickActionBar({ onSearch }: { onSearch?: () => void } = {}) {
  const { tabs, activeTab, setActiveTab } = useSlipperySidebarContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  const threshold =
    tabs.length >= 4
      ? ICON_ONLY_WIDTH_THRESHOLD_4_TABS
      : ICON_ONLY_WIDTH_THRESHOLD;

  const checkCompact = useCallback(() => {
    if (containerRef.current) {
      setIsCompact(containerRef.current.offsetWidth < threshold);
    }
  }, [threshold]);

  useEffect(() => {
    checkCompact();
    const observer = new ResizeObserver(checkCompact);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [checkCompact]);

  return (
    <div
      className="relative z-[1] flex shrink-0 flex-col py-2"
      style={{ paddingInlineStart: 8, paddingInlineEnd: 12 }}
    >
      <div
        ref={containerRef}
        className="flex flex-nowrap items-center gap-0.5"
        style={{
          paddingInlineStart: isCompact && activeTab !== tabs[0]?.id ? 3 : 0,
          transition: "padding 200ms ease-out",
        }}
      >
        <div className="flex min-w-0 grow flex-nowrap gap-0.5" role="tablist">
          {tabs.map((tab, index) => (
            <SidebarTab
              key={tab.id}
              tab={tab}
              active={activeTab === tab.id}
              compact={isCompact}
              isFirstTab={index === 0}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        <div
          className="flex shrink-0 items-center gap-0.5"
          style={{ paddingInlineStart: 8, marginInlineStart: -8 }}
        >
          <button
            type="button"
            aria-label="Search"
            onClick={onSearch}
            className="hover:bg-tertiary-translucent flex size-8 shrink-0 items-center justify-center rounded-full"
          >
            <Icon icon={magnifyingGlassIcon} size={22} color="secondary" />
          </button>
        </div>
      </div>
    </div>
  );
}
