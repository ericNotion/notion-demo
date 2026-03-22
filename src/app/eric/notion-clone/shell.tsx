"use client";

import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
import { StarField } from "./components/StarField";
import {
  AgentItem,
  ChatContent,
  CollapsibleGroup,
  EventItem,
  FooterLinks,
  InboxContent,
  MeetingsContent,
  QuickActionBar,
  SidebarCTA,
  SidebarItem,
  SidebarSection,
  SlipperySidebar,
  SlipperySidebarLayout,
  useSlipperySidebarContext,
} from "@/components/notion-kit/SlipperySidebar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useAtom } from "jotai";
import { CreateAgentModal } from "./components/CreateAgentModal";
import { RainbowRoadToggle } from "./components/rainbow-road/RainbowRoadToggle";
import { RainbowRoadProvider } from "./components/rainbow-road/RainbowRoadProvider";
import { rainbowRoadAtom } from "./components/rainbow-road/atoms";
import { PrototypeBanner } from "./components/PrototypeBanner";
import {
  agents,
  chatGroups,
  inboxNotifications,
  meetingGroups,
  pages,
  upcomingEvents,
} from "./data";

function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = pages.filter(
    (p) =>
      p.label.toLowerCase().includes(query.toLowerCase()) ||
      p.emoji.includes(query),
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      onOpenChange(false);
      router.push(href);
    },
    [onOpenChange, router],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rainbow-card neon-glow data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] top-[15%] max-w-xl translate-y-0 gap-0 overflow-hidden p-0">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="border-secondary flex items-center gap-3 border-b px-4 py-3">
          <Icon icon={magnifyingGlassIcon} size={20} color="secondary" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="text-primary placeholder:text-tertiary flex-1 bg-transparent text-sm outline-hidden"
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered.length > 0) {
                navigate(filtered[0].href);
              }
            }}
          />
          <kbd className="text-tertiary bg-secondary rounded-xs px-1.5 py-0.5 text-[11px] font-medium">
            ESC
          </kbd>
        </div>
        <div className="max-h-[320px] overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <div className="text-tertiary px-4 py-8 text-center text-sm">
              No results
            </div>
          ) : (
            filtered.map((page) => (
              <button
                key={page.href}
                type="button"
                onClick={() => navigate(page.href)}
                className="hover:bg-secondary-translucent flex w-full items-center gap-3 px-4 py-2 text-left"
              >
                <span className="text-base">{page.emoji}</span>
                <div className="min-w-0 flex-1">
                  <span className="text-primary text-sm font-medium">
                    {page.label}
                  </span>
                  <span className="text-tertiary ml-2 text-xs capitalize">
                    {page.section}
                  </span>
                </div>
                <span className="text-tertiary text-xs">{page.kind}</span>
              </button>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function HomeContent({ onNewAgent }: { onNewAgent: () => void }) {
  const { setActiveTab: setTab } = useSlipperySidebarContext();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex min-h-0 grow flex-col px-2 pt-1.5">
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
          {pages
            .filter((p) => p.section === "favorites")
            .map((page) => (
              <SidebarItem
                key={page.href}
                icon={
                  <span className="flex size-6 items-center justify-center text-base/5">
                    {page.emoji}
                  </span>
                }
                label={page.label}
                href={page.href}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="private" label="Private">
          {pages
            .filter((p) => p.section === "private")
            .map((page) => (
              <SidebarItem
                key={page.href}
                icon={
                  <span className="flex size-6 items-center justify-center text-base/5">
                    {page.emoji}
                  </span>
                }
                label={page.label}
                href={page.href}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>

        <CollapsibleGroup id="shared" label="Shared">
          {pages
            .filter((p) => p.section === "shared")
            .map((page) => (
              <SidebarItem
                key={page.href}
                icon={
                  <span className="flex size-6 items-center justify-center text-base/5">
                    {page.emoji}
                  </span>
                }
                label={page.label}
                href={page.href}
                isActive={pathname === page.href}
              />
            ))}
        </CollapsibleGroup>

        <CollapsibleGroup
          id="agents"
          label="Agents"
          triggerAccessory={
            <IconButton
              variant="ghost"
              size="xs"
              onClick={(e) => {
                e.stopPropagation();
                onNewAgent();
              }}
            >
              <Icon icon={plusIcon} size={14} color="tertiary" />
            </IconButton>
          }
        >
          {agents.map((agent) => (
            <AgentItem
              key={agent.id}
              name={agent.name}
              avatar={agent.avatar || undefined}
              onClick={() =>
                router.push(`/eric/notion-clone/chat?agent=${agent.id}`)
              }
            />
          ))}
        </CollapsibleGroup>
      </div>

      <FooterLinks />
      
      <div className="border-secondary mt-2 border-t pt-2 px-2">
        <RainbowRoadToggle />
      </div>
    </div>
  );
}

function SidebarContent({
  onSearch,
  onNewAgent,
}: {
  onSearch: () => void;
  onNewAgent: () => void;
}) {
  return (
    <SlipperySidebar
      header={<PrimarySidebarHeader />}
      quickActions={<SidebarWithHandlersQuickActions onSearch={onSearch} />}
      cta={<SidebarWithHandlersCTA />}
    >
      <SlipperySidebar.Tab id="home" label="Home" icon={homeIcon}>
        <HomeContent onNewAgent={onNewAgent} />
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
      <SlipperySidebar.Tab id="inbox" label="Inbox" icon={inboxIcon} count={2}>
        <InboxContent notifications={inboxNotifications} />
      </SlipperySidebar.Tab>
    </SlipperySidebar>
  );
}

function SidebarWithHandlersQuickActions({
  onSearch,
}: {
  onSearch: () => void;
}) {
  return <QuickActionBar onSearch={onSearch} />;
}

function SidebarWithHandlersCTA() {
  const { setActiveTab } = useSlipperySidebarContext();
  const router = useRouter();

  return (
    <SidebarCTA
      onNewChat={() => router.push("/eric/notion-clone/chat")}
      onNewMeeting={() => setActiveTab("meetings")}
      onComposePage={() => router.push("/eric/notion-clone")}
      onComposeChat={() => router.push("/eric/notion-clone/chat")}
      onComposeMeeting={() => setActiveTab("meetings")}
      onComposeDatabase={() => router.push("/eric/notion-clone/product-ideas")}
    />
  );
}

export function NotionShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [createAgentOpen, setCreateAgentOpen] = useState(false);
  const [isRainbowRoad] = useAtom(rainbowRoadAtom);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <RainbowRoadProvider>
      <div className="flex h-screen flex-col overflow-hidden">
        <PrototypeBanner />
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {isRainbowRoad && <StarField />}
          <SlipperySidebarLayout
            sidebar={
              <div
                className={isRainbowRoad ? "rainbow-sidebar h-full" : "h-full"}
              >
                <SidebarContent
                  onSearch={() => setSearchOpen(true)}
                  onNewAgent={() => setCreateAgentOpen(true)}
                />
              </div>
            }
            minWidth={240}
          >
            <div className="bg-primary relative z-10 flex min-h-0 min-w-0 flex-1 flex-col">
              <div className={isRainbowRoad ? "rainbow-topbar" : ""}>
                <PageTopBar title={title} />
              </div>
              <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
          </SlipperySidebarLayout>
        </div>
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        <CreateAgentModal
          open={createAgentOpen}
          onOpenChange={setCreateAgentOpen}
          onCreateAgent={() => {}}
        />
      </div>
    </RainbowRoadProvider>
  );
}
