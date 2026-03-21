"use client";
import { Icon } from "@nds-icons";
import { globeIcon } from "@nds-icons/globe/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { useState } from "react";
import { chatStateAtom } from "./atoms";

function SimpleToolsDropdown({
  side = "bottom",
  align = "start",
}: {
  side?: "top" | "bottom";
  align?: "start" | "end";
}) {
  const [reasoningState, setReasoningState] = useAtom(chatStateAtom);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <IconButton
          tooltip="Chat settings"
          variant="ghost"
          aria-label="Toggle tools menu"
          className={cn(
            "data-[state=open]:bg-tertiary rounded-full dark:data-[state=open]:bg-white/10",
          )}
        >
          <Icon icon={slidersIcon} />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onFocusOutside={() => setOpen(false)}
        align={align}
        side={side}
        className="w-72"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setReasoningState({
                ...reasoningState,
                webSearch: !reasoningState.webSearch,
              });
            }}
          >
            <Icon icon={globeIcon} />
            <DropdownMenuLabel>Web search</DropdownMenuLabel>
            <Switch
              checked={reasoningState.webSearch}
              onClick={(e) => e.stopPropagation()}
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
