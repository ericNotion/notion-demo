"use client";

import {
  ReusableDatabase,
  type Column as DatabaseColumn,
} from "@/components/playground-kit/ReusableDatabase";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { collectionIcon } from "@nds-icons/collection/default.icon";
import { flagIcon } from "@nds-icons/flag/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { useState } from "react";
import { BoardView, type BoardColumn } from "../components/BoardView";
import { FilterBar } from "../components/FilterBar";
import { ViewSwitcher, type ViewType } from "../components/ViewSwitcher";
import { NotionShell } from "../shell";

type LaunchRow = {
  id: string;
  name: string;
  status: "On track" | "In review" | "Blocked" | "Done";
  owner: string;
  due: string;
  priority: "High" | "Medium" | "Low";
};

const rows: LaunchRow[] = [
  {
    id: "1",
    name: "Payments migration",
    status: "In review",
    owner: "Priya Shah",
    due: "Mar 28",
    priority: "High",
  },
  {
    id: "2",
    name: "Self-serve onboarding",
    status: "On track",
    owner: "Jordan Lee",
    due: "Apr 02",
    priority: "Medium",
  },
  {
    id: "3",
    name: "Customer health report",
    status: "Blocked",
    owner: "Maya Chen",
    due: "Apr 04",
    priority: "High",
  },
  {
    id: "4",
    name: "Pricing FAQ refresh",
    status: "On track",
    owner: "Evan Soto",
    due: "Apr 09",
    priority: "Low",
  },
  {
    id: "5",
    name: "API v2 rollout",
    status: "Done",
    owner: "Lena Park",
    due: "Mar 20",
    priority: "High",
  },
  {
    id: "6",
    name: "Mobile push notifications",
    status: "On track",
    owner: "Ravi Kumar",
    due: "Apr 15",
    priority: "Medium",
  },
  {
    id: "7",
    name: "Dashboard redesign",
    status: "In review",
    owner: "Sophie Tran",
    due: "Apr 11",
    priority: "Medium",
  },
  {
    id: "8",
    name: "Accessibility audit",
    status: "On track",
    owner: "James Wilson",
    due: "Apr 18",
    priority: "Low",
  },
];

const statusColors: Record<LaunchRow["status"], string> = {
  "On track": "bg-green-secondary text-green-primary",
  "In review": "bg-blue-secondary text-blue-accent-primary",
  Blocked: "bg-red-secondary text-red-secondary",
  Done: "bg-secondary text-tertiary",
};

const priorityColors: Record<LaunchRow["priority"], string> = {
  High: "bg-orange-secondary text-orange-secondary",
  Medium: "bg-secondary text-secondary",
  Low: "bg-tertiary-translucent text-tertiary",
};

const boardColumns: BoardColumn[] = [
  {
    id: "On track",
    name: "On track",
    color: "text-green-primary",
    bgColor: "bg-green-secondary",
  },
  {
    id: "In review",
    name: "In review",
    color: "text-blue-accent-primary",
    bgColor: "bg-blue-secondary",
  },
  {
    id: "Blocked",
    name: "Blocked",
    color: "text-red-secondary",
    bgColor: "bg-red-secondary",
  },
  { id: "Done", name: "Done", color: "text-tertiary", bgColor: "bg-secondary" },
];

const statusFilters = [
  { id: "On track", label: "On track" },
  { id: "In review", label: "In review" },
  { id: "Blocked", label: "Blocked" },
  { id: "Done", label: "Done" },
];

const propertyDefs = [
  { id: "name", name: "Name", type: "Title" },
  { id: "status", name: "Status", type: "Select" },
  { id: "owner", name: "Owner", type: "Person" },
  { id: "due", name: "Due", type: "Date" },
  { id: "priority", name: "Priority", type: "Select" },
];

const columns: DatabaseColumn<LaunchRow>[] = [
  {
    id: "name",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Name</span>
      </div>
    ),
    labelText: "Name",
    width: "w-[34%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="bg-secondary flex size-6 items-center justify-center rounded-xs text-[13px]">
          📄
        </span>
        <span className="text-primary truncate font-medium">{row.name}</span>
      </div>
    ),
  },
  {
    id: "status",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={viewBoardIcon} color="secondary" size={14} />
        <span>Status</span>
      </div>
    ),
    labelText: "Status",
    width: "w-[18%]",
    render: (row) => (
      <Badge
        variant="secondary"
        className={cn(
          "rounded-full border-0 px-2.5 py-1 text-[11px] font-medium",
          statusColors[row.status],
        )}
      >
        {row.status}
      </Badge>
    ),
  },
  {
    id: "owner",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={peopleIcon} color="secondary" size={14} />
        <span>Owner</span>
      </div>
    ),
    labelText: "Owner",
    width: "w-[18%]",
    render: (row) => <span className="text-primary text-sm">{row.owner}</span>,
  },
  {
    id: "due",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={calendarAltIcon} color="secondary" size={14} />
        <span>Due</span>
      </div>
    ),
    labelText: "Due",
    width: "w-[14%]",
    render: (row) => <span className="text-secondary text-sm">{row.due}</span>,
  },
  {
    id: "priority",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={flagIcon} color="secondary" size={14} />
        <span>Priority</span>
      </div>
    ),
    labelText: "Priority",
    width: "w-[16%]",
    render: (row) => (
      <Badge
        variant="secondary"
        className={cn(
          "rounded-full border-0 px-2.5 py-1 text-[11px] font-medium",
          priorityColors[row.priority],
        )}
      >
        {row.priority}
      </Badge>
    ),
  },
];

export default function Page() {
  const [view, setView] = useState<ViewType>("table");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered =
    activeFilters.size > 0
      ? rows.filter((r) => activeFilters.has(r.status))
      : rows;

  return (
    <NotionShell title="Launch tracker">
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <div className="mb-2 text-[78px] leading-[86px]">🚀</div>
        <h1 className="text-primary text-[40px] font-bold tracking-tight">
          Launch tracker
        </h1>
        <p className="text-secondary mt-2 text-[15px]">
          Track launches, owners, and blockers across the team.
        </p>

        <div className="mt-8">
          <ViewSwitcher
            activeView={view}
            onViewChange={setView}
          />

          {filterOpen && (
            <FilterBar
              filters={statusFilters}
              activeFilters={activeFilters}
              onToggle={(id) => {
                setActiveFilters((prev) => {
                  const next = new Set(prev);
                  if (next.has(id)) next.delete(id);
                  else next.add(id);
                  return next;
                });
              }}
              onClear={() => setActiveFilters(new Set())}
            />
          )}

          {view === "table" ? (
            <ReusableDatabase
              title="All launches"
              icon={collectionIcon}
              columns={columns}
              data={filtered}
              onNew={() => {}}
              className="mt-0"
            />
          ) : (
            <div className="mt-0">
              <BoardView
                columns={boardColumns}
                items={filtered}
                groupBy="status"
                getItemId={(r) => r.id}
                renderCard={(row) => (
                  <div>
                    <p className="text-primary text-sm font-medium">
                      {row.name}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-tertiary text-xs">{row.owner}</span>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "rounded-full border-0 px-1.5 py-0.5 text-[10px] font-medium",
                          priorityColors[row.priority],
                        )}
                      >
                        {row.priority}
                      </Badge>
                    </div>
                    <span className="text-quaternary mt-1 block text-xs">
                      {row.due}
                    </span>
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </NotionShell>
  );
}
