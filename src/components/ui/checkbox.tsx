"use client";

import { Icon } from "@nds-icons";
import { checkmarkSmallIcon } from "@nds-icons/checkmark/small.icon";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const checkboxVariants = cva(
  "peer border-primary dark:bg-tertiary-translucent/30 data-[state=checked]:bg-blue-accent-primary dark:data-[state=checked]:bg-blue-accent-primary data-[state=checked]:border-blue-accent-primary focus-visible:border-blue-accent-primary focus-visible:ring-blue-accent-primary/50 aria-invalid:ring-red-primary/20 dark:aria-invalid:ring-red-primary/40 aria-invalid:border-red-primary shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-white",
  {
    variants: {
      size: {
        sm: "size-3.5",
        default: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface CheckboxProps
  extends
    React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

function Checkbox({
  className,
  size,
  label,
  description,
  ...props
}: CheckboxProps) {
  const checkbox = (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center transition-none"
      >
        <Icon
          icon={checkmarkSmallIcon}
          weight="bold"
          color="white"
          size={size === "sm" ? 10 : size === "lg" ? 16 : 14}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label || description) {
    return (
      <div className="flex items-start space-x-2">
        {checkbox}
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={props.id}
              className="text-primary text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-secondary text-xs">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return checkbox;
}

export { Checkbox };
