"use client";

import { Icon } from "@nds-icons";
import { arrowCircleSpinClockwiseSmallIcon } from "@nds-icons/arrowCircleSpinClockwise/small.icon";
import { checkmarkCircleFillSmallIcon } from "@nds-icons/checkmarkCircle/fillSmall.icon";
import { exclamationMarkTriangleFillSmallIcon } from "@nds-icons/exclamationMarkTriangle/fillSmall.icon";
import { infoCircleFillSmallIcon } from "@nds-icons/infoCircle/fillSmall.icon";
import { xMarkCircleFillSmallIcon } from "@nds-icons/xMarkCircle/fillSmall.icon";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system", resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        style: isDark
          ? {
              boxShadow:
                "inset 0 0 0 0.5px rgba(255, 255, 255, 0.04), inset 0 0.5px 0 0 rgba(255, 255, 255, 0.04), 0 -1px 1px 0px rgba(0, 0, 0, 0.1), 0 1px 3px 0px rgba(0, 0, 0, 0.5)",
            }
          : undefined,
      }}
      icons={{
        success: (
          <Icon
            icon={checkmarkCircleFillSmallIcon}
            size={16}
            className="text-green-primary"
          />
        ),
        info: (
          <Icon
            icon={infoCircleFillSmallIcon}
            size={16}
            className="text-blue-accent-primary"
          />
        ),
        warning: (
          <Icon
            icon={exclamationMarkTriangleFillSmallIcon}
            size={16}
            className="text-yellow-primary"
          />
        ),
        error: (
          <Icon
            icon={xMarkCircleFillSmallIcon}
            size={16}
            className="text-red-primary"
          />
        ),
        loading: (
          <Icon
            icon={arrowCircleSpinClockwiseSmallIcon}
            size={16}
            className="animate-spin"
          />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--background-color-elevated)",
          "--normal-text": "var(--color-text-primary)",
          "--normal-border": "var(--color-border)",
          "--border-radius": "0.5rem",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
