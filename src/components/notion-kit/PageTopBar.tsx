"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";
import { lockIcon } from "@nds-icons/lock/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import type { Atom } from "jotai";
import { useAtomValue } from "jotai";

interface PageTopBarProps {
  /** Page title - can be a string or an atom for reactive updates */
  title?: string | Atom<string>;
  /** Callback when Share button is clicked */
  onShare?: () => void;
  /** Callback when Star button is clicked */
  onStar?: () => void;
  /** Callback when More (ellipsis) button is clicked */
  onMore?: () => void;
  /** Callback when permissions button is clicked */
  onPermissions?: () => void;
  /** Whether the page is starred */
  isStarred?: boolean;
  /** Permission label (e.g., "Private", "Shared") */
  permissionLabel?: string;
  /** Additional class names */
  className?: string;
  /** Optional right accessory to render before the buttons */
  rightAccessory?: React.ReactNode;
}

function AtomTitleDisplay({ titleAtom }: { titleAtom: Atom<string> }) {
  const value = useAtomValue(titleAtom);
  return <>{value || "Untitled"}</>;
}

function TitleDisplay({ title }: { title: string | Atom<string> }) {
  // If title is an atom, render the atom-aware component
  if (typeof title === "object" && "read" in title) {
    return <AtomTitleDisplay titleAtom={title} />;
  }
  return <>{title || "Untitled"}</>;
}

export function PageTopBar({
  title = "Untitled",
  onShare,
  onStar,
  onMore,
  onPermissions,
  isStarred = false,
  permissionLabel = "Private",
  className,
  rightAccessory,
}: PageTopBarProps) {
  return (
    <div className={cn("flex h-10 shrink-0 items-center pr-2 pl-4", className)}>
      <span className="text-primary text-sm">
        <TitleDisplay title={title} />
      </span>
      <Button
        variant="ghost"
        size="sm"
        className="text-tertiary ml-2 gap-1 px-1.5 text-sm"
        onClick={onPermissions}
      >
        <Icon icon={lockIcon} size="sm" color="tertiary" />
        {permissionLabel}
        <Icon icon={arrowChevronSingleDownIcon} size="sm" color="tertiary" />
      </Button>
      <div className="grow" />
      <div className="flex shrink-0 items-center gap-1">
        {rightAccessory}
        <Button variant="ghost" onClick={onShare}>
          Share
        </Button>
        <IconButton variant="ghost" onClick={onStar}>
          <Icon
            icon={starIcon}
            color={isStarred ? "yellowPrimary" : undefined}
          />
        </IconButton>
        <IconButton variant="ghost" onClick={onMore}>
          <Icon icon={ellipsisIcon} />
        </IconButton>
      </div>
    </div>
  );
}
