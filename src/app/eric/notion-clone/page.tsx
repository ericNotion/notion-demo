"use client";

import {
  createBlockId,
  type Block,
  type DatabaseBlock,
} from "@/components/notion-kit/editor/atoms";
import {
  DatabaseToolbar,
  ReusableDatabase,
  type Column as DatabaseColumn,
} from "@/components/playground-kit/ReusableDatabase";
import { Icon } from "@nds-icons";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { numberIcon } from "@nds-icons/number/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { peopleIcon } from "@nds-icons/people/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback, useState } from "react";
import { ContentPage } from "./components/ContentPage";
import { EmojiPicker } from "./components/EmojiPicker";
import { PagePeekModal, type PageProperty } from "./components/PagePeekModal";
import { StatusBadge } from "./components/StatusBadge";

const titleAtom = atomWithStorage(
  "eric-nc-product-workspace-title",
  "Product workspace",
);
const lastSavedAtom = atom<Date | null>(null);

const LAUNCH_DB_ID = "db_launch_tracker";
const IDEAS_DB_ID = "db_product_ideas";

const blocksAtom = atomWithStorage<Block[]>("eric-nc-pw-blocks-v2", [
  {
    id: createBlockId(),
    type: "paragraph",
    text: "Welcome to the team workspace. This page serves as the central hub for our product development process, including goals, key decisions, and ongoing projects.",
  },
  { id: createBlockId(), type: "h2", text: "Getting started" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "If you're new to the team, start by reading through the sections below. Each one links to deeper docs and databases you'll use day to day.",
  },
  { id: createBlockId(), type: "h2", text: "Key resources" },
  {
    id: createBlockId(),
    type: "ul",
    items: [
      {
        id: createBlockId("li"),
        text: "Product roadmap \u2014 quarterly goals and feature priorities",
      },
      {
        id: createBlockId("li"),
        text: "Design system \u2014 components, tokens, and usage guidelines",
      },
      {
        id: createBlockId("li"),
        text: "Engineering wiki \u2014 architecture decisions and runbooks",
      },
      {
        id: createBlockId("li"),
        text: "Meeting notes \u2014 weekly syncs and planning sessions",
      },
    ],
  },
  { id: createBlockId(), type: "h2", text: "How we work" },
  {
    id: createBlockId(),
    type: "paragraph",
    text: "We run two-week cycles with a planning session at the start and a demo at the end. Each cycle has a theme that aligns with our quarterly objectives.",
  },
  {
    id: createBlockId(),
    type: "callout",
    text: "Start by exploring the sidebar to find docs, databases, and AI tools. Use \u2318K to search across all pages.",
    icon: "💡",
  },
  { id: createBlockId(), type: "divider" },
  { id: LAUNCH_DB_ID, type: "database", title: "Launch tracker", emoji: "🚀" },
  { id: createBlockId(), type: "divider" },
  { id: IDEAS_DB_ID, type: "database", title: "Product ideas", emoji: "💡" },
  { id: createBlockId(), type: "paragraph", text: "" },
]);

// ── Launch tracker data ──

type LaunchRow = {
  id: string;
  slug: string;
  name: string;
  status: "On track" | "In review" | "Blocked" | "Done";
  owner: string;
  due: string;
};

const launchData: LaunchRow[] = [
  {
    id: "1",
    slug: "payments-migration",
    name: "Payments migration",
    status: "In review",
    owner: "Priya Shah",
    due: "Mar 28",
  },
  {
    id: "2",
    slug: "self-serve-onboarding",
    name: "Self-serve onboarding",
    status: "On track",
    owner: "Jordan Lee",
    due: "Apr 02",
  },
  {
    id: "3",
    slug: "customer-health-report",
    name: "Customer health report",
    status: "Blocked",
    owner: "Maya Chen",
    due: "Apr 04",
  },
  {
    id: "4",
    slug: "api-v2-rollout",
    name: "API v2 rollout",
    status: "Done",
    owner: "Lena Park",
    due: "Mar 20",
  },
];

const launchStatusStyles: Record<
  LaunchRow["status"],
  { dot: string; bg: string }
> = {
  "On track": { dot: "bg-green-600", bg: "bg-green-secondary" },
  "In review": { dot: "bg-blue-500", bg: "bg-blue-secondary" },
  Blocked: { dot: "bg-red-500", bg: "bg-red-secondary" },
  Done: { dot: "bg-gray-400", bg: "bg-secondary" },
};

const launchColumns: DatabaseColumn<LaunchRow>[] = [
  {
    id: "name",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Name</span>
      </div>
    ),
    width: "w-[34%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-[13px]">📄</span>
        <span className="text-primary truncate text-sm font-medium">
          {row.name}
        </span>
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
    width: "w-[22%]",
    render: (row) => {
      const s = launchStatusStyles[row.status];
      return <StatusBadge label={row.status} dotColor={s.dot} bgColor={s.bg} />;
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
    width: "w-[22%]",
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
    width: "w-[22%]",
    render: (row) => <span className="text-secondary text-sm">{row.due}</span>,
  },
];

function getLaunchProperties(row: LaunchRow): PageProperty[] {
  const s = launchStatusStyles[row.status];
  return [
    {
      label: "Status",
      icon: starIcon,
      value: <StatusBadge label={row.status} dotColor={s.dot} bgColor={s.bg} />,
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
  ];
}

// ── Product ideas data ──

type IdeaRow = {
  id: string;
  slug: string;
  title: string;
  status: "New" | "Exploring" | "Planned" | "Parked";
  author: string;
  votes: number;
};

const ideaData: IdeaRow[] = [
  {
    id: "1",
    slug: "inline-ai-writing-assistant",
    title: "Inline AI writing assistant",
    status: "Exploring",
    author: "Sophie Tran",
    votes: 24,
  },
  {
    id: "2",
    slug: "template-gallery",
    title: "Template gallery for new pages",
    status: "Exploring",
    author: "Maya Chen",
    votes: 31,
  },
  {
    id: "3",
    slug: "offline-mode-mobile",
    title: "Offline mode for mobile",
    status: "Parked",
    author: "Jordan Lee",
    votes: 45,
  },
];

const ideaStatusStyles: Record<IdeaRow["status"], { dot: string; bg: string }> =
  {
    New: { dot: "bg-blue-500", bg: "bg-blue-secondary" },
    Exploring: { dot: "bg-purple-500", bg: "bg-purple-secondary" },
    Planned: { dot: "bg-green-600", bg: "bg-green-secondary" },
    Parked: { dot: "bg-gray-400", bg: "bg-secondary" },
  };

const ideaColumns: DatabaseColumn<IdeaRow>[] = [
  {
    id: "title",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Idea</span>
      </div>
    ),
    width: "w-[36%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-[13px]">💡</span>
        <span className="text-primary truncate text-sm font-medium">
          {row.title}
        </span>
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
    width: "w-[18%]",
    render: (row) => {
      const s = ideaStatusStyles[row.status];
      return <StatusBadge label={row.status} dotColor={s.dot} bgColor={s.bg} />;
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
    width: "w-[24%]",
    render: (row) => <span className="text-primary text-sm">{row.author}</span>,
  },
  {
    id: "votes",
    label: (
      <div className="flex items-center gap-1.5">
        <Icon icon={numberIcon} color="secondary" size={14} />
        <span>Votes</span>
      </div>
    ),
    width: "w-[22%]",
    render: (row) => (
      <span className="text-secondary text-sm">{row.votes}</span>
    ),
  },
];

function getIdeaProperties(row: IdeaRow): PageProperty[] {
  const s = ideaStatusStyles[row.status];
  return [
    {
      label: "Status",
      icon: starIcon,
      value: <StatusBadge label={row.status} dotColor={s.dot} bgColor={s.bg} />,
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
  ];
}

// ── Inline database content renderer ──

function InlineDatabaseContent({
  block,
  onRowClick,
  onTitleChange,
}: {
  block: DatabaseBlock;
  onRowClick: (data: {
    title: string;
    icon: string;
    properties: PageProperty[];
    href: string;
    bodyStorageKey: string;
  }) => void;
  onTitleChange: (title: string) => void;
}) {
  const [emoji, setEmoji] = useState(block.emoji || "📊");
  const [title, setTitle] = useState(block.title);
  const [launches, setLaunches] = useState(launchData);
  const [ideas, setIdeas] = useState(ideaData);

  const titleInput = (
    <input
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        onTitleChange(e.target.value);
      }}
      className="text-primary min-w-0 flex-1 bg-transparent text-xl font-bold outline-hidden placeholder:text-[#c4c4c4]"
      placeholder="Untitled"
    />
  );

  if (block.id === LAUNCH_DB_ID) {
    const addLaunch = () => {
      const id = String(launches.length + 1);
      const slug = `new-launch-${id}`;
      setLaunches((prev) => [
        ...prev,
        { id, slug, name: "", status: "On track" as const, owner: "", due: "" },
      ]);
    };
    return (
      <div className="my-4">
        <div className="mb-3 flex items-center gap-2">
          <EmojiPicker value={emoji} onChange={setEmoji} size="md" />
          {titleInput}
        </div>
        <DatabaseToolbar
          compact
          views={[{ id: "table", label: "All launches", icon: viewTableIcon }]}
          onNew={addLaunch}
        />
        <ReusableDatabase
          title="Launch tracker"
          columns={launchColumns}
          data={launches}
          onNew={addLaunch}
          onRowClick={(row) =>
            onRowClick({
              title: row.name,
              icon: "🚀",
              properties: getLaunchProperties(row),
              href: `/eric/notion-clone/launch-tracker/${row.slug}`,
              bodyStorageKey: `eric-nc-launch-tracker-${row.slug}`,
            })
          }
          compact
          showHeader={false}
        />
      </div>
    );
  }

  if (block.id === IDEAS_DB_ID) {
    const addIdea = () => {
      const id = String(ideas.length + 1);
      const slug = `new-idea-${id}`;
      setIdeas((prev) => [
        ...prev,
        { id, slug, title: "", status: "New" as const, author: "", votes: 0 },
      ]);
    };
    return (
      <div className="my-4">
        <div className="mb-3 flex items-center gap-2">
          <EmojiPicker value={emoji} onChange={setEmoji} size="md" />
          {titleInput}
        </div>
        <DatabaseToolbar
          compact
          views={[{ id: "table", label: "All ideas", icon: viewTableIcon }]}
          onNew={addIdea}
        />
        <ReusableDatabase
          title="Product ideas"
          columns={ideaColumns}
          data={ideas}
          onNew={addIdea}
          onRowClick={(row) =>
            onRowClick({
              title: row.title,
              icon: "💡",
              properties: getIdeaProperties(row),
              href: `/eric/notion-clone/product-ideas/${row.slug}`,
              bodyStorageKey: `eric-nc-product-ideas-${row.slug}`,
            })
          }
          compact
          showHeader={false}
        />
      </div>
    );
  }

  return (
    <EmptyInlineDatabase
      emoji={emoji}
      title={title}
      onTitleChange={(t) => {
        setTitle(t);
        onTitleChange(t);
      }}
      onRowClick={onRowClick}
      blockId={block.id}
    />
  );
}

function EmptyInlineDatabase({
  emoji,
  title,
  onTitleChange,
  onRowClick,
  blockId,
}: {
  emoji: string;
  title: string;
  onTitleChange: (title: string) => void;
  onRowClick: (data: {
    title: string;
    icon: string;
    properties: PageProperty[];
    href: string;
    bodyStorageKey: string;
  }) => void;
  blockId: string;
}) {
  const [localEmoji, setLocalEmoji] = useState(emoji);
  const [localTitle, setLocalTitle] = useState(title);
  const [rows, setRows] = useState<{ id: string; name: string }[]>([]);
  const addRow = () =>
    setRows((prev) => [...prev, { id: String(prev.length + 1), name: "" }]);
  const emptyRowCount = rows.length === 0 ? 3 : 0;

  const handleRowClick = (row: { id: string; name: string }) => {
    onRowClick({
      title: row.name || "Untitled",
      icon: "📄",
      properties: [],
      href: `/eric/notion-clone/${blockId}/${row.id}`,
      bodyStorageKey: `eric-nc-db-${blockId}-${row.id}`,
    });
  };

  return (
    <div className="my-4">
      <div className="flex items-center justify-between py-1">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <EmojiPicker value={localEmoji} onChange={setLocalEmoji} size="md" />
          <input
            value={localTitle}
            onChange={(e) => {
              setLocalTitle(e.target.value);
              onTitleChange(e.target.value);
            }}
            className="text-primary min-w-0 flex-1 bg-transparent text-xl font-bold outline-hidden placeholder:text-[#c4c4c4]"
            placeholder="Untitled"
          />
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M10 2l4 4M2 14l4-4M14 2l-4 4M2 14l4-4" />
              <path d="M10 2h4v4M6 14H2v-4" />
            </svg>
          </button>
          <button
            type="button"
            className="text-tertiary hover:bg-secondary flex size-7 items-center justify-center rounded-xs"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <circle cx="8" cy="4" r="1" />
              <circle cx="8" cy="8" r="1" />
              <circle cx="8" cy="12" r="1" />
              <path d="M3 6h10M3 10h10" />
            </svg>
          </button>
          <button
            type="button"
            className="flex items-center gap-0.5 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
            onClick={addRow}
          >
            New
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <path d="M2 4l3 3 3-3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="border-primary/60 border-t">
        <div className="border-primary/60 flex border-b">
          <div className="border-primary/60 flex flex-1 items-center gap-1.5 border-r px-3 py-1.5">
            <span className="text-tertiary text-sm font-medium">Aa</span>
            <span className="text-primary text-sm">Name</span>
          </div>
          <div className="flex flex-1 items-center gap-1.5 px-3 py-1.5">
            <span className="text-tertiary text-sm">+</span>
            <span className="text-tertiary text-sm">Add property</span>
          </div>
        </div>
        {rows.map((row) => (
          <button
            key={row.id}
            type="button"
            className="border-primary/60 flex h-8 w-full items-center gap-1.5 border-b px-3 text-left hover:bg-[#f7f7f5]"
            onClick={() => handleRowClick(row)}
          >
            <span
              className="text-[13px]"
              style={{
                fontFamily:
                  "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif",
              }}
            >
              📄
            </span>
            <span className="text-primary text-sm">
              {row.name || "Untitled"}
            </span>
          </button>
        ))}
        {rows.length > 0 && (
          <button
            type="button"
            className="border-primary/60 text-tertiary flex h-8 w-full items-center gap-1.5 border-b px-3 text-sm"
            onClick={addRow}
          >
            <span>+</span>
            <span>New page</span>
          </button>
        )}
        {Array.from({ length: emptyRowCount }).map((_, i) => (
          <div
            key={i}
            className="group/row border-primary/60 relative h-8 border-b"
          >
            {i === 0 && (
              <button
                type="button"
                className="text-tertiary absolute inset-0 flex items-center gap-1.5 px-3 text-sm opacity-0 transition-opacity group-hover/row:opacity-100"
                onClick={addRow}
              >
                <span>+</span>
                <span>New page</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [peekData, setPeekData] = useState<{
    title: string;
    icon: string;
    properties: PageProperty[];
    href: string;
    bodyStorageKey: string;
  } | null>(null);

  const renderDatabaseBlock = useCallback(
    (block: DatabaseBlock, onTitleChange: (title: string) => void) => (
      <InlineDatabaseContent
        block={block}
        onRowClick={setPeekData}
        onTitleChange={onTitleChange}
      />
    ),
    [],
  );

  return (
    <>
      <ContentPage
        emoji="📄"
        emojiStorageKey="eric-nc-product-workspace-emoji"
        titleAtom={titleAtom}
        blocksAtom={blocksAtom}
        lastSavedAtom={lastSavedAtom}
        renderDatabaseBlock={renderDatabaseBlock}
      />

      {peekData && (
        <PagePeekModal
          open={!!peekData}
          onOpenChange={(open) => !open && setPeekData(null)}
          title={peekData.title}
          icon={peekData.icon}
          properties={peekData.properties}
          href={peekData.href}
          bodyStorageKey={peekData.bodyStorageKey}
        />
      )}
    </>
  );
}
