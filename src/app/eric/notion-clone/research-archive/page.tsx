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
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { useState } from "react";
import { BoardView, type BoardColumn } from "../components/BoardView";
import { ViewSwitcher, type ViewType } from "../components/ViewSwitcher";
import { NotionShell } from "../shell";

type ResearchRow = {
  id: string;
  title: string;
  type: "Interview" | "Survey" | "Usability test" | "Competitive analysis";
  researcher: string;
  date: string;
  insights: number;
  tags: string[];
};

const rows: ResearchRow[] = [
  {
    id: "1",
    title: "Onboarding friction points",
    type: "Interview",
    researcher: "Maya Chen",
    date: "Mar 15",
    insights: 8,
    tags: ["Onboarding", "UX"],
  },
  {
    id: "2",
    title: "Pricing page A/B results",
    type: "Survey",
    researcher: "Jordan Lee",
    date: "Mar 12",
    insights: 5,
    tags: ["Pricing", "Growth"],
  },
  {
    id: "3",
    title: "Mobile nav usability",
    type: "Usability test",
    researcher: "Sophie Tran",
    date: "Mar 10",
    insights: 12,
    tags: ["Mobile", "Navigation"],
  },
  {
    id: "4",
    title: "Competitor feature matrix",
    type: "Competitive analysis",
    researcher: "Evan Soto",
    date: "Mar 08",
    insights: 15,
    tags: ["Strategy"],
  },
  {
    id: "5",
    title: "Enterprise user interviews",
    type: "Interview",
    researcher: "Priya Shah",
    date: "Mar 05",
    insights: 9,
    tags: ["Enterprise", "B2B"],
  },
  {
    id: "6",
    title: "Search UX benchmarking",
    type: "Usability test",
    researcher: "Lena Park",
    date: "Mar 01",
    insights: 7,
    tags: ["Search", "UX"],
  },
  {
    id: "7",
    title: "NPS deep-dive Q1",
    type: "Survey",
    researcher: "Ravi Kumar",
    date: "Feb 28",
    insights: 4,
    tags: ["NPS", "Satisfaction"],
  },
];

const typeColors: Record<ResearchRow["type"], string> = {
  Interview: "bg-purple-secondary text-purple-secondary",
  Survey: "bg-blue-secondary text-blue-accent-primary",
  "Usability test": "bg-green-secondary text-green-primary",
  "Competitive analysis": "bg-orange-secondary text-orange-secondary",
};

const boardColumns: BoardColumn[] = [
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
];

const propertyDefs = [
  { id: "title", name: "Title", type: "Title" },
  { id: "type", name: "Type", type: "Select" },
  { id: "researcher", name: "Researcher", type: "Person" },
  { id: "date", name: "Date", type: "Date" },
  { id: "insights", name: "Insights", type: "Number" },
  { id: "tags", name: "Tags", type: "Multi-select" },
];

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
    width: "w-[30%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="bg-secondary flex size-6 items-center justify-center rounded-xs text-[13px]">
          📊
        </span>
        <span className="text-primary truncate font-medium">{row.title}</span>
      </div>
    ),
  },
  {
    id: "type",
    label: "Type",
    labelText: "Type",
    width: "w-[16%]",
    render: (row) => (
      <Badge
        variant="secondary"
        className={cn(
          "rounded-full border-0 px-2.5 py-1 text-[11px] font-medium",
          typeColors[row.type],
        )}
      >
        {row.type}
      </Badge>
    ),
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
    width: "w-[16%]",
    render: (row) => (
      <span className="text-primary text-sm">{row.researcher}</span>
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
    width: "w-[12%]",
    render: (row) => <span className="text-secondary text-sm">{row.date}</span>,
  },
  {
    id: "insights",
    label: "Insights",
    labelText: "Insights",
    width: "w-[10%]",
    render: (row) => (
      <span className="text-secondary text-sm">{row.insights} findings</span>
    ),
  },
  {
    id: "tags",
    label: "Tags",
    labelText: "Tags",
    width: "w-[16%]",
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        {row.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-secondary text-secondary rounded-full border-0 px-2 py-0.5 text-[11px]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    ),
  },
];

export default function Page() {
  const [view, setView] = useState<ViewType>("table");

  return (
    <NotionShell title="Research archive">
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <div className="mb-2 text-[78px] leading-[86px]">📊</div>
        <h1 className="text-primary text-[40px] font-bold tracking-tight">
          Research archive
        </h1>
        <p className="text-secondary mt-2 text-[15px]">
          Customer interviews, tagged takeaways, and reusable findings.
        </p>

        <div className="mt-2">
          <ViewSwitcher activeView={view} onViewChange={setView} />

          {view === "table" ? (
            <ReusableDatabase
              title="All research"
              icon={collectionIcon}
              columns={columns}
              data={rows}
              onNew={() => {}}
            />
          ) : (
            <div className="mt-4">
              <BoardView
                columns={boardColumns}
                items={rows}
                groupBy="type"
                getItemId={(r) => r.id}
                renderCard={(row) => (
                  <div>
                    <p className="text-primary text-sm font-medium">
                      {row.title}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-tertiary text-xs">
                        {row.researcher}
                      </span>
                      <span className="text-quaternary text-xs">
                        {row.date}
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {row.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary rounded-full px-1.5 py-0.5 text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
