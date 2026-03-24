"use client";

import { cn } from "@/utils/cn";
import type { LoadedIconFunction } from "@nds-icons";
import { useAtom } from "jotai";
import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SlipperySidebarTab, slipperySidebarTabAtom } from "./atoms";
import { SlipperySidebarProvider, type TabRegistration } from "./context";
import { QuickActionBar } from "./QuickActionBar";
import { SidebarCTA } from "./SidebarCTA";

interface TabProps {
  id: string;
  label: string;
  icon: LoadedIconFunction;
  count?: number;
  children: React.ReactNode;
}

function Tab(_props: TabProps) {
  return null;
}

function ScrollScrimContainer({
  children,
  hidden,
}: {
  children: React.ReactNode;
  hidden?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setCanScrollUp(scrollTop > 1);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollState, children]);

  return (
    <div
      className={cn(
        "relative min-h-0 flex-col overflow-hidden",
        hidden ? "hidden" : "flex grow",
      )}
    >
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex min-h-0 grow flex-col overflow-y-auto"
      >
        {children}
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-[1] h-12 transition-opacity duration-150",
          canScrollUp ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "linear-gradient(to bottom, var(--background-color-secondary) 0%, transparent 100%)",
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-12 transition-opacity duration-150",
          canScrollDown ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "linear-gradient(to top, var(--background-color-secondary) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

function extractTabs(children: React.ReactNode): {
  registrations: TabRegistration[];
  contentMap: Record<string, React.ReactNode>;
} {
  const registrations: TabRegistration[] = [];
  const contentMap: Record<string, React.ReactNode> = {};

  Children.forEach(children, (child) => {
    if (!isValidElement(child) || child.type !== Tab) return;
    const {
      id,
      label,
      icon,
      count,
      children: tabContent,
    } = child.props as TabProps;
    registrations.push({ id, label, icon, count });
    contentMap[id] = tabContent;
  });

  return { registrations, contentMap };
}

interface SlipperySidebarProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  quickActions?: React.ReactNode;
  cta?: React.ReactNode;
}

function SlipperySidebarRoot({
  children,
  header,
  quickActions,
  cta,
}: SlipperySidebarProps) {
  const [activeTab, setActiveTab] = useAtom(slipperySidebarTabAtom);
  const { registrations, contentMap } = extractTabs(children);

  const effectiveTab = contentMap[activeTab] ? activeTab : registrations[0]?.id;

  return (
    <SlipperySidebarProvider
      tabs={registrations}
      activeTab={effectiveTab ?? "home"}
      setActiveTab={(id) => setActiveTab(id as SlipperySidebarTab)}
    >
      <div data-sidebar className="bg-secondary flex h-full flex-col overflow-hidden border-r">
        {header}

        <div className="mx-auto flex min-h-0 w-full max-w-[800px] grow flex-col">
          {quickActions ?? <QuickActionBar />}

          {registrations.map((tab) => (
            <ScrollScrimContainer key={tab.id} hidden={tab.id !== effectiveTab}>
              {contentMap[tab.id]}
            </ScrollScrimContainer>
          ))}

          {cta ?? <SidebarCTA />}
        </div>
      </div>
    </SlipperySidebarProvider>
  );
}

export const SlipperySidebar = Object.assign(SlipperySidebarRoot, { Tab });

export { AgentItem } from "./AgentItem";
export {
  composeMenuOpenAtom,
  slipperySidebarOpenAtom,
  slipperySidebarTabAtom,
  slipperySidebarWidthAtom,
} from "./atoms";
export type { SlipperySidebarTab } from "./atoms";
export { ChatContent } from "./ChatContent";
export type { ChatGroup, ChatItem } from "./ChatContent";
export { CollapsibleGroup } from "./CollapsibleGroup";
export { useSlipperySidebarContext } from "./context";
export { EventItem } from "./EventItem";
export { FooterLinks } from "./FooterLinks";
export { InboxContent } from "./InboxContent";
export type { InboxNotification } from "./InboxContent";
export { SlipperySidebarLayout } from "./Layout";
export { MeetingsContent } from "./MeetingsContent";
export type { MeetingEvent, MeetingGroup } from "./MeetingsContent";
export { QuickActionBar } from "./QuickActionBar";
export { RecentItem } from "./RecentItem";
export { SidebarCTA } from "./SidebarCTA";
export { SidebarItem } from "./SidebarItem";
export { SidebarSection } from "./SidebarSection";
