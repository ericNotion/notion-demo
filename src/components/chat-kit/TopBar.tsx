"use client";

import { cn } from "@/utils/cn";

export function TopBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/top-bar flex h-11 w-full flex-none items-center gap-px px-3 pr-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
