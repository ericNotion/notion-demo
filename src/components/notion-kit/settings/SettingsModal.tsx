"use client";

import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as React from "react";

import { cn } from "@/utils/cn";
import {
  defaultSections,
  SettingsSidebar,
  type SettingsSidebarSection,
} from "./SettingsSidebar";

interface SettingsModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  sections?: SettingsSidebarSection[];
  children?: React.ReactNode;
  className?: string;
}

export function SettingsModal({
  open,
  onOpenChange,
  activeSection = "preferences",
  onSectionChange,
  sections = defaultSections,
  children,
  className,
}: SettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className={cn(
            "bg-elevated data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 flex h-[90vh] max-h-[833px] w-[90vw] max-w-[1150px] min-w-[540px] translate-x-[-50%] translate-y-[-50%] items-stretch overflow-hidden rounded-xl shadow-[0px_9px_24px_0px_rgba(15,15,15,0.2),0px_3px_6px_0px_rgba(15,15,15,0.1),0px_0px_0px_1px_rgba(15,15,15,0.05)]",
            className,
          )}
        >
          <VisuallyHidden.Root>
            <DialogTitle>Settings</DialogTitle>
          </VisuallyHidden.Root>
          <SettingsSidebar
            sections={sections}
            activeItem={activeSection}
            onSelect={onSectionChange}
          />
          <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

// Compound component for the content panel area
interface SettingsModalPanelProps {
  children?: React.ReactNode;
  className?: string;
}

export function SettingsModalPanel({
  children,
  className,
}: SettingsModalPanelProps) {
  return (
    <div className={cn("flex flex-1 flex-col gap-7 px-8 pt-6 pb-8", className)}>
      {children}
    </div>
  );
}

// Section header component
interface SettingsModalHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SettingsModalHeader({
  title,
  description,
  className,
}: SettingsModalHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-1 py-2", className)}>
      <h1 className="text-primary text-[17px] leading-[22px] font-semibold">
        {title}
      </h1>
      {description && <p className="text-secondary text-sm">{description}</p>}
    </div>
  );
}

// Settings section component (for grouping related settings)
interface SettingsModalSectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export function SettingsModalSection({
  title,
  children,
  className,
}: SettingsModalSectionProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h2 className="text-primary text-sm font-semibold">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

// Individual setting row component
interface SettingsModalRowProps {
  label: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SettingsModalRow({
  label,
  description,
  children,
  className,
}: SettingsModalRowProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div className="flex flex-col gap-0.5">
        <span className="text-primary text-sm">{label}</span>
        {description && (
          <span className="text-secondary text-sm">{description}</span>
        )}
      </div>
      {children}
    </div>
  );
}
