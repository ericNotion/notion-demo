"use client";

import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { eyeIcon } from "@nds-icons/eye/default.icon";
import { eyeSlashIcon } from "@nds-icons/eyeSlash/default.icon";
import { gearIcon } from "@nds-icons/gear/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import type { ViewType } from "./ViewSwitcher";

export interface PropertyDef {
  id: string;
  name: string;
  type: string;
}

interface DatabaseSettingsPopoverProps {
  properties: PropertyDef[];
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export function DatabaseSettingsPopover({
  properties,
  activeView,
  onViewChange,
}: DatabaseSettingsPopoverProps) {
  const [hiddenProps, setHiddenProps] = useState<Set<string>>(new Set());

  const toggleProp = (id: string) => {
    setHiddenProps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton variant="ghost" size="sm">
          <Icon icon={gearIcon} size={16} color="secondary" />
        </IconButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={4}
          className="bg-elevated dark:shadow-contrast z-50 w-[280px] rounded-xl border border-[var(--theme-colors-border-primary)] p-3 shadow-lg"
        >
          <div className="mb-3">
            <h4 className="text-primary mb-2 text-xs font-semibold tracking-wide uppercase">
              Layout
            </h4>
            <div className="flex gap-1">
              {(["table", "board"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => onViewChange(v)}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                    activeView === v
                      ? "bg-secondary text-primary"
                      : "text-tertiary hover:bg-secondary-translucent",
                  )}
                >
                  <Icon
                    icon={v === "table" ? viewTableIcon : viewBoardIcon}
                    size={14}
                    color={activeView === v ? "primary" : "tertiary"}
                  />
                  {v === "table" ? "Table" : "Board"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary mb-2 text-xs font-semibold tracking-wide uppercase">
              Properties
            </h4>
            <div className="flex flex-col gap-0.5">
              {properties.map((prop) => {
                const hidden = hiddenProps.has(prop.id);
                return (
                  <div
                    key={prop.id}
                    className="hover:bg-secondary-translucent flex items-center justify-between rounded-md px-2 py-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm">{prop.name}</span>
                      <span className="text-tertiary bg-secondary rounded-xs px-1.5 py-0.5 text-[10px] font-medium">
                        {prop.type}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleProp(prop.id)}
                      className="text-tertiary hover:text-primary"
                    >
                      <Icon
                        icon={hidden ? eyeSlashIcon : eyeIcon}
                        size={14}
                        color={hidden ? "tertiary" : "secondary"}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <Popover.Arrow className="fill-[var(--background-color-elevated)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
