import { cn } from "@/utils/cn";

export function LoadingDots({ size = "default" }: { size?: "sm" | "default" }) {
  const gap = size === "sm" ? "gap-[2px]" : "gap-[3px]";
  const dotSize = size === "sm" ? "w-[3px] h-[3px]" : "w-1 h-1";

  return (
    <div className={cn("flex items-center justify-center", gap)}>
      <div
        className={cn(
          "animate-[bounce_1s_infinite_-0.3s] rounded-full bg-[#E4BD6A] ease-in-out",
          dotSize,
        )}
      />
      <div
        className={cn(
          "animate-[bounce_1s_infinite_-0.15s] rounded-full bg-[#E18F86] ease-in-out",
          dotSize,
        )}
      />
      <div
        className={cn(
          "animate-[bounce_1s_infinite] rounded-full bg-[#7AB4ED] ease-in-out",
          dotSize,
        )}
      />
    </div>
  );
}
