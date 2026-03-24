"use client";

import {
  CollapsibleGroup,
  EventItem,
  FooterLinks,
  SidebarSection,
  useSlipperySidebarContext,
} from "@/components/notion-kit/SlipperySidebar";
import { Icon } from "@nds-icons";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import { useAtomValue } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import { allPagesAtom, upcomingEvents } from "../data";
import { SyncedSidebarItem } from "./SyncedSidebarItem";

export function HomeContent() {
  const { setActiveTab: setTab } = useSlipperySidebarContext();
  const pathname = usePathname();
  const router = useRouter();
  const pages = useAtomValue(allPagesAtom);

  return (
    <div className="flex min-h-0 grow flex-col px-2 pt-1.5">
      <SidebarSection title="Upcoming events">
        {upcomingEvents.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            timeRange={event.timeRange}
            color={event.color}
            onClick={() => event.href && router.push(event.href)}
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
          {pages
            .filter(
              (p) => p.section === "favorites" && p.kind !== "database-item",
            )
            .map((page) => (
              <SyncedSidebarItem
                key={page.href}
                page={page}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="private" label="Private">
          {pages
            .filter(
              (p) => p.section === "private" && p.kind !== "database-item",
            )
            .map((page) => (
              <SyncedSidebarItem
                key={page.href}
                page={page}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="shared" label="Shared">
          {pages
            .filter((p) => p.section === "shared" && p.kind !== "database-item")
            .map((page) => (
              <SyncedSidebarItem
                key={page.href}
                page={page}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>
      </div>

      <FooterLinks />
    </div>
  );
}
