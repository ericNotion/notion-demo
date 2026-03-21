"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/cn";
import * as React from "react";

function PlaygroundTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      className={cn(
        "placeholder:text-tertiary bg-secondary rounded-xl text-base shadow-none lg:text-base",
        className,
      )}
      {...props}
    />
  );
}

export { PlaygroundTextarea };
