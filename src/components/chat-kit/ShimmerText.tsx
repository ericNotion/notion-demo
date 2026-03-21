import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";

export function ShimmerText({
  children,
  shimmer = true,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  shimmer?: boolean;
  variant?: "dark" | "bright";
  className?: string;
}) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(
    function () {
      if (shimmer && elementRef.current) {
        const delay = Math.random() * 1.5;
        elementRef.current.style.animationDelay = `-${delay}s`;
      }
    },
    [shimmer],
  );

  return (
    <span
      ref={elementRef}
      className={cn(
        "text-sm font-medium select-none",
        {
          "text-tertiary": !shimmer,
          "animate-[text-shimmer_2s_infinite_linear] bg-gradient-to-r bg-[length:200%_100%] bg-clip-text text-transparent":
            shimmer,
          "from-neutral-300 via-neutral-500 to-neutral-300": variant === "dark",
          "from-rose-500 via-purple-500 to-rose-500 saturate-[80%]":
            variant === "bright",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}
