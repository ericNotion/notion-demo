"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import * as React from "react";

const PlaygroundButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="lg"
        shape="pill"
        className={cn("h-10 px-4 text-base shadow-none", className)}
        {...props}
      />
    );
  },
);
PlaygroundButton.displayName = "PlaygroundButton";

export { PlaygroundButton };
