"use client";

import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";

import { primarySidebarAtom } from "@/components/notion-kit/PrimarySidebar/atoms";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronDoubleBackwardIcon } from "@nds-icons/arrowChevronDoubleBackward/default.icon";

export function PrimarySidebarHeader({
  isDesktopApp,
}: {
  isDesktopApp?: boolean;
}) {
  const setIsOpen = useSetAtom(primarySidebarAtom);
  const isOpen = useAtomValue(primarySidebarAtom);

  return (
    <div className={cn("flex flex-col", !isDesktopApp ? "pt-2" : "")}>
      {isDesktopApp && <div className="h-10 w-full" />}
      <div className="flex items-center justify-between px-2">
        <button className="hover:bg-tertiary flex items-center gap-2 rounded-md px-2 py-1">
          <Image
            src="/eric/notion.jpg"
            alt="Notion logo"
            width={40}
            height={40}
            className="h-5 w-5 rounded"
            draggable={false}
          />
          <span className="text-sm font-medium select-none">Notion</span>
        </button>

        {!isDesktopApp && (
          <IconButton
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-quaternary opacity-0 transition-opacity duration-200 group-hover/primary-sidebar:opacity-100"
          >
            <Icon
              icon={arrowChevronDoubleBackwardIcon}
              className="group-hover/button:text-primary"
            />
          </IconButton>
        )}
      </div>
    </div>
  );
}
