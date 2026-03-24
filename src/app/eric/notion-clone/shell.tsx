"use client";

import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
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
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CreateAgentModal } from "./components/CreateAgentModal";
import { PrototypeBanner } from "./components/PrototypeBanner";
import {
  agents,
  allPagesAtom,
  chatGroups,
  dynamicPagesAtom,
  inboxNotifications,
  meetingGroups,
  type PageEntry,
  upcomingEvents,
} from "./data";

const emojiAtomCache = new Map<
  string,
  ReturnType<typeof atomWithStorage<string>>
>();

function getEmojiAtom(key: string, fallback: string) {
  if (!emojiAtomCache.has(key)) {
    emojiAtomCache.set(key, atomWithStorage(key, fallback));
  }
  return emojiAtomCache.get(key)!;
}

function SyncedEmoji({
  storageKey,
  fallback,
}: {
  storageKey?: string;
  fallback: string;
}) {
  const atom = useMemo(
    () => (storageKey ? getEmojiAtom(storageKey, fallback) : null),
    [storageKey, fallback],
  );
  const stored = useAtomValue(atom ?? getEmojiAtom("__noop__", fallback));
  return <>{storageKey ? stored : fallback}</>;
}

function useSyncedTitle(storageKey?: string, fallback?: string): string {
  const fb = fallback || "Untitled";
  const [title, setTitle] = useState(fb);

  useEffect(() => {
    if (!storageKey) return;
    const read = () => {
      try {
        const raw = localStorage.getItem(storageKey);
        if (raw !== null) {
          const parsed = JSON.parse(raw);
          setTitle(parsed || fb);
        }
      } catch {}
    };
    read();
    const interval = setInterval(read, 500);
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey) read();
    };
    window.addEventListener("storage", onStorage);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", onStorage);
    };
  }, [storageKey, fb]);

  return storageKey ? title : fb;
}

function SyncedSidebarItem({
  page,
  isActive,
}: {
  page: PageEntry;
  isActive: boolean;
}) {
  const title = useSyncedTitle(page.titleStorageKey, page.label);
  return (
    <SidebarItem
      icon={
        <span className="flex size-6 items-center justify-center text-base/5">
          <SyncedEmoji
            storageKey={page.emojiStorageKey}
            fallback={page.emoji}
          />
        </span>
      }
      label={title}
      href={page.href}
      isActive={isActive}
    />
  );
}

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
  const pages = useAtomValue(allPagesAtom);

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
      <DialogContent
        showCloseButton={false}
        className="data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] top-[15%] max-w-xl translate-y-0 gap-0 overflow-hidden p-0"
      >
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
                key={page.href + page.label}
                type="button"
                onClick={() => navigate(page.href)}
                className="hover:bg-secondary-translucent flex w-full items-center gap-3 px-4 py-2 text-left"
              >
                <span className="text-base">
                  <SyncedEmoji
                    storageKey={page.emojiStorageKey}
                    fallback={page.emoji}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-primary text-sm font-medium">
                    {page.label}
                  </span>
                  <span className="text-tertiary ml-2 text-xs">
                    {page.parent ?? page.section}
                  </span>
                </div>
                <span className="text-tertiary text-xs">
                  {page.kind === "meeting-note"
                    ? "meeting note"
                    : page.kind === "database-item"
                      ? "in database"
                      : page.kind}
                </span>
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
              icon={
                agent.id === "6" ? (
                  <Icon icon={aiFaceIcon} size={20} color="secondary" />
                ) : undefined
              }
              onClick={() =>
                router.push(`/eric/notion-clone/chat?agent=${agent.id}`)
              }
            />
          ))}
        </CollapsibleGroup>
      </div>

      <FooterLinks />
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
  const router = useRouter();

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
        <ChatContent
          groups={chatGroups}
          onChatClick={(chat) => {
            const params = new URLSearchParams();
            params.set("thread", chat.id);
            if (chat.agentId) params.set("agent", chat.agentId);
            router.push(`/eric/notion-clone/chat?${params.toString()}`);
          }}
        />
      </SlipperySidebar.Tab>
      <SlipperySidebar.Tab
        id="meetings"
        label="Meetings"
        icon={calendarAltIcon}
      >
        <MeetingsContent
          groups={meetingGroups}
          onEventClick={(event) => {
            if (event.href) router.push(event.href);
          }}
        />
      </SlipperySidebar.Tab>
      <SlipperySidebar.Tab id="inbox" label="Inbox" icon={inboxIcon} count={2}>
        <InboxContent
          notifications={inboxNotifications}
          onNotificationClick={(n) => n.pageHref && router.push(n.pageHref)}
        />
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
  const router = useRouter();
  const addPage = useSetAtom(dynamicPagesAtom);

  const createAndNavigate = useCallback(
    (entry: PageEntry) => {
      addPage((prev) => [...prev, entry]);
      router.push(entry.href);
    },
    [addPage, router],
  );

  return (
    <SidebarCTA
      onNewChat={() => router.push("/eric/notion-clone/chat")}
      onNewMeeting={() => {
        const id = Date.now().toString(36);
        createAndNavigate({
          emoji: "🎙️",
          label: "Untitled",
          href: `/eric/notion-clone/meeting-note/${id}`,
          section: "private",
          kind: "meeting-note",
          createdBy: "You",
          lastEdited: "just now",
        });
      }}
      onComposePage={() => {
        const id = Date.now().toString(36);
        createAndNavigate({
          emoji: "📄",
          label: "Untitled",
          href: `/eric/notion-clone/new-page/${id}`,
          section: "private",
          kind: "page",
          createdBy: "You",
          lastEdited: "just now",
          emojiStorageKey: `eric-nc-page-${id}-emoji`,
          titleStorageKey: `eric-nc-page-${id}-title`,
        });
      }}
      onComposeChat={() => router.push("/eric/notion-clone/chat")}
      onComposeMeeting={() => {
        const id = Date.now().toString(36);
        createAndNavigate({
          emoji: "🎙️",
          label: "Untitled",
          href: `/eric/notion-clone/meeting-note/${id}`,
          section: "private",
          kind: "meeting-note",
          createdBy: "You",
          lastEdited: "just now",
        });
      }}
      onComposeDatabase={() => {
        const id = Date.now().toString(36);
        createAndNavigate({
          emoji: "📊",
          label: "Untitled",
          href: `/eric/notion-clone/new-database/${id}`,
          section: "private",
          kind: "collection",
          createdBy: "You",
          lastEdited: "just now",
          emojiStorageKey: `eric-nc-new-database-${id}-emoji`,
          titleStorageKey: `eric-nc-new-database-${id}-title`,
        });
      }}
    />
  );
}

export function NotionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchOpen, setSearchOpen] = useState(false);
  const [createAgentOpen, setCreateAgentOpen] = useState(false);
  const pages = useAtomValue(allPagesAtom);

  const currentPage = useMemo(
    () => pages.find((p) => p.href === pathname),
    [pages, pathname],
  );

  const {
    title: staticTitle,
    breadcrumbs,
    permissionLabel,
    titleStorageKey: currentTitleStorageKey,
  } = useMemo(() => {
    const sectionToLabel = (section?: string) => {
      if (section === "shared") return "Shared";
      if (section === "favorites") return "Favorites";
      return "Private";
    };
    const agentId = searchParams.get("agent");
    if (agentId) {
      const agent = agents.find((a) => a.id === agentId);
      if (agent)
        return {
          title: agent.name,
          breadcrumbs: undefined,
          permissionLabel: "Private",
          titleStorageKey: undefined,
        };
    }
    const page = currentPage;
    if (page) {
      if (page.kind === "database-item" && page.parent) {
        const parentPage = pages.find(
          (p) => p.label === page.parent && p.kind === "collection",
        );
        return {
          title: page.label,
          breadcrumbs: parentPage
            ? [{ label: parentPage.label, href: parentPage.href }]
            : [{ label: page.parent }],
          permissionLabel: sectionToLabel(parentPage?.section ?? page.section),
          titleStorageKey: page.titleStorageKey,
        };
      }
      return {
        title: page.label,
        breadcrumbs: undefined,
        permissionLabel: sectionToLabel(page.section),
        titleStorageKey: page.titleStorageKey,
      };
    }
    const slug = pathname.split("/").pop() || "";
    if (!slug || slug === "notion-clone")
      return {
        title: "Product workspace",
        breadcrumbs: undefined,
        permissionLabel: "Private",
        titleStorageKey: undefined,
      };
    const fallbackTitle = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      title: fallbackTitle,
      breadcrumbs: undefined,
      permissionLabel: "Private",
      titleStorageKey: undefined,
    };
  }, [pathname, searchParams, pages, currentPage]);

  const title = useSyncedTitle(currentTitleStorageKey, staticTitle);

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
    <div
      className="flex h-screen flex-col overflow-hidden"
      style={{
        fontFamily:
          'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <PrototypeBanner />
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <SlipperySidebarLayout
          sidebar={
            <SidebarContent
              onSearch={() => setSearchOpen(true)}
              onNewAgent={() => setCreateAgentOpen(true)}
            />
          }
          minWidth={290}
        >
          <div className="bg-primary flex min-h-0 min-w-0 flex-1 flex-col">
            {!(pathname.includes("/chat") && searchParams.get("thread")) &&
              !pathname.endsWith("/agents") && (
                <PageTopBar
                  title={title}
                  breadcrumbs={breadcrumbs}
                  permissionLabel={permissionLabel}
                />
              )}
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
  );
}
