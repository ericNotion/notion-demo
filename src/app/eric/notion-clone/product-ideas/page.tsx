"use client";

import {
  ReusableDatabase,
  type Column as DatabaseColumn,
} from "@/components/playground-kit/ReusableDatabase";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { collectionIcon } from "@nds-icons/collection/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { useState } from "react";
import { BoardView, type BoardColumn } from "../components/BoardView";
import { DatabaseSettingsPopover } from "../components/DatabaseSettingsPopover";
import { FilterBar } from "../components/FilterBar";
import { ViewSwitcher, type ViewType } from "../components/ViewSwitcher";
import { NotionShell } from "../shell";

type IdeaRow = {
  id: string;
  title: string;
  status: "New" | "Exploring" | "Planned" | "Parked";
  author: string;
  votes: number;
  effort: "S" | "M" | "L" | "XL";
};

const rows: IdeaRow[] = [
  {
    id: "1",
    title: "Inline AI writing assistant",
    status: "Exploring",
    author: "Sophie Tran",
    votes: 24,
    effort: "L",
  },
  {
    id: "2",
    title: "Keyboard shortcut cheat sheet",
    status: "Planned",
    author: "James Wilson",
    votes: 18,
    effort: "S",
  },
  {
    id: "3",
    title: "Slack integration for page updates",
    status: "New",
    author: "Ravi Kumar",
    votes: 12,
    effort: "M",
  },
  {
    id: "4",
    title: "Template gallery for new pages",
    status: "Exploring",
    author: "Maya Chen",
    votes: 31,
    effort: "M",
  },
  {
    id: "5",
    title: "Offline mode for mobile",
    status: "Parked",
    author: "Jordan Lee",
    votes: 45,
    effort: "XL",
  },
  {
    id: "6",
    title: "Page analytics dashboard",
    status: "New",
    author: "Lena Park",
    votes: 9,
    effort: "M",
  },
  {
    id: "7",
    title: "Bulk page export to PDF",
    status: "Planned",
    author: "Evan Soto",
    votes: 15,
    effort: "S",
  },
];

const statusColors: Record<IdeaRow["status"], string> = {
  New: "bg-blue-secondary text-blue-accent-primary",
  Exploring: "bg-purple-secondary text-purple-secondary",
  Planned: "bg-green-secondary text-green-primary",
  Parked: "bg-secondary text-tertiary",
};

const effortColors: Record<IdeaRow["effort"], string> = {
  S: "bg-green-secondary text-green-primary",
  M: "bg-blue-secondary text-blue-accent-primary",
  L: "bg-orange-secondary text-orange-secondary",
  XL: "bg-red-secondary text-red-secondary",
};

const boardColumns: BoardColumn[] = [
  {
    id: "New",
    name: "New",
    color: "text-blue-accent-primary",
    bgColor: "bg-blue-secondary",
  },
  {
    id: "Exploring",
    name: "Exploring",
    color: "text-purple-secondary",
    bgColor: "bg-purple-secondary",
  },
  {
    id: "Planned",
    name: "Planned",
    color: "text-green-primary",
    bgColor: "bg-green-secondary",
  },
  {
    id: "Parked",
    name: "Parked",
    color: "text-tertiary",
    bgColor: "bg-secondary",
  },
];

const statusFilters = [
  { id: "New", label: "New" },
  { id: "Exploring", label: "Exploring" },
  { id: "Planned", label: "Planned" },
  { id: "Parked", label: "Parked" },
];

const propertyDefs = [
  { id: "title", name: "Idea", type: "Title" },
  { id: "status", name: "Status", type: "Select" },
  { id: "author", name: "Author", type: "Person" },
  { id: "votes", name: "Votes", type: "Number" },
  { id: "effort", name: "Effort", type: "Select" },
];

const columns: DatabaseColumn<IdeaRow>[] = [
  {
    id: "title",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Idea</span>
      </div>
    ),
    labelText: "Idea",
    width: "w-[36%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="bg-secondary flex size-6 items-center justify-center rounded-xs text-[13px]">
          💡
        </span>
        <span className="text-primary truncate font-medium">{row.title}</span>
      </div>
    ),
  },
  {
    id: "status",
    label: "Status",
    labelText: "Status",
    width: "w-[14%]",
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
    id: "author",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={peopleIcon} color="secondary" size={14} />
        <span>Author</span>
      </div>
    ),
    labelText: "Author",
    width: "w-[18%]",
    render: (row) => <span className="text-primary text-sm">{row.author}</span>,
  },
  {
    id: "votes",
    label: "Votes",
    labelText: "Votes",
    width: "w-[10%]",
    render: (row) => (
      <span className="text-secondary text-sm">{row.votes}</span>
    ),
  },
  {
    id: "effort",
    label: "Effort",
    labelText: "Effort",
    width: "w-[10%]",
    render: (row) => (
      <Badge
        variant="secondary"
        className={cn(
          "rounded-full border-0 px-2.5 py-1 text-[11px] font-medium",
          effortColors[row.effort],
        )}
      >
        {row.effort}
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
    <NotionShell title="Product ideas">
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <div className="mb-2 text-[78px] leading-[86px]">💡</div>
        <h1 className="text-primary text-[40px] font-bold tracking-tight">
          Product ideas
        </h1>
        <p className="text-secondary mt-2 text-[15px]">
          Ideas from the team, ranked by votes. Add yours below.
        </p>

        <div className="mt-8">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <ViewSwitcher
                activeView={view}
                onViewChange={setView}
                onFilterClick={() => setFilterOpen(!filterOpen)}
                filterActive={activeFilters.size > 0}
              />
            </div>
            <DatabaseSettingsPopover
              properties={propertyDefs}
              activeView={view}
              onViewChange={setView}
            />
          </div>

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
              title="All ideas"
              icon={collectionIcon}
              columns={columns}
              data={filtered}
              onNew={() => {}}
            />
          ) : (
            <div className="mt-4">
              <BoardView
                columns={boardColumns}
                items={filtered}
                groupBy="status"
                getItemId={(r) => r.id}
                renderCard={(row) => (
                  <div>
                    <p className="text-primary text-sm font-medium">
                      {row.title}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-tertiary text-xs">
                        {row.author}
                      </span>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "rounded-full border-0 px-1.5 py-0.5 text-[10px] font-medium",
                          effortColors[row.effort],
                        )}
                      >
                        {row.effort}
                      </Badge>
                    </div>
                    <span className="text-quaternary mt-1 block text-xs">
                      {row.votes} votes
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
