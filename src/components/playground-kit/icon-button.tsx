"use client";

import { type ButtonProps } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";

function PlaygroundIconButton({ className, ...props }: ButtonProps) {
  return (
    <IconButton
      size="lg"
      className={cn(
        "fill-primary size-10 rounded-full px-4 text-base shadow-none",
        className,
      )}
      {...props}
    />
  );
}

export { PlaygroundIconButton };
