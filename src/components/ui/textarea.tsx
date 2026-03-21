"use client";

import * as React from "react";

import { cn } from "@/utils/cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-primary bg-primary text-primary placeholder:text-secondary aria-invalid:ring-red-primary/20 dark:aria-invalid:ring-red-primary/40 aria-invalid:border-red-primary flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
