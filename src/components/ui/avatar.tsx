"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/utils/cn";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full ring-[0.5px] ring-black/10 dark:ring-white/5",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-gray-primary-translucent flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function AvatarWithFallback({
  src,
  fallback,
  className,
}: {
  src: string;
  fallback: string;
  className?: string;
}) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}

export { Avatar, AvatarFallback, AvatarImage, AvatarWithFallback };
