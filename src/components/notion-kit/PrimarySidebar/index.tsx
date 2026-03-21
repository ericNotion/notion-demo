"use client";
import { Icon } from "@nds-icons";

import { useAtom, useSetAtom } from "jotai";
import { useHotkeys } from "react-hotkeys-hook";

import {
  collapseAllGroupsAtom,
  primarySidebarAtom,
} from "@/components/notion-kit/PrimarySidebar/atoms";
import { CollapsibleGroup } from "@/components/notion-kit/PrimarySidebar/CollapsibleGroup";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
import { SidebarItem } from "@/components/notion-kit/PrimarySidebar/SidebarItem";
import { aiFaceIcon } from "@/nds-icons/src/aiFace/default.icon";
import { microphoneTextIcon } from "@/nds-icons/src/microphoneText/default.icon";
import { pageIcon } from "@/nds-icons/src/page/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";

export { PrimarySidebarLayout } from "./Layout";

export function PrimarySidebar({
  isDesktopApp,
  children,
  globalItems,
  displayHeader = true,
}: {
  isDesktopApp?: boolean;
  children?: React.ReactNode;
  globalItems?: React.ReactNode;
  displayHeader?: boolean;
}) {
  const collapseAllGroups = useSetAtom(collapseAllGroupsAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(primarySidebarAtom);

  // Add keyboard shortcut for collapsing all groups
  useHotkeys("alt+l", (e) => {
    e.preventDefault();
    collapseAllGroups();
  });

  // Add hotkey for toggling sidebar
  useHotkeys(
    "mod+period",
    () => {
      setSidebarOpen(!sidebarOpen);
    },
    {
      enableOnFormTags: true,
      preventDefault: true,
    },
  );

  const defaultChildren = (
    <>
      <CollapsibleGroup id="favorites" label="Favorites">
        <SidebarItem
          icon={<Icon color="inherit" icon={pageIcon} />}
          label="CRM"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon color="inherit" icon={pageIcon} />}
          label="Projects"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon color="inherit" icon={pageIcon} />}
          label="Thinking UI"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon color="inherit" icon={pageIcon} />}
          label="Unified Chat"
          href="#"
          isActive={false}
        />
      </CollapsibleGroup>
      <CollapsibleGroup id="private" label="Private">
        <div />
      </CollapsibleGroup>
      <CollapsibleGroup id="shared" label="Shared">
        <div />
      </CollapsibleGroup>
      <CollapsibleGroup id="teamspaces" label="Teamspaces">
        <div />
      </CollapsibleGroup>
    </>
  );

  const defaultGlobalItems = (
    <>
      <SidebarItem
        icon={<Icon color="inherit" icon={magnifyingGlassIcon} />}
        label="Search"
        href="#"
      />
      <SidebarItem
        icon={<Icon color="inherit" icon={homeIcon} />}
        label="Home"
        href="#"
      />
      <SidebarItem
        icon={<Icon color="inherit" icon={microphoneTextIcon} />}
        label="Meetings"
        href="#"
      />
      <SidebarItem
        icon={<Icon color="inherit" icon={aiFaceIcon} />}
        label="Notion AI"
        href="#"
      />
      <SidebarItem
        icon={<Icon color="inherit" icon={inboxIcon} />}
        label="Inbox"
        href="#"
      />
    </>
  );

  return (
    <div className="bg-secondary flex h-full flex-col gap-2 border-r">
      {displayHeader && <PrimarySidebarHeader isDesktopApp={isDesktopApp} />}

      <div className="mb-2 flex flex-col gap-px px-2">
        {globalItems || defaultGlobalItems}
      </div>

      <div className="flex flex-1 flex-col gap-px overflow-auto">
        <div className="flex flex-col gap-px px-2">
          {children || defaultChildren}
        </div>
      </div>
    </div>
  );
}
