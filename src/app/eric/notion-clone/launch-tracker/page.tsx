"use client";

import {
  DatabaseToolbar,
  ReusableDatabase,
  type Column as DatabaseColumn,
  type DatabaseViewTab,
} from "@/components/playground-kit/ReusableDatabase";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { collectionIcon } from "@nds-icons/collection/default.icon";
import { flagIcon } from "@nds-icons/flag/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useState } from "react";
import { BoardView, type BoardColumn } from "../components/BoardView";
import { EditableTitle } from "../components/EditableTitle";
import { EmojiPicker } from "../components/EmojiPicker";
import { FilterBar } from "../components/FilterBar";
import { PagePeekModal, type PageProperty } from "../components/PagePeekModal";
import { StatusBadge } from "../components/StatusBadge";

export type LaunchRow = {
  id: string;
  slug: string;
  name: string;
  status: "On track" | "In review" | "Blocked" | "Done";
  owner: string;
  due: string;
  priority: "High" | "Medium" | "Low";
};

export const rows: LaunchRow[] = [
  {
    id: "1",
    slug: "payments-migration",
    name: "Payments migration",
    status: "In review",
    owner: "Priya Shah",
    due: "Mar 28",
    priority: "High",
  },
  {
    id: "2",
    slug: "self-serve-onboarding",
    name: "Self-serve onboarding",
    status: "On track",
    owner: "Jordan Lee",
    due: "Apr 02",
    priority: "Medium",
  },
  {
    id: "3",
    slug: "customer-health-report",
    name: "Customer health report",
    status: "Blocked",
    owner: "Maya Chen",
    due: "Apr 04",
    priority: "High",
  },
  {
    id: "4",
    slug: "pricing-faq-refresh",
    name: "Pricing FAQ refresh",
    status: "On track",
    owner: "Evan Soto",
    due: "Apr 09",
    priority: "Low",
  },
  {
    id: "5",
    slug: "api-v2-rollout",
    name: "API v2 rollout",
    status: "Done",
    owner: "Lena Park",
    due: "Mar 20",
    priority: "High",
  },
  {
    id: "6",
    slug: "mobile-push-notifications",
    name: "Mobile push notifications",
    status: "On track",
    owner: "Ravi Kumar",
    due: "Apr 15",
    priority: "Medium",
  },
  {
    id: "7",
    slug: "dashboard-redesign",
    name: "Dashboard redesign",
    status: "In review",
    owner: "Sophie Tran",
    due: "Apr 11",
    priority: "Medium",
  },
  {
    id: "8",
    slug: "accessibility-audit",
    name: "Accessibility audit",
    status: "On track",
    owner: "James Wilson",
    due: "Apr 18",
    priority: "Low",
  },
];

export const statusStyles: Record<
  LaunchRow["status"],
  { dot: string; bg: string; text: string }
> = {
  "On track": {
    dot: "bg-green-600",
    bg: "bg-green-secondary",
    text: "text-green-primary",
  },
  "In review": {
    dot: "bg-blue-500",
    bg: "bg-blue-secondary",
    text: "text-blue-accent-primary",
  },
  Blocked: {
    dot: "bg-red-500",
    bg: "bg-red-secondary",
    text: "text-red-secondary",
  },
  Done: { dot: "bg-gray-400", bg: "bg-secondary", text: "text-tertiary" },
};

export const priorityStyles: Record<
  LaunchRow["priority"],
  { dot: string; bg: string; text: string }
> = {
  High: {
    dot: "bg-orange-500",
    bg: "bg-orange-secondary",
    text: "text-orange-secondary",
  },
  Medium: { dot: "bg-gray-400", bg: "bg-secondary", text: "text-secondary" },
  Low: {
    dot: "bg-gray-300",
    bg: "bg-tertiary-translucent",
    text: "text-tertiary",
  },
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

const launchEmojiAtom = atomWithStorage("eric-nc-launch-tracker-emoji", "🚀");

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
        <span className="text-[15px]">📄</span>
        <span className="text-primary truncate font-medium">{row.name}</span>
      </div>
    ),
  },
  {
    id: "status",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={starIcon} color="secondary" size={14} />
        <span>Status</span>
      </div>
    ),
    labelText: "Status",
    width: "w-[18%]",
    render: (row) => {
      const s = statusStyles[row.status];
      return (
        <StatusBadge
          label={row.status}
          dotColor={s.dot}
          bgColor={s.bg}
          textColor={s.text}
        />
      );
    },
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
    render: (row) => {
      const p = priorityStyles[row.priority];
      return (
        <StatusBadge
          label={row.priority}
          dotColor={p.dot}
          bgColor={p.bg}
          textColor={p.text}
        />
      );
    },
  },
];

export function getLaunchProperties(row: LaunchRow): PageProperty[] {
  const s = statusStyles[row.status];
  const p = priorityStyles[row.priority];
  return [
    {
      label: "Status",
      icon: starIcon,
      value: (
        <StatusBadge
          label={row.status}
          dotColor={s.dot}
          bgColor={s.bg}
          textColor={s.text}
        />
      ),
    },
    {
      label: "Owner",
      icon: peopleIcon,
      value: <span className="text-primary">{row.owner}</span>,
    },
    {
      label: "Due",
      icon: calendarAltIcon,
      value: <span className="text-primary">{row.due}</span>,
    },
    {
      label: "Priority",
      icon: flagIcon,
      value: (
        <StatusBadge
          label={row.priority}
          dotColor={p.dot}
          bgColor={p.bg}
          textColor={p.text}
        />
      ),
    },
  ];
}

const dbViews: DatabaseViewTab[] = [
  { id: "table", label: "All Tasks", icon: viewTableIcon },
  { id: "board", label: "By Status", icon: viewBoardIcon },
];

export default function Page() {
  const [view, setView] = useState("table");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [filterOpen, setFilterOpen] = useState(false);
  const [peekRow, setPeekRow] = useState<LaunchRow | null>(null);
  const [emoji, setEmoji] = useAtom(launchEmojiAtom);
  const [allRows, setAllRows] = useState(rows);

  const addRow = () => {
    const id = String(Date.now());
    const slug = `new-launch-${id}`;
    const newRow: LaunchRow = {
      id,
      slug,
      name: "",
      status: "On track",
      owner: "",
      due: "",
      priority: "Medium",
    };
    setAllRows((prev) => [...prev, newRow]);
    setPeekRow(newRow);
  };

  const filtered =
    activeFilters.size > 0
      ? allRows.filter((r) => activeFilters.has(r.status))
      : allRows;

  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <EmojiPicker value={emoji} onChange={setEmoji} />
        <EditableTitle
          storageKey="eric-nc-launch-tracker-title"
          defaultTitle="Launch tracker"
        />
        <p className="text-secondary mt-2 text-[15px]">
          Track launches, owners, and blockers across the team.
        </p>

        <div className="mt-8">
          <DatabaseToolbar
            views={dbViews}
            activeView={view}
            onViewChange={setView}
            onNew={addRow}
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
              columns={columns}
              data={filtered}
              showHeader={false}
              onNew={addRow}
              onRowClick={setPeekRow}
            />
          ) : (
            <BoardView
              columns={boardColumns}
              items={filtered}
              groupBy="status"
              getItemId={(r) => r.id}
              onCardClick={setPeekRow}
              renderCard={(row) => (
                <div>
                  <p className="text-primary text-sm font-medium">{row.name}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-tertiary text-xs">{row.owner}</span>
                    <StatusBadge
                      label={row.priority}
                      dotColor={priorityStyles[row.priority].dot}
                      bgColor={priorityStyles[row.priority].bg}
                    />
                  </div>
                  <span className="text-quaternary mt-1 block text-xs">
                    {row.due}
                  </span>
                </div>
              )}
            />
          )}
        </div>
      </div>

      {peekRow && (
        <PagePeekModal
          open={!!peekRow}
          onOpenChange={(open) => !open && setPeekRow(null)}
          title={peekRow.name}
          icon="📄"
          properties={getLaunchProperties(peekRow)}
          href={`/eric/notion-clone/launch-tracker/${peekRow.slug}`}
          bodyStorageKey={`eric-nc-launch-tracker-${peekRow.slug}`}
        />
      )}
    </>
  );
}
