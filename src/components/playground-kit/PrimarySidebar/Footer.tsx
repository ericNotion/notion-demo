"use client";
import { Icon } from "@nds-icons";

import { IconButton } from "@/components/ui/icon-button";
import { NotionCalendarIcon } from "@/icons/NotionCalendarIcon";
import { NotionMailIcon } from "@/icons/NotionMailIcon";
import { questionMarkCircleIcon } from "@nds-icons/questionMarkCircle/default.icon";

export function PrimarySidebarFooter() {
  return (
    <div className="flex items-center gap-px p-1">
      <IconButton
        variant="ghost"
        className="text-tertiary hover:text-primary"
        size="sm"
      >
        <NotionMailIcon />
      </IconButton>
      <IconButton
        variant="ghost"
        className="text-tertiary hover:text-primary"
        size="sm"
      >
        <NotionCalendarIcon />
      </IconButton>
      <div className="flex-1" />
      <IconButton
        variant="ghost"
        className="text-tertiary hover:text-primary"
        size="sm"
      >
        <Icon icon={questionMarkCircleIcon} />
      </IconButton>
    </div>
  );
}
