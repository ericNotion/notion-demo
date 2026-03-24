"use client";

import { CustomTooltip } from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex leading-none pointer-events-auto select-none cursor-pointer group/button items-center gap-1.5 justify-center whitespace-nowrap font-medium focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--border-color-blue-accent-primary)] disabled:pointer-events-none disabled:opacity-50 flex-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-accent-primary hover:bg-blue-accent-primary/90 text-white",
        tint: "bg-tertiary-translucent hover:bg-tertiary text-primary",
        outline:
          "border border-1 dark:border-white/10 border-primary hover:bg-secondary-translucent hover:border-primary",
        plain:
          "bg-transparent hover:bg-tertiary-translucent aria-expanded:bg-tertiary-translucent",
        default:
          "bg-neutral-900 text-white hover:bg-neutral-900/90 dark:bg-neutral-700 dark:hover:bg-neutral-600",
        destructive:
          "bg-red-secondary text-red-secondary hover:bg-red-tertiary",
        destructiveSolid:
          "bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-900 dark:hover:bg-red-900/90",
        ghost:
          "bg-black/[0] data-[state='open']:bg-black/[0.08] dark:data-[state='open']:bg-white/[0.12] hover:bg-black/[0.05] dark:hover:bg-white/[0.12] text-primary dark:bg-transparent",
        link: "text-secondary underline-offset-4 hover:underline dark:text-primary",
      },
      size: {
        xxs: "h-4 px-1 text-caption",
        xs: "h-5 px-1.5 text-caption",
        sm: "h-6 px-2 text-sm",
        md: "h-7 px-2 text-sm",
        lg: "h-8 px-3 text-base",
        xl: "h-9 px-3 text-lg",
        // ShadCN compat sizes
        default: "h-9 px-4 py-2",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      shape: {
        rect: "rounded-md",
        pill: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      // These empty strings ensure proper TypeScript inference
      color: {
        neutral: "",
        blue: "",
        red: "",
        black: "",
        orange: "",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "blue",
        class:
          "text-blue-secondary border-blue-primary hover:bg-blue-secondary hover:border-blue-strong",
      },
      {
        variant: "tint",
        color: "blue",
        class:
          "text-blue-accent-primary bg-blue-secondary hover:bg-blue-tertiary",
      },
      {
        variant: "plain",
        color: "blue",
        class: "text-blue-secondary hover:bg-blue-secondary",
      },
      {
        variant: "primary",
        color: "black",
        class: "bg-accent-primary text-white",
      },
      {
        variant: "primary",
        color: "red",
        class: "bg-red-accent-primary text-white",
      },
      {
        variant: "outline",
        color: "red",
        class:
          "text-red-secondary border-red-primary hover:bg-red-secondary hover:border-red-strong",
      },
      {
        variant: "tint",
        color: "red",
        class: "text-red-secondary bg-red-secondary",
      },
      {
        variant: "plain",
        color: "red",
        class: "text-red-secondary hover:bg-red-secondary",
      },
      {
        variant: "primary",
        color: "orange",
        class: "bg-orange-accent-primary text-white",
      },
      {
        variant: "outline",
        color: "orange",
        class:
          "text-orange-secondary border-orange-primary hover:bg-orange-secondary hover:border-orange-strong",
      },
      {
        variant: "tint",
        color: "orange",
        class:
          "text-orange-secondary bg-orange-secondary hover:bg-orange-tertiary",
      },
      {
        variant: "plain",
        color: "orange",
        class: "text-orange-secondary hover:bg-orange-secondary",
      },
      {
        iconOnly: true,
        size: "xxs",
        class: "size-4",
      },
      {
        iconOnly: true,
        size: "xs",
        class: "size-5",
      },
      {
        iconOnly: true,
        size: "sm",
        class: "size-6",
      },
      {
        iconOnly: true,
        size: "md",
        class: "size-7",
      },
      {
        iconOnly: true,
        size: "lg",
        class: "size-8",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      color: "neutral",
      fullWidth: false,
      shape: "rect",
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  tooltip?: string;
  tooltipSide?: "top" | "bottom" | "left" | "right";
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      tooltip,
      tooltipSide = "top",
      color,
      shape,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const button = (
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({
            variant,
            size,
            color,
            fullWidth,
            shape,
            iconOnly: !!icon,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {icon || children}
      </Comp>
    );

    if (tooltip) {
      return (
        <CustomTooltip content={tooltip} side={tooltipSide} delayDuration={200}>
          {button}
        </CustomTooltip>
      );
    }

    return button;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
