import type {
  ChatGroup,
  InboxNotification,
  MeetingGroup,
} from "@/components/notion-kit/SlipperySidebar";
import type { LoadedIconFunction } from "@nds-icons";
import { checkStackIcon } from "@nds-icons/checkStack/default.icon";
import { codeIcon } from "@nds-icons/code/default.icon";
import { paperMicrophoneIcon } from "@nds-icons/paperMicrophone/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";

const BASE = "/eric/notion-clone";

export type PageEntry = {
  emoji: string;
  label: string;
  href: string;
  section: "favorites" | "private" | "shared";
  kind: "page" | "collection";
};

export type Agent = {
  id: string;
  name: string;
  avatar: string;
  emoji: string;
  description: string;
  author: string;
  tools: string[];
  model: string;
  category: "custom" | "workspace" | "notion";
  icon?: LoadedIconFunction;
};

export const pages: PageEntry[] = [
  {
    emoji: "📄",
    label: "Product workspace",
    href: BASE,
    section: "favorites",
    kind: "page",
  },
  {
    emoji: "🚀",
    label: "Launch tracker",
    href: `${BASE}/launch-tracker`,
    section: "favorites",
    kind: "collection",
  },
  {
    emoji: "📊",
    label: "Research archive",
    href: `${BASE}/research-archive`,
    section: "favorites",
    kind: "collection",
  },
  {
    emoji: "📝",
    label: "Daily notes",
    href: `${BASE}/daily-notes`,
    section: "private",
    kind: "page",
  },
  {
    emoji: "🎨",
    label: "Design references",
    href: `${BASE}/design-references`,
    section: "private",
    kind: "page",
  },
  {
    emoji: "📋",
    label: "Product handbook",
    href: `${BASE}/product-handbook`,
    section: "shared",
    kind: "page",
  },
  {
    emoji: "💡",
    label: "Product ideas",
    href: `${BASE}/product-ideas`,
    section: "shared",
    kind: "collection",
  },
  {
    emoji: "🤖",
    label: "Agents",
    href: `${BASE}/agents`,
    section: "shared",
    kind: "page",
  },
];

export const agents: Agent[] = [
  {
    id: "1",
    name: "Research Assistant",
    avatar: "/images/customAgentAvatars/square-blue-sm.png",
    emoji: "🔬",
    description:
      "Searches your workspace and the web to find answers, synthesize research, and surface relevant context.",
    author: "Notion",
    tools: ["notionSearch", "deepResearch", "webBrowsing"],
    model: "gpt-4.1",
    category: "workspace",
  },
  {
    id: "2",
    name: "Writing Coach",
    avatar: "/images/customAgentAvatars/bulb-purple-sm.png",
    emoji: "✍️",
    description:
      "Helps improve your writing — checks grammar, suggests edits, and adjusts tone.",
    author: "Notion",
    tools: ["notionSearch"],
    model: "claude-4.5-sonnet",
    category: "workspace",
  },
  {
    id: "3",
    name: "Meeting Summarizer",
    avatar: "",
    emoji: "📋",
    description:
      "Turns meeting transcripts into structured summaries with action items and key decisions.",
    author: "Notion",
    tools: ["notionSearch", "createPages"],
    model: "gpt-4.1",
    category: "workspace",
    icon: paperMicrophoneIcon,
  },
  {
    id: "4",
    name: "Task Prioritizer",
    avatar: "",
    emoji: "🎯",
    description:
      "Analyzes your tasks and suggests priorities based on deadlines, dependencies, and effort.",
    author: "You",
    tools: ["notionSearch"],
    model: "gpt-4.1-mini",
    category: "custom",
    icon: checkStackIcon,
  },
  {
    id: "5",
    name: "Code Reviewer",
    avatar: "",
    emoji: "💻",
    description:
      "Reviews code snippets for bugs, performance issues, and best practices.",
    author: "You",
    tools: ["deepResearch", "webBrowsing"],
    model: "claude-4.5-sonnet",
    category: "custom",
    icon: codeIcon,
  },
  {
    id: "6",
    name: "Notion AI",
    avatar: "",
    emoji: "✨",
    description:
      "Your general-purpose AI assistant built into Notion. Ask questions, draft content, and brainstorm.",
    author: "Notion",
    tools: ["notionSearch", "deepResearch", "webBrowsing", "createPages"],
    model: "auto",
    category: "notion",
    icon: sparklesIcon,
  },
];

export const upcomingEvents = [
  {
    id: "1",
    title: "Design review",
    timeRange: "10 – 11 AM",
    color: "#5e9fe8",
  },
  {
    id: "2",
    title: "Sprint planning",
    timeRange: "2 – 3 PM",
    color: "#d49a6a",
  },
];

export const chatGroups: ChatGroup[] = [
  {
    label: "Today",
    chats: [
      {
        id: "c1",
        title: "Your Thursday brief",
        time: "1h",
        isDailyBrief: true,
      },
      { id: "c2", title: "Team sync at 3pm", time: "2h" },
      { id: "c3", title: "Discuss Q3 roadmap", time: "2h" },
    ],
  },
  {
    label: "Yesterday",
    chats: [
      { id: "c4", title: "Brainstorm new features", time: "1d" },
      { id: "c5", title: "Design review session", time: "1d" },
      { id: "c6", title: "Client presentation prep", time: "1d" },
    ],
  },
];

export const meetingGroups: MeetingGroup[] = [
  {
    label: "Upcoming events",
    isUpcoming: true,
    events: [
      {
        id: "m1",
        title: "Design review",
        timeRange: "10 – 11 AM",
        color: "#5e9fe8",
      },
      {
        id: "m2",
        title: "Sprint planning",
        timeRange: "2 – 3 PM",
        color: "#d49a6a",
      },
    ],
  },
  {
    label: "Today",
    events: [
      { id: "m3", title: "Standup", timeRange: "9 – 9:15 AM" },
      { id: "m4", title: "1:1 with manager", timeRange: "11 AM – 12 PM" },
    ],
  },
];

export const inboxNotifications: InboxNotification[] = [
  {
    id: "n1",
    user: "Sophie",
    avatarColor: "#b0a8a0",
    action: "mentioned you in",
    pageEmoji: "📄",
    pageTitle: "Product workspace",
    preview: "Can you update the key resources section?",
    time: "1h",
  },
  {
    id: "n2",
    user: "James",
    avatarColor: "#d4a843",
    action: "commented in",
    pageEmoji: "📊",
    pageTitle: "Research archive",
    preview: "Added the latest interview findings here",
    time: "3h",
  },
];
