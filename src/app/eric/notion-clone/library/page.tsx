"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Agent, type PageEntry, agents, allPagesAtom } from "../data";

type LibraryTab =
  | "recents"
  | "favorites"
  | "shared"
  | "private"
  | "teamspaces"
  | "meeting-notes"
  | "agents";

const tabs: { id: LibraryTab; label: string; icon?: string }[] = [
  { id: "recents", label: "Recents" },
  { id: "favorites", label: "Favorites" },
  { id: "shared", label: "Shared" },
  { id: "private", label: "Private" },
  { id: "teamspaces", label: "Teamspaces" },
  { id: "meeting-notes", label: "AI Meeting Notes" },
  { id: "agents", label: "Agents" },
];

type Teamspace = {
  id: string;
  icon: string;
  name: string;
  description: string;
  access: "Open" | "Private" | "Default";
  members: number;
};

const teamspaces: Teamspace[] = [
  {
    id: "1",
    icon: "🏭",
    name: "Software Factory",
    description: "",
    access: "Open",
    members: 1,
  },
  {
    id: "2",
    icon: "👥",
    name: "Client Onboarding",
    description: "The section with all critical updates for the entire team",
    access: "Open",
    members: 228,
  },
  {
    id: "3",
    icon: "⚡",
    name: "All Edison",
    description: "",
    access: "Default",
    members: 1,
  },
  {
    id: "4",
    icon: "🚀",
    name: "Project Apollo v2",
    description: "",
    access: "Open",
    members: 1,
  },
  {
    id: "5",
    icon: "🏢",
    name: "Company OS",
    description: "Home for all company-wide data sources",
    access: "Default",
    members: 1,
  },
];

function getFilteredPages(tab: LibraryTab, pages: PageEntry[]): PageEntry[] {
  const nonDbItems = pages.filter((p) => p.kind !== "database-item");
  switch (tab) {
    case "recents":
      return nonDbItems;
    case "favorites":
      return nonDbItems.filter((p) => p.section === "favorites");
    case "shared":
      return nonDbItems.filter((p) => p.section === "shared");
    case "private":
      return nonDbItems.filter((p) => p.section === "private");
    case "meeting-notes":
      return nonDbItems.filter((p) => p.kind === "meeting-note");
    default:
      return nonDbItems;
  }
}

function sectionLabel(section: PageEntry["section"]): string {
  switch (section) {
    case "favorites":
      return "Favorites";
    case "private":
      return "Private";
    case "shared":
      return "Shared";
  }
}

function PageTable({ items }: { items: PageEntry[] }) {
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-primary border-b">
            <th className="text-secondary h-8 w-[40%] px-3 text-left text-sm font-normal">
              <div className="flex items-center gap-1.5">
                <Icon icon={pageIcon} color="secondary" size={14} />
                <span>Page name</span>
              </div>
            </th>
            <th className="text-secondary h-8 w-[20%] px-3 text-left text-sm font-normal">
              Created by
            </th>
            <th className="text-secondary h-8 w-[20%] px-3 text-left text-sm font-normal">
              Source
            </th>
            <th className="text-secondary h-8 w-[20%] px-3 text-left text-sm font-normal">
              Last edited time
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((page) => (
            <tr
              key={page.href + page.label}
              className="border-primary hover:bg-secondary/50 cursor-pointer border-b"
              onClick={() => router.push(page.href)}
            >
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="text-base">{page.emoji}</span>
                  <span className="text-primary truncate text-sm font-medium">
                    {page.label}
                  </span>
                </div>
              </td>
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <span className="text-secondary text-sm">{page.createdBy}</span>
              </td>
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <span className="text-secondary text-sm capitalize">
                  {sectionLabel(page.section)}
                </span>
              </td>
              <td className="h-9 px-3">
                <span className="text-secondary text-sm">
                  {page.lastEdited}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TeamspacesTable() {
  return (
    <div className="overflow-hidden">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="border-primary border-b">
            <th className="text-secondary h-8 w-[30%] px-3 text-left text-sm font-normal">
              <div className="flex items-center gap-1.5">
                <Icon icon={pageIcon} color="secondary" size={14} />
                <span>Name</span>
              </div>
            </th>
            <th className="text-secondary h-8 w-[35%] px-3 text-left text-sm font-normal">
              Description
            </th>
            <th className="text-secondary h-8 w-[15%] px-3 text-left text-sm font-normal">
              Access
            </th>
            <th className="text-secondary h-8 w-[20%] px-3 text-left text-sm font-normal">
              Members
            </th>
          </tr>
        </thead>
        <tbody>
          {teamspaces.map((ts) => (
            <tr
              key={ts.id}
              className="border-primary hover:bg-secondary/50 cursor-pointer border-b"
            >
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="text-[15px]">{ts.icon}</span>
                  <span className="text-primary truncate text-sm font-medium">
                    {ts.name}
                  </span>
                </div>
              </td>
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <span className="text-secondary truncate text-sm">
                  {ts.description}
                </span>
              </td>
              <td className="border-primary h-9 overflow-hidden border-r px-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">
                    {ts.access === "Open" ? "🌐" : "🔒"}
                  </span>
                  <span className="text-secondary text-sm">{ts.access}</span>
                </div>
              </td>
              <td className="h-9 px-3">
                <span className="text-secondary text-sm">{ts.members}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AgentCard({ agent, onClick }: { agent: Agent; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-primary-translucent flex flex-col overflow-hidden rounded-xl border text-left transition-shadow hover:shadow-sm"
    >
      <div className="h-16" style={{ backgroundColor: agent.bannerColor }} />
      <div className="relative px-4 pt-0 pb-4">
        <div className="-mt-5 mb-2">
          {agent.avatar ? (
            <img
              src={agent.avatar}
              alt=""
              className="border-primary size-10 rounded-lg border-2 bg-white"
            />
          ) : (
            <span className="border-primary flex size-10 items-center justify-center rounded-lg border-2 bg-white text-xl">
              {agent.emoji}
            </span>
          )}
        </div>
        <div className="text-primary text-sm font-semibold">{agent.name}</div>
        <p className="text-tertiary mt-0.5 line-clamp-2 text-xs/4">
          {agent.description || "No description"}
        </p>
        <div className="text-quaternary mt-3 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1">
            <span className="bg-tertiary inline-block size-3.5 rounded-full" />
            <span>{agent.author}</span>
          </div>
          <span>1d ago</span>
        </div>
      </div>
    </button>
  );
}

function AgentsGrid() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-primary text-sm font-semibold">Favorites</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onClick={() =>
              router.push(`/eric/notion-clone/chat?agent=${agent.id}`)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<LibraryTab>("recents");
  const router = useRouter();
  const pages = useAtomValue(allPagesAtom);
  const filteredPages = getFilteredPages(activeTab, pages);

  return (
    <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-primary text-[40px] font-bold tracking-tight">
          Library
        </h1>
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            activeTab === "agents"
              ? router.push("/eric/notion-clone/agents")
              : router.push("/eric/notion-clone/new-page")
          }
        >
          {activeTab === "agents" ? "New agent" : "New page"}
        </Button>
      </div>

      <div className="mt-6 flex items-center gap-1 border-b border-transparent">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-secondary text-primary"
                : "text-tertiary hover:text-primary hover:bg-secondary-translucent",
            )}
          >
            {tab.label}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            className="text-tertiary hover:text-secondary flex size-7 items-center justify-center rounded-sm"
          >
            <Icon icon={magnifyingGlassIcon} size={16} color="inherit" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "agents" ? (
          <AgentsGrid />
        ) : activeTab === "teamspaces" ? (
          <TeamspacesTable />
        ) : (
          <PageTable items={filteredPages} />
        )}
      </div>
    </div>
  );
}
