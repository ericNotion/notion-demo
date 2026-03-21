"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/utils/cn";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

function PlaygroundDropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenu {...props} />;
}

function PlaygroundDropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuTrigger {...props} />;
}

function PlaygroundDropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPortal {...props} />;
}

function PlaygroundDropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuContent
      className={cn("rounded-2xl p-1.5", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuGroup className={cn("p-0", className)} {...props} />;
}

function PlaygroundDropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <DropdownMenuItem
      className={cn("h-10 rounded-xl px-3 text-base", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuCheckboxItem
      className={cn("h-10 rounded-xl px-3 text-base", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuRadioGroup className="p-0" {...props} />;
}

function PlaygroundDropdownMenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuRadioItem
      className={cn("h-10 rounded-xl px-3 text-base", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuLabel className={cn("px-3 text-sm", className)} {...props} />
  );
}

function PlaygroundDropdownMenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuGroupLabel
      className={cn("px-3 text-sm", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuSeparator className={cn("mx-2 my-1", className)} {...props} />
  );
}

function PlaygroundDropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return <DropdownMenuShortcut className={cn(className)} {...props} />;
}

function PlaygroundDropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuSub {...props} />;
}

function PlaygroundDropdownMenuSubTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuSubTrigger
      className={cn("h-10 rounded-xl px-3 text-base", className)}
      {...props}
    />
  );
}

function PlaygroundDropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuSubContent
      className={cn("rounded-2xl p-1.5", className)}
      {...props}
    />
  );
}

export {
  PlaygroundDropdownMenu,
  PlaygroundDropdownMenuContent,
  PlaygroundDropdownMenuGroup,
  PlaygroundDropdownMenuItem,
  PlaygroundDropdownMenuSeparator,
  PlaygroundDropdownMenuTrigger,
};
