"use client";

import { cn } from "@/utils/cn";
import * as DialogModule from "@base-ui/react/dialog";
import { Icon } from "@nds-icons";
import { xMarkSmallIcon } from "@nds-icons/xMark/small.icon";
import * as React from "react";

const Dialog = DialogModule.Dialog;

function PlaygroundDialog({
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}

function PlaygroundDialogClose({
  className,
  children,
  asChild,
  ...props
}: React.ComponentProps<typeof Dialog.Close> & { asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) {
    return (
      <Dialog.Close className={cn(className)} render={children} {...props} />
    );
  }
  return (
    <Dialog.Close className={cn(className)} {...props}>
      {children}
    </Dialog.Close>
  );
}

function PlaygroundDialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog.Popup> & {
  showCloseButton?: boolean;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/30 dark:bg-black/70",
          "transition-opacity duration-200",
          "data-starting-style:opacity-0",
          "data-ending-style:opacity-0",
        )}
      />
      <Dialog.Popup
        className={cn(
          "bg-elevated dark:shadow-contrast",
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-3xl p-6 shadow-2xl",
          "transition-[transform,scale,opacity] duration-200",
          "data-starting-style:scale-95 data-starting-style:opacity-0",
          "data-ending-style:scale-95 data-ending-style:opacity-0",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <Dialog.Close className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden">
            <Icon icon={xMarkSmallIcon} size={16} />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        )}
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

function PlaygroundDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn(
        "text-primary text-lg leading-none font-semibold",
        className,
      )}
      {...props}
    />
  );
}

function PlaygroundDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={cn("text-secondary text-base", className)}
      {...props}
    />
  );
}

function PlaygroundDialogTrigger({
  className,
  children,
  asChild,
  ...props
}: React.ComponentProps<typeof Dialog.Trigger> & { asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) {
    return (
      <Dialog.Trigger className={cn(className)} render={children} {...props} />
    );
  }
  return (
    <Dialog.Trigger className={cn(className)} {...props}>
      {children}
    </Dialog.Trigger>
  );
}

export {
  PlaygroundDialog,
  PlaygroundDialogClose,
  PlaygroundDialogContent,
  PlaygroundDialogDescription,
  PlaygroundDialogTitle,
  PlaygroundDialogTrigger,
};
