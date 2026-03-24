"use client";

import { type Column as DatabaseColumn } from "@/components/playground-kit/ReusableDatabase";
import { Icon } from "@nds-icons";
import { flagIcon } from "@nds-icons/flag/default.icon";
import { numberIcon } from "@nds-icons/number/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import {
  DatabasePage,
  type DatabasePageConfig,
  type PageProperty,
} from "../components/DatabasePage";
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

const config: DatabasePageConfig<IdeaRow> = {
  defaultEmoji: "💡",
  emojiStorageKey: "eric-nc-product-ideas-emoji",
  titleStorageKey: "eric-nc-product-ideas-title",
  defaultTitle: "Product ideas",
  description: "Ideas from the team, ranked by votes. Add yours below.",
  initialRows: rows,
  createRow: () => {
    const now = Date.now();
    return {
      id: String(now),
      slug: `new-idea-${now}`,
      title: "",
      status: "New",
      author: "",
      votes: 0,
      effort: "S",
    };
  },
  tableColumns: columns,
  tableTitle: "All ideas",
  boardColumns: [
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
  ],
  groupByField: "status",
  views: [
    { id: "table", label: "All Ideas", icon: viewTableIcon },
    { id: "board", label: "By Status", icon: viewBoardIcon },
  ],
  getProperties: getIdeaProperties,
  getTitle: (row) => row.title,
  titleField: "title",
  renderBoardCard: (row) => (
    <div>
      <p className="text-primary text-sm font-medium">{row.title}</p>
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
  ),
  detailHrefPrefix: "/eric/notion-clone/product-ideas",
  bodyStorageKeyPrefix: "eric-nc-product-ideas",
  peekIcon: "💡",
};

export default function Page() {
  return <DatabasePage config={config} />;
}
