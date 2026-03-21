"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

function PlaygroundSelect({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <Select {...props} />;
}

function PlaygroundSelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectGroup {...props} />;
}

function PlaygroundSelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectValue {...props} />;
}

function PlaygroundSelectTrigger({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectTrigger
      className={cn(
        "bg-secondary rounded-full text-base shadow-none data-[size=default]:h-11",
        className,
      )}
      {...props}
    />
  );
}

function PlaygroundSelectContent({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return <SelectContent className={cn("rounded-3xl", className)} {...props} />;
}

function PlaygroundSelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectLabel className={cn("text-base", className)} {...props} />;
}

function PlaygroundSelectItem({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectItem
      className={cn("h-10 rounded-full px-4 text-base", className)}
      {...props}
    />
  );
}

function PlaygroundSelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectSeparator className={cn(className)} {...props} />;
}

function PlaygroundSelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return <SelectScrollUpButton className={cn(className)} {...props} />;
}

function PlaygroundSelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <SelectScrollDownButton className={cn(className)} {...props} />;
}

export {
  PlaygroundSelect,
  PlaygroundSelectContent,
  PlaygroundSelectItem,
  PlaygroundSelectTrigger,
  PlaygroundSelectValue,
};
