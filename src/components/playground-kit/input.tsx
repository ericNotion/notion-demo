import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import * as React from "react";

function PlaygroundInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      className={cn(
        "bg-secondary h-11 rounded-xl text-base shadow-none lg:text-base",
        className,
      )}
      {...props}
    />
  );
}

export { PlaygroundInput };
