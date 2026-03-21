"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface TableRowProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "onClick"
> {
  href?: string;
  onClick?: () => void;
}

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(
  function TableRow({ href, onClick, children, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex h-12 items-center rounded-full",
          className,
        )}
        {...props}
      >
        {href && (
          <Link
            draggable={false}
            className="absolute inset-0 z-0"
            href={href}
          />
        )}
        {!href && onClick && (
          <button
            type="button"
            className="absolute inset-0 z-0 cursor-pointer"
            onClick={onClick}
          />
        )}

        <div className="pointer-events-none relative z-10 flex-1">
          {children}
        </div>
      </div>
    );
  },
);
