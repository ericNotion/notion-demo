"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { aiDescriptionIcon } from "@nds-icons/aiDescription/default.icon";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { clockIcon } from "@nds-icons/clock/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { lockIcon } from "@nds-icons/lock/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { teamspaceIcon } from "@nds-icons/teamspace/default.icon";
import { useState } from "react";

interface Teamspace {
  id: string;
  emoji: string;
  name: string;
  description?: string;
  access: "open" | "default";
  members: number;
}

const teamspaces: Teamspace[] = [
  {
    id: "1",
    emoji: "🏃",
    name: "Software Factory",
    access: "open",
    members: 1,
  },
  {
    id: "2",
    emoji: "👥",
    name: "Client Onboarding",
    access: "open",
    members: 1,
  },
  {
    id: "3",
    emoji: "🐱",
    name: "All Edison",
    description: "The section with all critical updates for the entir...",
    access: "default",
    members: 228,
  },
  {
    id: "4",
    emoji: "Ⓟ",
    name: "Project Apollo v2",
    access: "default",
    members: 228,
  },
  {
    id: "5",
    emoji: "🌐",
    name: "Company OS",
    description: "Home for all company-wide data sources",
    access: "default",
    members: 228,
  },
];

type TabId =
  | "teamspaces"
  | "recents"
  | "favorites"
  | "shared"
  | "private"
  | "ai-notes";

interface TabItem {
  id: TabId;
  label: string;
  icon: any;
}

const tabs: TabItem[] = [
  { id: "teamspaces", label: "Teamspaces", icon: teamspaceIcon },
  { id: "recents", label: "Recents", icon: clockIcon },
  { id: "favorites", label: "Favorites", icon: starIcon },
  { id: "shared", label: "Shared", icon: peopleIcon },
  { id: "private", label: "Private", icon: lockIcon },
  { id: "ai-notes", label: "AI Meeting Notes", icon: aiDescriptionIcon },
];

function TeamspaceRow({ teamspace }: { teamspace: Teamspace }) {
  return (
    <div className="hover:bg-tertiary group flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors">
      <button
        type="button"
        className="text-tertiary hover:text-secondary flex items-center justify-center transition-colors"
      >
        <Icon icon={arrowChevronSingleRightIcon} size={16} />
      </button>
      <span className="flex size-6 shrink-0 items-center justify-center text-base/5">
        {teamspace.emoji}
      </span>
      <div className="text-primary min-w-0 flex-1">
        <span className="text-body font-medium">{teamspace.name}</span>
      </div>
      {teamspace.description && (
        <div className="text-secondary min-w-0 flex-[2]">
          <span className="text-body-sm truncate">{teamspace.description}</span>
        </div>
      )}
      {!teamspace.description && <div className="flex-[2]" />}
      <div className="text-secondary flex items-center gap-2">
        <span className="text-body-sm capitalize">{teamspace.access}</span>
      </div>
      <div className="text-secondary flex w-16 items-center justify-end">
        <span className="text-body-sm">{teamspace.members}</span>
      </div>
    </div>
  );
}

export function LibraryContent() {
  const [activeTab, setActiveTab] = useState<TabId>("teamspaces");
  const [yourTeamspacesExpanded, setYourTeamspacesExpanded] = useState(true);
  const [moreTeamspacesExpanded, setMoreTeamspacesExpanded] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="border-secondary flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-title font-semibold">Library</h1>
        <Button variant="primary" size="sm">
          New teamspace
        </Button>
      </div>

      {/* Tab bar */}
      <div className="border-secondary flex items-center justify-between gap-4 border-b px-6 py-2">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-primary"
                  : "text-secondary hover:bg-tertiary hover:text-primary",
              )}
            >
              <Icon icon={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-tertiary hover:bg-tertiary hover:text-secondary flex size-7 items-center justify-center rounded-md transition-colors"
          >
            <Icon icon={magnifyingGlassIcon} size={18} />
          </button>
          <button
            type="button"
            className="text-tertiary hover:bg-tertiary hover:text-secondary flex size-7 items-center justify-center rounded-md transition-colors"
          >
            <Icon icon={filterIcon} size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {activeTab === "teamspaces" && (
          <div className="flex flex-col gap-2">
            {/* Your teamspaces section */}
            <div>
              <button
                type="button"
                onClick={() => setYourTeamspacesExpanded(!yourTeamspacesExpanded)}
                className="hover:bg-tertiary flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
              >
                <Icon
                  icon={
                    yourTeamspacesExpanded
                      ? arrowChevronSingleDownIcon
                      : arrowChevronSingleRightIcon
                  }
                  size={16}
                  color="tertiary"
                />
                <span className="text-tertiary text-body-sm font-semibold">
                  Your teamspaces
                </span>
              </button>

              {yourTeamspacesExpanded && (
                <div className="mt-1 flex flex-col">
                  {/* Table header */}
                  <div className="flex items-center gap-3 px-2 py-1.5">
                    <div className="w-4" />
                    <div className="w-6" />
                    <div className="text-tertiary flex-1">
                      <span className="text-caption font-semibold uppercase">
                        Name
                      </span>
                    </div>
                    <div className="text-tertiary flex-[2]">
                      <span className="text-caption font-semibold uppercase">
                        Description
                      </span>
                    </div>
                    <div className="text-tertiary flex items-center gap-2">
                      <span className="text-caption font-semibold uppercase">
                        Access
                      </span>
                    </div>
                    <div className="text-tertiary flex w-16 items-center justify-end">
                      <span className="text-caption font-semibold uppercase">
                        Members
                      </span>
                    </div>
                  </div>

                  {/* Teamspace rows */}
                  {teamspaces.map((teamspace) => (
                    <TeamspaceRow key={teamspace.id} teamspace={teamspace} />
                  ))}
                </div>
              )}
            </div>

            {/* More teamspaces section */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setMoreTeamspacesExpanded(!moreTeamspacesExpanded)}
                className="hover:bg-tertiary flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
              >
                <Icon
                  icon={
                    moreTeamspacesExpanded
                      ? arrowChevronSingleDownIcon
                      : arrowChevronSingleRightIcon
                  }
                  size={16}
                  color="tertiary"
                />
                <span className="text-tertiary text-body-sm font-semibold">
                  More teamspaces
                </span>
              </button>

              {moreTeamspacesExpanded && (
                <div className="text-tertiary px-2 py-4 text-center text-sm">
                  No additional teamspaces
                </div>
              )}
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== "teamspaces" && (
          <div className="text-tertiary flex h-full items-center justify-center">
            <p className="text-sm">Content for {activeTab} coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
