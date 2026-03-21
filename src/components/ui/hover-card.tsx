"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as React from "react";

import { cn } from "@/utils/cn";

const HoverCardRoot = HoverCardPrimitive.Root;
const HoverCardPortal = HoverCardPrimitive.Portal;

interface HoverCardProps extends React.ComponentProps<
  typeof HoverCardPrimitive.Root
> {
  trigger?: React.ReactNode;
}

function HoverCard({ trigger, children, ...props }: HoverCardProps) {
  if (trigger) {
    return (
      <HoverCardPrimitive.Root data-slot="hover-card" {...props}>
        <HoverCardPrimitive.Trigger asChild>
          {trigger}
        </HoverCardPrimitive.Trigger>
        {children}
      </HoverCardPrimitive.Root>
    );
  }
  return (
    <HoverCardPrimitive.Root data-slot="hover-card" {...props}>
      {children}
    </HoverCardPrimitive.Root>
  );
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        collisionPadding={8}
        className={cn(
          "bg-elevated text-primary dark:shadow-contrast data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-[var(--radix-hover-card-content-available-height)] max-w-[var(--radix-hover-card-content-available-width)] origin-[var(--radix-hover-card-content-transform-origin)] rounded-lg shadow-lg ring-[0.5px] ring-black/10 outline-hidden dark:border-0",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

function HoverCardArrow({
  className,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Arrow>) {
  return (
    <HoverCardPrimitive.Arrow
      data-slot="hover-card-arrow"
      className={cn("bg-elevated", className)}
      {...props}
    />
  );
}

// Simple wrapper for common usage
function HoverCardWrapper({
  trigger,
  children,
  ...rootProps
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
} & React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return (
    <HoverCardRoot {...rootProps}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardPortal>{children}</HoverCardPortal>
    </HoverCardRoot>
  );
}

export {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardRoot,
  HoverCardTrigger,
};
