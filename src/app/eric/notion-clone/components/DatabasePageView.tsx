"use client";

import { Icon } from "@nds-icons";
import { DatabasePageBlocks } from "./DatabasePageBlocks";
import type { PageProperty } from "./PagePeekModal";

interface DatabasePageViewProps {
  icon: string;
  title: string;
  properties: PageProperty[];
  bodyStorageKey: string;
}

export function DatabasePageView({
  icon,
  title,
  properties,
  bodyStorageKey,
}: DatabasePageViewProps) {
  return (
    <div className="mx-auto w-full max-w-[680px] px-12 pt-10 pb-40">
      <div className="mb-2 text-[60px] leading-[68px]">{icon}</div>
      <h1 className="text-primary text-[32px] font-bold tracking-tight">
        {title}
      </h1>

      <div className="mt-4 space-y-1">
        {properties.map((prop) => (
          <div
            key={prop.label}
            className="hover:bg-secondary-translucent flex min-h-[34px] items-center gap-4 rounded-xs px-1 py-1"
          >
            <span className="text-secondary flex w-[140px] shrink-0 items-center gap-1.5 text-sm">
              <Icon icon={prop.icon} size={14} color="secondary" />
              {prop.label}
            </span>
            <div className="min-w-0 flex-1 text-sm">{prop.value}</div>
          </div>
        ))}
      </div>

      <hr className="border-secondary mt-4 border-t" />

      <div className="mt-4">
        <DatabasePageBlocks storageKey={bodyStorageKey} />
      </div>
    </div>
  );
}
