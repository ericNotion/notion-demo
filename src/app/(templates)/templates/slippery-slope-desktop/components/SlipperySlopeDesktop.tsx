"use client";

import { DesktopMenuBar } from "@/components/desktop-kit/DesktopMenuBar";
import { DesktopUI } from "@/components/desktop-kit/DesktopUI";
import { WindowChrome } from "@/components/desktop-kit/WindowChrome";
import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import {
  ChatContent,
  InboxContent,
  MeetingsContent,
  SlipperySidebar,
  SlipperySidebarLayout,
  slipperySidebarOpenAtom,
} from "@/components/notion-kit/SlipperySidebar";
import { IconButton } from "@/components/ui/icon-button";
import { pageIcon } from "@/nds-icons/src/page/default.icon";
import { sidebarLeftIcon } from "@/nds-icons/src/sidebarLeft/default.icon";
import { xMarkSmallIcon } from "@/nds-icons/src/xMark/small.icon";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleLeftIcon } from "@nds-icons/arrowChevronSingleLeft/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { HomeContent } from "../../slippery-slope/components/HomeContent";
import {
  chatGroups,
  inboxNotifications,
  meetingGroups,
} from "../../slippery-slope/data";
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
  onSidebarToggle: () => void;
}

function TabBar({
  tabs,
  activeTabId,
  onTabClick,
  onAddTab,
  onCloseTab,
  sidebarOpen,
  onSidebarToggle,
}: TabBarProps) {
  const [hoveredTabId, setHoveredTabId] = useState<string | null>(null);
  const showCloseButton = tabs.length > 1;

  return (
    <WindowChrome.DragHandle
      className={cn(
        "bg-secondary border-secondary flex h-9 shrink-0 items-center border-b",
        !sidebarOpen && "pl-18",
      )}
    >
      <div className="flex items-center gap-0.5 px-1">
        <IconButton
          variant="ghost"
          onClick={onSidebarToggle}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Icon icon={sidebarLeftIcon} color="secondary" />
        </IconButton>
        <IconButton variant="ghost">
          <Icon icon={arrowChevronSingleLeftIcon} color="secondary" />
        </IconButton>
        <IconButton variant="ghost">
          <Icon icon={arrowChevronSingleRightIcon} color="secondary" />
        </IconButton>
      </div>

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

            {showCloseButton && isHovered && (
              <div className="absolute top-0 right-0 flex h-full items-center pr-1">
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

      <div className="px-1">
        <IconButton variant="ghost" onClick={onAddTab}>
          <Icon icon={plusIcon} color="secondary" />
        </IconButton>
      </div>
    </WindowChrome.DragHandle>
  );
}

function DesktopSidebarHeader() {
  return (
    <WindowChrome.DragHandle className="flex h-9 shrink-0 items-center pr-2 pl-[76px]">
      <button className="hover:bg-tertiary mt-1 flex items-center gap-2 rounded-md px-2 py-1">
        <Image
          src="/img/notion.jpg"
          alt="Notion logo"
          width={40}
          height={40}
          className="h-5 w-5 rounded"
          draggable={false}
        />
        <span className="text-sm font-medium select-none">Notion</span>
      </button>
    </WindowChrome.DragHandle>
  );
}

let tabIdCounter = 1;

function NotionWindow() {
  const documentTitle = useAtomValue(documentTitleAtom);
  const [sidebarOpen, setSidebarOpen] = useAtom(slipperySidebarOpenAtom);

  const [tabs, setTabs] = useState<Tab[]>([
    { id: "tab-0", title: documentTitle || "Untitled" },
  ]);
  const [activeTabId, setActiveTabId] = useState("tab-0");

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

    if (tabId === activeTabId) {
      const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
      setActiveTabId(newTabs[newActiveIndex].id);
    }
  }

  return (
    <WindowChrome
      trafficLightsPosition={{ x: 16, y: 14 }}
      minWidth={600}
      minHeight={400}
      initialSize={{ width: 1000, height: 700 }}
    >
      <SlipperySidebarLayout
        sidebar={
          <SlipperySidebar header={<DesktopSidebarHeader />}>
            <SlipperySidebar.Tab id="home" label="Home" icon={homeIcon}>
              <HomeContent />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab id="chats" label="Chat" icon={chatBubbleIcon}>
              <ChatContent groups={chatGroups} />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab
              id="meetings"
              label="Meetings"
              icon={calendarAltIcon}
            >
              <MeetingsContent groups={meetingGroups} />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab
              id="inbox"
              label="Inbox"
              icon={inboxIcon}
              count={3}
            >
              <InboxContent notifications={inboxNotifications} />
            </SlipperySidebar.Tab>
          </SlipperySidebar>
        }
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <TabBar
            tabs={displayTabs}
            activeTabId={activeTabId}
            onTabClick={setActiveTabId}
            onAddTab={handleAddTab}
            onCloseTab={handleCloseTab}
            sidebarOpen={sidebarOpen}
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          />

          <PageTopBar title={documentTitleAtom} />

          <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto px-8">
            <div className="pt-[40px] pb-[4px]">
              <div className="h-[28px]" />
            </div>
            <TitleEditor
              className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-none"
              titleAtom={documentTitleAtom}
              lastSavedAtom={lastSavedAtom}
            />
            <div className="mt-4 flex-1">
              <BlockEditor
                className="mx-auto w-full max-w-[710px]"
                blocksAtom={blocksAtom}
                lastSavedAtom={lastSavedAtom}
              />
            </div>
          </div>
        </div>
      </SlipperySidebarLayout>
    </WindowChrome>
  );
}

export default function SlipperySlopeDesktop() {
  return (
    <DesktopUI>
      <DesktopMenuBar />
      <div className="relative mt-7 flex-1">
        <NotionWindow />
      </div>
    </DesktopUI>
  );
}
