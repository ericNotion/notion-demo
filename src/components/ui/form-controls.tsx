import { cn } from "@/utils/cn";
import * as React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      autoComplete="off"
      autoCapitalize="off"
      autoCorrect="off"
      data-1p-ignore
      className={cn(
        "bg-secondary-translucent border-primary-translucent w-full rounded-md border px-2 py-1 text-sm focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--border-color-blue-accent-primary)]",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "bg-secondary w-full rounded-md border border-black/10 px-2 py-1 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:outline-0 dark:border-white/10 dark:bg-neutral-800 dark:focus:bg-white/10 dark:focus:ring-blue-500/20",
        className,
      )}
      {...props}
    />
  );
}
