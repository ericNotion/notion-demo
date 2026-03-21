import * as React from "react";

import { duplicateIcon } from "@/nds-icons/src/duplicate/default.icon";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { Button } from "./button";

function Input({
  className,
  type,
  onCopyClick,
  ...props
}: React.ComponentProps<"input"> & { onCopyClick?: () => void }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:border-blue-500 focus-visible:ring-[3px] focus-visible:ring-blue-500/10",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          onCopyClick && "pr-9",
          className,
        )}
        {...props}
      />
      {onCopyClick && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onCopyClick}
          className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
        >
          <Icon icon={duplicateIcon} size={16} />
        </Button>
      )}
    </div>
  );
}

export { Input };
