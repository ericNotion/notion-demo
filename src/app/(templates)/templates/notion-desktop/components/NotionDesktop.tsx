"use client";

import { DesktopMenuBar } from "@/components/desktop-kit/DesktopMenuBar";
import { DesktopUI } from "@/components/desktop-kit/DesktopUI";
import { WindowChrome } from "@/components/desktop-kit/WindowChrome";
import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import {
  PrimarySidebar,
  PrimarySidebarLayout,
} from "@/components/notion-kit/PrimarySidebar";
import { primarySidebarAtom } from "@/components/notion-kit/PrimarySidebar/atoms";
import { IconButton } from "@/components/ui/icon-button";
import { pageIcon } from "@/nds-icons/src/page/default.icon";
import { xMarkSmallIcon } from "@/nds-icons/src/xMark/small.icon";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleLeftIcon } from "@nds-icons/arrowChevronSingleLeft/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";
import { blocksAtom, documentTitleAtom, lastSavedAtom } from "../atoms";

interface Tab {
  id: string;
  title: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeTabId: string;
  onTabClick: (tabId: string) => void;
  onAddTab: () => void;
  onCloseTab: (tabId: string) => void;
  sidebarOpen: boolean;
}

function TabBar({
  tabs,
  activeTabId,
  onTabClick,
  onAddTab,
  onCloseTab,
  sidebarOpen,
}: TabBarProps) {
  const [hoveredTabId, setHoveredTabId] = useState<string | null>(null);
  const showCloseButton = tabs.length > 1;

  return (
    <WindowChrome.DragHandle
      className={cn(
        "bg-secondary border-secondary flex h-9 shrink-0 items-center border-b",
        !sidebarOpen && "pl-24",
      )}
    >
      {/* Navigation arrows */}
      <div className="flex items-center gap-0.5 px-1">
        <IconButton variant="ghost">
          <Icon icon={arrowChevronSingleLeftIcon} color="secondary" />
        </IconButton>
        <IconButton variant="ghost">
          <Icon icon={arrowChevronSingleRightIcon} color="secondary" />
        </IconButton>
      </div>

      {/* Tabs */}
      {tabs.map((tab, index) => {
        const isActive = tab.id === activeTabId;
        const isHovered = tab.id === hoveredTabId;
        const isLast = index === tabs.length - 1;

        return (
          <div
            key={tab.id}
            className={cn(
              "relative flex h-[35px] translate-y-px cursor-pointer items-center gap-1 border-b border-l pl-2",
              isLast && "border-r",
              isActive
                ? "dark:bg-main border-b-transparent bg-white"
                : "border-secondary bg-secondary hover:bg-tertiary",
              showCloseButton ? "pr-8" : "pr-3.5",
            )}
            onClick={() => onTabClick(tab.id)}
            onMouseEnter={() => setHoveredTabId(tab.id)}
            onMouseLeave={() => setHoveredTabId(null)}
          >
            <Icon icon={pageIcon} color="secondary" className="shrink-0" />
            <span className="text-primary w-[16ch] truncate text-[13px] font-medium">
              {tab.title || "Untitled"}
            </span>

            {/* Close button with gradient underlay */}
            {showCloseButton && isHovered && (
              <div className="absolute top-0 right-0 flex h-full items-center pr-1">
                {/* Gradient fade */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-y-0 right-6 w-4",
                    isActive
                      ? "bg-gradient-to-r from-transparent to-white dark:to-[var(--bg-main)]"
                      : "bg-gradient-to-r from-transparent to-[var(--bg-secondary)]",
                  )}
                />
                <IconButton
                  variant="ghost"
                  size="sm"
                  className="relative z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseTab(tab.id);
                  }}
                >
                  <Icon icon={xMarkSmallIcon} size="sm" color="secondary" />
                </IconButton>
              </div>
            )}
          </div>
        );
      })}

      {/* New tab button */}
      <div className="px-1">
        <IconButton variant="ghost" onClick={onAddTab}>
          <Icon icon={plusIcon} color="secondary" />
        </IconButton>
      </div>
    </WindowChrome.DragHandle>
  );
}

let tabIdCounter = 1;

function NotionWindow() {
  const documentTitle = useAtomValue(documentTitleAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(primarySidebarAtom);

  // Tab state management
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "tab-0", title: documentTitle || "Untitled" },
  ]);
  const [activeTabId, setActiveTabId] = useState("tab-0");

  // Keep the first tab's title in sync with the document title
  const displayTabs = tabs.map((tab, index) =>
    index === 0 ? { ...tab, title: documentTitle || "Untitled" } : tab,
  );

  function handleAddTab() {
    const newTab: Tab = {
      id: `tab-${tabIdCounter++}`,
      title: "New Tab",
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  }

  function handleCloseTab(tabId: string) {
    if (tabs.length <= 1) return;

    const tabIndex = tabs.findIndex((t) => t.id === tabId);
    const newTabs = tabs.filter((t) => t.id !== tabId);
    setTabs(newTabs);

    // If closing the active tab, switch to adjacent tab
    if (tabId === activeTabId) {
      const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
      setActiveTabId(newTabs[newActiveIndex].id);
    }
  }

  return (
    <WindowChrome
      trafficLightsPosition={{ x: 12, y: 6 }}
      minWidth={600}
      minHeight={400}
      initialSize={{ width: 1000, height: 700 }}
      showSidebarToggle
      sidebarOpen={sidebarOpen}
      onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
    >
      <PrimarySidebarLayout sidebar={<PrimarySidebar isDesktopApp />}>
        {/* Main content column */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Row 1: Tabs row */}
          <TabBar
            tabs={displayTabs}
            activeTabId={activeTabId}
            onTabClick={setActiveTabId}
            onAddTab={handleAddTab}
            onCloseTab={handleCloseTab}
            sidebarOpen={sidebarOpen}
          />

          {/* Row 2: Page topbar */}
          <PageTopBar title={documentTitleAtom} />

          {/* Editor content */}
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto px-8">
            <div className="pt-[40px] pb-[4px]">
              <div className="h-[28px]"></div>
            </div>
            <TitleEditor
              className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-none"
              titleAtom={documentTitleAtom}
              lastSavedAtom={lastSavedAtom}
            />
            <div className="mt-[16px] flex-1">
              <BlockEditor
                className="mx-auto w-full max-w-[710px]"
                blocksAtom={blocksAtom}
                lastSavedAtom={lastSavedAtom}
              />
            </div>
          </div>
        </div>
      </PrimarySidebarLayout>
    </WindowChrome>
  );
}

export default function NotionDesktop() {
  return (
    <DesktopUI>
      <DesktopMenuBar />

      {/* Window container - positioned below menu bar */}
      <div className="relative mt-7 flex-1">
        <NotionWindow />
      </div>
    </DesktopUI>
  );
}
