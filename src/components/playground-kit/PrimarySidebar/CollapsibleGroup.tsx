"use client";

import { CollapsibleGroup as BaseCollapsibleGroup } from "@/components/notion-kit/PrimarySidebar/CollapsibleGroup";
import type { CollapsibleGroupId } from "@/components/notion-kit/PrimarySidebar/atoms";

export function CollapsibleGroup({
  children,
  label,
  id,
  triggerAccessory,
}: {
  children?: React.ReactNode;
  label: string;
  id: CollapsibleGroupId;
  triggerAccessory?: React.ReactNode;
}) {
  return (
    <BaseCollapsibleGroup
      label={label}
      id={id}
      triggerAccessory={triggerAccessory}
      className="mb-2"
      contentClassName="pb-4"
    >
      {children}
    </BaseCollapsibleGroup>
  );
}
