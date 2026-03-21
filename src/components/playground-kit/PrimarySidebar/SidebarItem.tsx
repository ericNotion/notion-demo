"use client";

import Link from "next/link";

import { cn } from "@/utils/cn";

export function SidebarItem({
  icon,
  label,
  href,
  isActive = false,
  onClick,
  trailingAccessory,
}: {
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  trailingAccessory?: React.ReactNode;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={cn(
          "group/sidebar-item flex h-[30px] items-center gap-2 rounded-md px-2",
          {
            "hover:bg-tertiary": !isActive,
            "bg-tertiary hover:bg-tertiary": isActive,
          },
        )}
      >
        {icon && (
          <span
            className={cn(
              "group-hover/sidebar-item:text-primary flex h-5 w-5 items-center justify-center",
              { "text-primary": isActive, "text-secondary": !isActive },
            )}
          >
            {icon}
          </span>
        )}
        <span
          className={cn(
            "group-hover/sidebar-item:text-primary line-clamp-1 flex-1 text-sm font-medium select-none",
            {
              "text-primary": isActive,
              "text-secondary": !isActive,
            },
          )}
        >
          {label}
        </span>
        {trailingAccessory}
      </div>
    </Link>
  );
}
