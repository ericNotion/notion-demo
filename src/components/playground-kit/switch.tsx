"use client";

import { cn } from "@/utils/cn";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

function PlaygroundSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="playground-switch"
      className={cn(
        "peer data-[state=checked]:bg-blue-accent-primary focus-visible:ring-blue-accent-primary/50 inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-black/10 dark:data-[state=unchecked]:bg-white/20",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="playground-switch-thumb"
        className={cn(
          "pointer-events-none block size-[18px] rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[19px] data-[state=unchecked]:translate-x-[3px]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { PlaygroundSwitch };
