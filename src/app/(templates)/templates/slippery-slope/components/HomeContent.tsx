"use client";

import {
  AgentItem,
  CollapsibleGroup,
  EventItem,
  FooterLinks,
  SidebarItem,
  SidebarSection,
  useSlipperySidebarContext,
} from "@/components/notion-kit/SlipperySidebar";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import {
  agents,
  favoritePages,
  privatePages,
  sharedPages,
  upcomingEvents,
} from "../data";

export function HomeContent({ className }: { className?: string }) {
  const { setActiveTab: setTab } = useSlipperySidebarContext();

  return (
    <div className={cn("flex min-h-0 grow flex-col px-2 pt-1.5", className)}>
      <SidebarSection title="Upcoming events">
        {upcomingEvents.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            timeRange={event.timeRange}
            color={event.color}
          />
        ))}
        <button
          type="button"
          onClick={() => setTab("meetings")}
          className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1"
        >
          <span className="flex size-6 shrink-0 items-center justify-center">
            <Icon icon={arrowDiagonalUpRightIcon} size={20} color="secondary" />
          </span>
          <span className="text-secondary text-sm/5 font-medium">
            Open Meetings
          </span>
        </button>
      </SidebarSection>

      <div className="flex flex-col">
        <CollapsibleGroup id="favorites" label="Favorites">
          {favoritePages.map((page) => (
            <SidebarItem
              key={page.label}
              icon={
                <span className="flex size-6 items-center justify-center text-base/5">
                  {page.emoji}
                </span>
              }
              label={page.label}
              href={page.href}
            />
          ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="private" label="Private">
          {privatePages.map((page) => (
            <SidebarItem
              key={page.label}
              icon={
                <span className="flex size-6 items-center justify-center text-base/5">
                  {page.emoji}
                </span>
              }
              label={page.label}
              href={page.href}
            />
          ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="shared" label="Shared">
          {sharedPages.map((page) => (
            <SidebarItem
              key={page.label}
              icon={
                <span className="flex size-6 items-center justify-center text-base/5">
                  {page.emoji}
                </span>
              }
              label={page.label}
              href={page.href}
            />
          ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="agents" label="Agents">
          {agents.map((agent) => (
            <AgentItem key={agent.id} name={agent.name} avatar={agent.avatar} />
          ))}
        </CollapsibleGroup>
      </div>

      <FooterLinks />
    </div>
  );
}
