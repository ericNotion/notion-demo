"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { plusIcon } from "@nds-icons/plus/default.icon";
import { useState } from "react";
import { NotionShell } from "../shell";

type Tab = "teamspaces" | "recents" | "favorites" | "shared" | "private" | "ai-meeting-notes";

type Teamspace = {
  id: string;
  icon: string;
  name: string;
  description: string;
  access: {
    icon: string;
    label: string;
  };
  members: number;
};

const teamspaces: Teamspace[] = [
  {
    id: "1",
    icon: "🏭",
    name: "Software Factory",
    description: "",
    access: { icon: "🌐", label: "Open" },
    members: 1,
  },
  {
    id: "2",
    icon: "👥",
    name: "Client Onboarding",
    description: "The section with all critical updates for the entir...",
    access: { icon: "🌐", label: "Open" },
    members: 228,
  },
  {
    id: "3",
    icon: "⚡",
    name: "All Edison",
    description: "",
    access: { icon: "🔒", label: "Default" },
    members: 1,
  },
  {
    id: "4",
    icon: "🚀",
    name: "Project Apollo v2",
    description: "",
    access: { icon: "🌐", label: "Open" },
    members: 1,
  },
  {
    id: "5",
    icon: "🏢",
    name: "Company OS",
    description: "Home for all company-wide data sources",
    access: { icon: "🔒", label: "Default" },
    members: 1,
  },
];

const tabs: { id: Tab; label: string }[] = [
  { id: "teamspaces", label: "Teamspaces" },
  { id: "recents", label: "Recents" },
  { id: "favorites", label: "Favorites" },
  { id: "shared", label: "Shared" },
  { id: "private", label: "Private" },
  { id: "ai-meeting-notes", label: "AI Meeting Notes" },
];

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("teamspaces");
  const [isYourTeamspacesExpanded, setIsYourTeamspacesExpanded] = useState(true);
  const [isMoreTeamspacesExpanded, setIsMoreTeamspacesExpanded] = useState(false);

  return (
    <NotionShell title="Library">
      <div className="mx-auto w-full max-w-6xl px-8 pt-10 pb-40">
        {/* Page Title */}
        <h1 className="text-primary mb-6 text-[40px] font-bold tracking-tight">
          Library
        </h1>

        {/* Tab Bar */}
        <div className="border-secondary mb-6 flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "text-body rounded-md px-3 py-1.5 font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-tertiary text-primary"
                    : "text-secondary hover:bg-secondary-translucent hover:text-primary",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm">
              <Icon icon={plusIcon} size={16} />
              New teamspace
            </Button>
            <IconButton variant="ghost" size="sm">
              <Icon icon={magnifyingGlassIcon} size={20} color="secondary" />
            </IconButton>
            <IconButton variant="ghost" size="sm">
              <Icon icon={filterIcon} size={20} color="secondary" />
            </IconButton>
          </div>
        </div>

        {/* Teamspaces Content */}
        {activeTab === "teamspaces" && (
          <div className="space-y-4">
            {/* Your Teamspaces Section */}
            <div>
              <button
                type="button"
                onClick={() => setIsYourTeamspacesExpanded(!isYourTeamspacesExpanded)}
                className="hover:bg-secondary-translucent text-secondary mb-2 flex w-full items-center gap-1 rounded-md px-2 py-1 text-left text-sm font-medium transition-colors"
              >
                <Icon
                  icon={isYourTeamspacesExpanded ? arrowChevronSingleDownIcon : arrowChevronSingleRightIcon}
                  size={16}
                  color="secondary"
                />
                Your teamspaces
              </button>

              {isYourTeamspacesExpanded && (
                <div className="overflow-hidden rounded-lg border border-secondary">
                  {/* Table Header */}
                  <div className="bg-secondary border-secondary grid grid-cols-[auto_1fr_1.5fr_auto_auto] gap-4 border-b px-4 py-2">
                    <div className="w-6" />
                    <span className="text-caption text-secondary font-medium">Name</span>
                    <span className="text-caption text-secondary font-medium">Description</span>
                    <span className="text-caption text-secondary font-medium">Access</span>
                    <span className="text-caption text-secondary font-medium">Members</span>
                  </div>

                  {/* Table Rows */}
                  {teamspaces.map((space, index) => (
                    <div
                      key={space.id}
                      className={cn(
                        "hover:bg-secondary-translucent grid grid-cols-[auto_1fr_1.5fr_auto_auto] gap-4 px-4 py-2.5 transition-colors",
                        index !== teamspaces.length - 1 && "border-secondary border-b",
                      )}
                    >
                      <div className="flex items-center">
                        <Icon
                          icon={arrowChevronSingleRightIcon}
                          size={16}
                          color="tertiary"
                        />
                      </div>
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="text-base">{space.icon}</span>
                        <span className="text-body text-primary truncate font-medium">
                          {space.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-body text-secondary truncate">
                          {space.description}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{space.access.icon}</span>
                        <span className="text-body text-secondary">
                          {space.access.label}
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-body text-secondary">
                          {space.members}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* More Teamspaces Section */}
            <div>
              <button
                type="button"
                onClick={() => setIsMoreTeamspacesExpanded(!isMoreTeamspacesExpanded)}
                className="hover:bg-secondary-translucent text-secondary flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors"
              >
                <Icon
                  icon={isMoreTeamspacesExpanded ? arrowChevronSingleDownIcon : arrowChevronSingleRightIcon}
                  size={16}
                  color="secondary"
                />
                More teamspaces
              </button>
            </div>
          </div>
        )}

        {/* Other tabs content (placeholder) */}
        {activeTab !== "teamspaces" && (
          <div className="text-tertiary py-12 text-center">
            <p className="text-body">No items in {tabs.find(t => t.id === activeTab)?.label}</p>
          </div>
        )}
      </div>
    </NotionShell>
  );
}
