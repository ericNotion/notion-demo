"use client";

import { primarySidebarAtom } from "@/components/notion-kit/PrimarySidebar/atoms";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { menuSmallIcon } from "@nds-icons/menu/small.icon";
import { useAtom } from "jotai";

export function TopBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [primarySidebarOpen, setPrimarySidebarOpen] =
    useAtom(primarySidebarAtom);
  return (
    <div
      className={cn(
        "group/top-bar flex h-11 w-full flex-none items-center gap-px px-3 pr-2",
        {
          "pl-2": !primarySidebarOpen,
        },
        className,
      )}
    >
      {!primarySidebarOpen && (
        <IconButton
          variant="ghost"
          className="mr-2"
          size="sm"
          aria-label="Open primary sidebar"
          onClick={() =>
            setPrimarySidebarOpen((previousState) => !previousState)
          }
        >
          <Icon icon={menuSmallIcon} size="sm" />
        </IconButton>
      )}

      {children}
    </div>
  );
}
