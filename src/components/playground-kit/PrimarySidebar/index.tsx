"use client";
import { Icon } from "@nds-icons";
import { personIcon } from "@nds-icons/person/default.icon";

import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { useHotkeys } from "react-hotkeys-hook";

import { AISidebarAtom } from "@/components/playground-kit/AISidebar/atoms";
import {
  collapseAllGroupsAtom,
  primarySidebarAtom,
} from "@/components/playground-kit/PrimarySidebar/atoms";
import { CollapsibleGroup } from "@/components/playground-kit/PrimarySidebar/CollapsibleGroup";
import { PrimarySidebarFooter } from "@/components/playground-kit/PrimarySidebar/Footer";
import { PrimarySidebarHeader } from "@/components/playground-kit/PrimarySidebar/Header";
import { SidebarItem } from "@/components/playground-kit/PrimarySidebar/SidebarItem";
import { aiBlockIcon } from "@nds-icons/aiBlock/default.icon";
import { bubbleEllipsesIcon } from "@nds-icons/bubbleEllipses/default.icon";
import { checklistIcon } from "@nds-icons/checklist/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";

export function PrimarySidebar({
  children,
  globalItems,
  displayHeader = true,
  displayNewButton: _displayNewButton = true,
  displayFooter = true,
}: {
  children?: React.ReactNode;
  globalItems?: React.ReactNode;
  displayHeader?: boolean;
  displayNewButton?: boolean;
  displayFooter?: boolean;
}) {
  const collapseAllGroups = useSetAtom(collapseAllGroupsAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(primarySidebarAtom);
  const [aiSidebarOpen, setAISidebarOpen] = useAtom(AISidebarAtom);
  // Add keyboard shortcut for collapsing all groups
  useHotkeys("alt+l", (e) => {
    e.preventDefault();
    collapseAllGroups();
  });

  // Add hotkey for toggling sidebar
  useHotkeys(
    "mod+period",
    () => {
      const isMixed = sidebarOpen !== aiSidebarOpen;
      if (isMixed) {
        setSidebarOpen(false);
        setAISidebarOpen(false);
      } else {
        setSidebarOpen(!sidebarOpen);
        setAISidebarOpen(false);
      }
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
          icon={<Icon icon={personIcon} />}
          label="CRM"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon icon={checklistIcon} />}
          label="Projects"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon icon={aiBlockIcon} />}
          label="Thinking UI"
          href="#"
          isActive={false}
        />
        <SidebarItem
          icon={<Icon icon={bubbleEllipsesIcon} />}
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
        icon={<Icon icon={homeIcon} />}
        label="Home"
        href="#"
        isActive={true}
      />
      <SidebarItem
        icon={<Icon icon={magnifyingGlassIcon} />}
        label="Search"
        href="#"
        isActive={false}
      />
      <SidebarItem
        icon={<Icon icon={inboxIcon} />}
        label="Inbox"
        href="#"
        isActive={false}
      />
    </>
  );

  return (
    <AnimatePresence initial={false}>
      {sidebarOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "var(--primary-sidebar-width)", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="group/primary-sidebar bg-secondary z-10 flex-none overflow-hidden border-r"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-full min-w-[var(--primary-sidebar-width)] flex-col"
          >
            {displayHeader && (
              <div className="px-2">
                <PrimarySidebarHeader />
              </div>
            )}

            <div className="my-4 mt-0 flex flex-col gap-px px-2">
              {globalItems || defaultGlobalItems}
            </div>

            <div className="flex flex-1 flex-col gap-px overflow-auto">
              <div className="flex flex-col gap-px px-2">
                {children || defaultChildren}
              </div>
            </div>

            {displayFooter && (
              <div className="px-2 pb-2">
                <PrimarySidebarFooter />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
