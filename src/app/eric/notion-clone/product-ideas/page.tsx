"use client";

import {
  DatabaseToolbar,
  ReusableDatabase,
  type Column as DatabaseColumn,
  type DatabaseViewTab,
} from "@/components/playground-kit/ReusableDatabase";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { collectionIcon } from "@nds-icons/collection/default.icon";
import { flagIcon } from "@nds-icons/flag/default.icon";
import { numberIcon } from "@nds-icons/number/default.icon";
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

export type IdeaRow = {
  id: string;
  slug: string;
  title: string;
  status: "New" | "Exploring" | "Planned" | "Parked";
  author: string;
  votes: number;
  effort: "S" | "M" | "L" | "XL";
};

export const rows: IdeaRow[] = [
  {
    id: "1",
    slug: "inline-ai-writing-assistant",
    title: "Inline AI writing assistant",
    status: "Exploring",
    author: "Sophie Tran",
    votes: 24,
    effort: "L",
  },
  {
    id: "2",
    slug: "keyboard-shortcut-cheat-sheet",
    title: "Keyboard shortcut cheat sheet",
    status: "Planned",
    author: "James Wilson",
    votes: 18,
    effort: "S",
  },
  {
    id: "3",
    slug: "slack-integration",
    title: "Slack integration for page updates",
    status: "New",
    author: "Ravi Kumar",
    votes: 12,
    effort: "M",
  },
  {
    id: "4",
    slug: "template-gallery",
    title: "Template gallery for new pages",
    status: "Exploring",
    author: "Maya Chen",
    votes: 31,
    effort: "M",
  },
  {
    id: "5",
    slug: "offline-mode-mobile",
    title: "Offline mode for mobile",
    status: "Parked",
    author: "Jordan Lee",
    votes: 45,
    effort: "XL",
  },
  {
    id: "6",
    slug: "page-analytics-dashboard",
    title: "Page analytics dashboard",
    status: "New",
    author: "Lena Park",
    votes: 9,
    effort: "M",
  },
  {
    id: "7",
    slug: "bulk-page-export-pdf",
    title: "Bulk page export to PDF",
    status: "Planned",
    author: "Evan Soto",
    votes: 15,
    effort: "S",
  },
];

export const statusStyles: Record<
  IdeaRow["status"],
  { dot: string; bg: string; text: string }
> = {
  New: {
    dot: "bg-blue-500",
    bg: "bg-blue-secondary",
    text: "text-blue-accent-primary",
  },
  Exploring: {
    dot: "bg-purple-500",
    bg: "bg-purple-secondary",
    text: "text-purple-secondary",
  },
  Planned: {
    dot: "bg-green-600",
    bg: "bg-green-secondary",
    text: "text-green-primary",
  },
  Parked: { dot: "bg-gray-400", bg: "bg-secondary", text: "text-tertiary" },
};

export const effortStyles: Record<
  IdeaRow["effort"],
  { dot: string; bg: string; text: string }
> = {
  S: {
    dot: "bg-green-600",
    bg: "bg-green-secondary",
    text: "text-green-primary",
  },
  M: {
    dot: "bg-blue-500",
    bg: "bg-blue-secondary",
    text: "text-blue-accent-primary",
  },
  L: {
    dot: "bg-orange-500",
    bg: "bg-orange-secondary",
    text: "text-orange-secondary",
  },
  XL: { dot: "bg-red-500", bg: "bg-red-secondary", text: "text-red-secondary" },
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

const ideaEmojiAtom = atomWithStorage("eric-nc-product-ideas-emoji", "💡");

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
        <span className="text-[15px]">📄</span>
        <span className="text-primary truncate font-medium">{row.title}</span>
      </div>
    ),
  },
  {
    id: "status",
    label: "Status",
    labelText: "Status",
    width: "w-[14%]",
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
    render: (row) => {
      const e = effortStyles[row.effort];
      return (
        <StatusBadge
          label={row.effort}
          dotColor={e.dot}
          bgColor={e.bg}
          textColor={e.text}
        />
      );
    },
  },
];

export function getIdeaProperties(row: IdeaRow): PageProperty[] {
  const s = statusStyles[row.status];
  const e = effortStyles[row.effort];
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
      label: "Author",
      icon: peopleIcon,
      value: <span className="text-primary">{row.author}</span>,
    },
    {
      label: "Votes",
      icon: numberIcon,
      value: <span className="text-primary">{row.votes}</span>,
    },
    {
      label: "Effort",
      icon: flagIcon,
      value: (
        <StatusBadge
          label={row.effort}
          dotColor={e.dot}
          bgColor={e.bg}
          textColor={e.text}
        />
      ),
    },
  ];
}

const dbViews: DatabaseViewTab[] = [
  { id: "table", label: "All Ideas", icon: viewTableIcon },
  { id: "board", label: "By Status", icon: viewBoardIcon },
];

export default function Page() {
  const [view, setView] = useState("table");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [filterOpen, setFilterOpen] = useState(false);
  const [peekRow, setPeekRow] = useState<IdeaRow | null>(null);
  const [emoji, setEmoji] = useAtom(ideaEmojiAtom);
  const [allRows, setAllRows] = useState(rows);

  const addRow = () => {
    const id = String(Date.now());
    const slug = `new-idea-${id}`;
    const newRow: IdeaRow = {
      id,
      slug,
      title: "",
      status: "New",
      author: "",
      votes: 0,
      effort: "S",
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
          storageKey="eric-nc-product-ideas-title"
          defaultTitle="Product ideas"
        />
        <p className="text-secondary mt-2 text-[15px]">
          Ideas from the team, ranked by votes. Add yours below.
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
              title="All ideas"
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
                  <p className="text-primary text-sm font-medium">
                    {row.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-tertiary text-xs">{row.author}</span>
                    <StatusBadge
                      label={row.effort}
                      dotColor={effortStyles[row.effort].dot}
                      bgColor={effortStyles[row.effort].bg}
                    />
                  </div>
                  <span className="text-quaternary mt-1 block text-xs">
                    {row.votes} votes
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
          title={peekRow.title}
          icon="💡"
          properties={getIdeaProperties(peekRow)}
          href={`/eric/notion-clone/product-ideas/${peekRow.slug}`}
          bodyStorageKey={`eric-nc-product-ideas-${peekRow.slug}`}
        />
      )}
    </>
  );
}
