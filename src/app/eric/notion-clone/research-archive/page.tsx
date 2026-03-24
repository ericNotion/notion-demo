"use client";

import { type Column as DatabaseColumn } from "@/components/playground-kit/ReusableDatabase";
import { Icon } from "@nds-icons";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { numberIcon } from "@nds-icons/number/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { priceTagIcon } from "@nds-icons/priceTag/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { viewBoardIcon } from "@nds-icons/viewBoard/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import {
  DatabasePage,
  type DatabasePageConfig,
  type PageProperty,
} from "../components/DatabasePage";
import { StatusBadge } from "../components/StatusBadge";

export type ResearchRow = {
  id: string;
  slug: string;
  title: string;
  type: "Interview" | "Survey" | "Usability test" | "Competitive analysis";
  researcher: string;
  date: string;
  insights: number;
  tags: string[];
};

export const rows: ResearchRow[] = [
  {
    id: "1",
    slug: "onboarding-friction-points",
    title: "Onboarding friction points",
    type: "Interview",
    researcher: "Maya Chen",
    date: "Mar 15",
    insights: 8,
    tags: ["Onboarding", "UX"],
  },
  {
    id: "2",
    slug: "pricing-page-ab-results",
    title: "Pricing page A/B results",
    type: "Survey",
    researcher: "Jordan Lee",
    date: "Mar 12",
    insights: 5,
    tags: ["Pricing", "Growth"],
  },
  {
    id: "3",
    slug: "mobile-nav-usability",
    title: "Mobile nav usability",
    type: "Usability test",
    researcher: "Sophie Tran",
    date: "Mar 10",
    insights: 12,
    tags: ["Mobile", "Navigation"],
  },
  {
    id: "4",
    slug: "competitor-feature-matrix",
    title: "Competitor feature matrix",
    type: "Competitive analysis",
    researcher: "Evan Soto",
    date: "Mar 08",
    insights: 15,
    tags: ["Strategy"],
  },
  {
    id: "5",
    slug: "enterprise-user-interviews",
    title: "Enterprise user interviews",
    type: "Interview",
    researcher: "Priya Shah",
    date: "Mar 05",
    insights: 9,
    tags: ["Enterprise", "B2B"],
  },
  {
    id: "6",
    slug: "search-ux-benchmarking",
    title: "Search UX benchmarking",
    type: "Usability test",
    researcher: "Lena Park",
    date: "Mar 01",
    insights: 7,
    tags: ["Search", "UX"],
  },
  {
    id: "7",
    slug: "nps-deep-dive-q1",
    title: "NPS deep-dive Q1",
    type: "Survey",
    researcher: "Ravi Kumar",
    date: "Feb 28",
    insights: 4,
    tags: ["NPS", "Satisfaction"],
  },
];

export const typeStyles: Record<
  ResearchRow["type"],
  { dot: string; bg: string }
> = {
  Interview: { dot: "bg-purple-500", bg: "bg-purple-secondary" },
  Survey: { dot: "bg-blue-500", bg: "bg-blue-secondary" },
  "Usability test": { dot: "bg-green-600", bg: "bg-green-secondary" },
  "Competitive analysis": { dot: "bg-orange-500", bg: "bg-orange-secondary" },
};

const multiSelectColors = [
  { bg: "#e8deee", text: "#553c7b" },
  { bg: "#d3e5ef", text: "#20536b" },
  { bg: "#dbeddb", text: "#2b6330" },
  { bg: "#fdecc8", text: "#856518" },
  { bg: "#fadec9", text: "#8a4a17" },
  { bg: "#ffe2dd", text: "#93362b" },
  { bg: "#f5e0e9", text: "#8c3662" },
  { bg: "#f1e4dd", text: "#6b4225" },
  { bg: "#e3e2e0", text: "#55534e" },
];

function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) | 0;
  }
  return multiSelectColors[Math.abs(hash) % multiSelectColors.length];
}

function MultiSelectTag({ tag }: { tag: string }) {
  const color = getTagColor(tag);
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-xs px-[6px] py-[2px] text-[12px]/4 font-medium"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {tag}
    </span>
  );
}

function MultiSelectCell({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <MultiSelectTag key={tag} tag={tag} />
      ))}
    </div>
  );
}

export function getResearchProperties(row: ResearchRow): PageProperty[] {
  const t = typeStyles[row.type];
  return [
    {
      label: "Type",
      icon: starIcon,
      value: <StatusBadge label={row.type} dotColor={t.dot} bgColor={t.bg} />,
    },
    {
      label: "Researcher",
      icon: peopleIcon,
      value: <span className="text-primary">{row.researcher}</span>,
    },
    {
      label: "Date",
      icon: calendarAltIcon,
      value: <span className="text-primary">{row.date}</span>,
    },
    {
      label: "Insights",
      icon: numberIcon,
      value: <span className="text-primary">{row.insights}</span>,
    },
    {
      label: "Tags",
      icon: priceTagIcon,
      value: <MultiSelectCell tags={row.tags} />,
    },
  ];
}

const columns: DatabaseColumn<ResearchRow>[] = [
  {
    id: "title",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Title</span>
      </div>
    ),
    labelText: "Title",
    width: "w-[26%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-[15px]">📄</span>
        <span className="text-primary truncate font-medium">{row.title}</span>
      </div>
    ),
  },
  {
    id: "type",
    label: "Type",
    labelText: "Type",
    width: "w-[20%]",
    render: (row) => {
      const t = typeStyles[row.type];
      return <StatusBadge label={row.type} dotColor={t.dot} bgColor={t.bg} />;
    },
  },
  {
    id: "researcher",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={peopleIcon} color="secondary" size={14} />
        <span>Researcher</span>
      </div>
    ),
    labelText: "Researcher",
    width: "w-[14%]",
    render: (row) => (
      <span className="text-primary truncate text-sm">{row.researcher}</span>
    ),
  },
  {
    id: "date",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={calendarAltIcon} color="secondary" size={14} />
        <span>Date</span>
      </div>
    ),
    labelText: "Date",
    width: "w-[10%]",
    render: (row) => <span className="text-secondary text-sm">{row.date}</span>,
  },
  {
    id: "insights",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={numberIcon} color="secondary" size={14} />
        <span>Insights</span>
      </div>
    ),
    labelText: "Insights",
    width: "w-[8%]",
    render: (row) => (
      <span className="text-secondary text-sm">{row.insights}</span>
    ),
  },
  {
    id: "tags",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={priceTagIcon} color="secondary" size={14} />
        <span>Tags</span>
      </div>
    ),
    labelText: "Tags",
    width: "w-[22%]",
    render: (row) => <MultiSelectCell tags={row.tags} />,
  },
];

const config: DatabasePageConfig<ResearchRow> = {
  defaultEmoji: "📊",
  emojiStorageKey: "eric-nc-research-archive-emoji",
  titleStorageKey: "eric-nc-research-archive-title",
  defaultTitle: "Research archive",
  description: "Customer interviews, tagged takeaways, and reusable findings.",
  initialRows: rows,
  createRow: () => {
    const now = Date.now();
    return {
      id: String(now),
      slug: `new-research-${now}`,
      title: "",
      type: "Interview",
      researcher: "",
      date: "",
      insights: 0,
      tags: [],
    };
  },
  tableColumns: columns,
  tableTitle: "All research",
  boardColumns: [
    {
      id: "Interview",
      name: "Interview",
      color: "text-purple-secondary",
      bgColor: "bg-purple-secondary",
    },
    {
      id: "Survey",
      name: "Survey",
      color: "text-blue-accent-primary",
      bgColor: "bg-blue-secondary",
    },
    {
      id: "Usability test",
      name: "Usability test",
      color: "text-green-primary",
      bgColor: "bg-green-secondary",
    },
    {
      id: "Competitive analysis",
      name: "Competitive analysis",
      color: "text-orange-secondary",
      bgColor: "bg-orange-secondary",
    },
  ],
  groupByField: "type",
  views: [
    { id: "table", label: "All Research", icon: viewTableIcon },
    { id: "board", label: "By Type", icon: viewBoardIcon },
  ],
  getProperties: getResearchProperties,
  getTitle: (row) => row.title,
  titleField: "title",
  renderBoardCard: (row) => (
    <div>
      <p className="text-primary text-sm font-medium">{row.title}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-tertiary text-xs">{row.researcher}</span>
        <span className="text-quaternary text-xs">{row.date}</span>
      </div>
      <div className="mt-1.5">
        <MultiSelectCell tags={row.tags} />
      </div>
    </div>
  ),
  detailHrefPrefix: "/eric/notion-clone/research-archive",
  bodyStorageKeyPrefix: "eric-nc-research-archive",
  peekIcon: "📊",
};

export default function Page() {
  return <DatabasePage config={config} />;
}
