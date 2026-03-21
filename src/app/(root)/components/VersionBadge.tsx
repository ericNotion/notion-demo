"use client";

import CustomTooltip from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";

interface VersionBadgeProps {
  version: number;
  totalVersions?: number;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  size?: "default" | "sm";
  /** Force showing even for v1 (used in expanded version lists) */
  forceShow?: boolean;
}

/**
 * Small badge showing version number
 * Appears on prototype rows when they have multiple versions
 */
export function VersionBadge({
  version,
  totalVersions,
  className,
  onClick,
  size = "default",
  forceShow = false,
}: VersionBadgeProps) {
  // Don't show badge for v1 when there's only one version (unversioned prototype)
  // unless forceShow is true (for expanded version lists)
  if (!forceShow && version === 1 && (!totalVersions || totalVersions <= 1)) {
    return null;
  }

  const badge = (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "inline-flex shrink-0 items-center rounded font-medium",
        size === "sm" ? "px-1 py-px text-[11px]" : "px-1.5 py-0.5 text-xs",
        "bg-black/[0.08] dark:bg-white/10",
        onClick &&
          "pointer-events-auto relative z-10 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700",
        !onClick && "cursor-default",
        className,
      )}
    >
      v{version}
    </button>
  );

  if (totalVersions && totalVersions > 1) {
    return (
      <CustomTooltip content={`${totalVersions} versions available`}>
        {badge}
      </CustomTooltip>
    );
  }

  return badge;
}
