"use client";

import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
import {
  ChatContent,
  InboxContent,
  MeetingsContent,
  QuickActionBar,
  SidebarCTA,
  SlipperySidebar,
  SlipperySidebarLayout,
} from "@/components/notion-kit/SlipperySidebar";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { useAtomValue, useSetAtom } from "jotai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CreateAgentModal } from "./components/CreateAgentModal";
import { HalloweenToggle } from "./components/halloween/HalloweenToggle";
import { HomeContent } from "./components/HomeContent";
import { PrototypeBanner } from "./components/PrototypeBanner";
import { SearchDialog } from "./components/SearchDialog";
import { useSyncedTitle } from "./components/SyncedSidebarItem";
import {
  agents,
  allPagesAtom,
  chatGroups,
  dynamicPagesAtom,
  inboxNotifications,
  meetingGroups,
  type PageEntry,
} from "./data";
import "./halloween-theme.css";

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
      <HalloweenToggle />
    </div>
  );
}
