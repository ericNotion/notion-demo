"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import { cn } from "@/utils/cn";

function Switch({
  className,
  trackClassName,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  trackClassName?: string;
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=unchecked]:bg-tertiary data-[state=checked]:bg-blue-accent-primary dark:data-[state=unchecked]:bg-tertiary-translucent focus-visible:ring-blue-accent-primary/50 inline-flex h-4 w-7 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        trackClassName,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-3 rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[13px] data-[state=unchecked]:translate-x-px",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
