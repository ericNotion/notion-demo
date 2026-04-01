import type {
  ChatGroup,
  InboxNotification,
  MeetingGroup,
} from "@/components/notion-kit/SlipperySidebar";
import { atom } from "jotai";

const BASE = "/eric/notion-clone";

// ---------------------------------------------------------------------------
// Page registry — single source of truth for ALL workspace pages.
//
// Every page/database/meeting-note in the prototype lives here.
// Sidebar, Search, and Library all read from this array.
//
// To add a new page: add an entry here, create the route, done.
// ---------------------------------------------------------------------------

export type PageEntry = {
  emoji: string;
  label: string;
  href: string;
  section: "favorites" | "private" | "shared";
  kind: "page" | "collection" | "meeting-note" | "database-item";
  createdBy: string;
  lastEdited: string;
  parent?: string;
  emojiStorageKey?: string;
  titleStorageKey?: string;
};

export const pages: PageEntry[] = [
  // ── Favorites ─────────────────────────────────────────────────────────
  {
    emoji: "📄",
    label: "Product workspace",
    href: BASE,
    section: "favorites",
    kind: "page",
    createdBy: "Sophie Tran",
    lastEdited: "2d ago",
    emojiStorageKey: "eric-nc-product-workspace-emoji",
    titleStorageKey: "eric-nc-product-workspace-title",
  },
  {
    emoji: "🚀",
    label: "Launch tracker",
    href: `${BASE}/launch-tracker`,
    section: "favorites",
    kind: "collection",
    createdBy: "James Wilson",
    lastEdited: "1w ago",
    emojiStorageKey: "eric-nc-launch-tracker-emoji",
  },
  {
    emoji: "📊",
    label: "Research archive",
    href: `${BASE}/research-archive`,
    section: "favorites",
    kind: "collection",
    createdBy: "Maya Chen",
    lastEdited: "3d ago",
    emojiStorageKey: "eric-nc-research-archive-emoji",
  },
  {
    emoji: "🎨",
    label: "Whiteboard",
    href: `${BASE}/whiteboard`,
    section: "favorites",
    kind: "page",
    createdBy: "You",
    lastEdited: "just now",
    emojiStorageKey: "eric-nc-whiteboard-emoji",
  },
  // ── Private ───────────────────────────────────────────────────────────
  {
    emoji: "📝",
    label: "Daily notes",
    href: `${BASE}/daily-notes`,
    section: "private",
    kind: "page",
    createdBy: "You",
    lastEdited: "1h ago",
    emojiStorageKey: "eric-nc-daily-notes-emoji",
  },
  {
    emoji: "🎨",
    label: "Design references",
    href: `${BASE}/design-references`,
    section: "private",
    kind: "page",
    createdBy: "You",
    lastEdited: "5d ago",
    emojiStorageKey: "eric-nc-design-refs-emoji",
  },
  {
    emoji: "🔊",
    label: "Design review meeting",
    href: `${BASE}/meeting-note`,
    section: "private",
    kind: "meeting-note",
    createdBy: "You",
    lastEdited: "8h ago",
  },
  {
    emoji: "💬",
    label: "Chat",
    href: `${BASE}/chat`,
    section: "private",
    kind: "page",
    createdBy: "You",
    lastEdited: "30m ago",
  },
  {
    emoji: "🎙️",
    label: "Sprint retro notes",
    href: `${BASE}/meeting-note/sprint-retro`,
    section: "private",
    kind: "meeting-note",
    createdBy: "Jordan Lee",
    lastEdited: "2d ago",
  },
  {
    emoji: "🎙️",
    label: "1:1 with manager",
    href: `${BASE}/meeting-note/manager-1on1`,
    section: "private",
    kind: "meeting-note",
    createdBy: "You",
    lastEdited: "4d ago",
  },
  {
    emoji: "📄",
    label: "New page",
    href: `${BASE}/new-page`,
    section: "private",
    kind: "page",
    createdBy: "You",
    lastEdited: "just now",
  },
  // ── Shared ────────────────────────────────────────────────────────────
  {
    emoji: "📋",
    label: "Product handbook",
    href: `${BASE}/product-handbook`,
    section: "shared",
    kind: "page",
    createdBy: "Lena Park",
    lastEdited: "4d ago",
    emojiStorageKey: "eric-nc-handbook-emoji",
  },
  {
    emoji: "💡",
    label: "Product ideas",
    href: `${BASE}/product-ideas`,
    section: "shared",
    kind: "collection",
    createdBy: "Ravi Kumar",
    lastEdited: "6h ago",
  },
  // ── Launch tracker items ────────────────────────────────────────────
  {
    emoji: "📄",
    label: "Payments migration",
    href: `${BASE}/launch-tracker/payments-migration`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Priya Shah",
    lastEdited: "2d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Self-serve onboarding",
    href: `${BASE}/launch-tracker/self-serve-onboarding`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Jordan Lee",
    lastEdited: "3d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Customer health report",
    href: `${BASE}/launch-tracker/customer-health-report`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Maya Chen",
    lastEdited: "1d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Pricing FAQ refresh",
    href: `${BASE}/launch-tracker/pricing-faq-refresh`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Evan Soto",
    lastEdited: "4d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "API v2 rollout",
    href: `${BASE}/launch-tracker/api-v2-rollout`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Lena Park",
    lastEdited: "1w ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Mobile push notifications",
    href: `${BASE}/launch-tracker/mobile-push-notifications`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Ravi Kumar",
    lastEdited: "5d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Dashboard redesign",
    href: `${BASE}/launch-tracker/dashboard-redesign`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Sophie Tran",
    lastEdited: "3d ago",
    parent: "Launch tracker",
  },
  {
    emoji: "📄",
    label: "Accessibility audit",
    href: `${BASE}/launch-tracker/accessibility-audit`,
    section: "favorites",
    kind: "database-item",
    createdBy: "James Wilson",
    lastEdited: "6d ago",
    parent: "Launch tracker",
  },
  // ── Product ideas items ─────────────────────────────────────────────
  {
    emoji: "💡",
    label: "Inline AI writing assistant",
    href: `${BASE}/product-ideas/inline-ai-writing-assistant`,
    section: "shared",
    kind: "database-item",
    createdBy: "Sophie Tran",
    lastEdited: "2d ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Keyboard shortcut cheat sheet",
    href: `${BASE}/product-ideas/keyboard-shortcut-cheat-sheet`,
    section: "shared",
    kind: "database-item",
    createdBy: "James Wilson",
    lastEdited: "4d ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Slack integration for page updates",
    href: `${BASE}/product-ideas/slack-integration`,
    section: "shared",
    kind: "database-item",
    createdBy: "Ravi Kumar",
    lastEdited: "5d ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Template gallery for new pages",
    href: `${BASE}/product-ideas/template-gallery`,
    section: "shared",
    kind: "database-item",
    createdBy: "Maya Chen",
    lastEdited: "3d ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Offline mode for mobile",
    href: `${BASE}/product-ideas/offline-mode-mobile`,
    section: "shared",
    kind: "database-item",
    createdBy: "Jordan Lee",
    lastEdited: "1w ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Page analytics dashboard",
    href: `${BASE}/product-ideas/page-analytics-dashboard`,
    section: "shared",
    kind: "database-item",
    createdBy: "Lena Park",
    lastEdited: "6d ago",
    parent: "Product ideas",
  },
  {
    emoji: "💡",
    label: "Bulk page export to PDF",
    href: `${BASE}/product-ideas/bulk-page-export-pdf`,
    section: "shared",
    kind: "database-item",
    createdBy: "Evan Soto",
    lastEdited: "4d ago",
    parent: "Product ideas",
  },
  // ── Research archive items ──────────────────────────────────────────
  {
    emoji: "📊",
    label: "Onboarding friction points",
    href: `${BASE}/research-archive/onboarding-friction-points`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Maya Chen",
    lastEdited: "1w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "Pricing page A/B results",
    href: `${BASE}/research-archive/pricing-page-ab-results`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Jordan Lee",
    lastEdited: "1w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "Mobile nav usability",
    href: `${BASE}/research-archive/mobile-nav-usability`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Sophie Tran",
    lastEdited: "2w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "Competitor feature matrix",
    href: `${BASE}/research-archive/competitor-feature-matrix`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Evan Soto",
    lastEdited: "2w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "Enterprise user interviews",
    href: `${BASE}/research-archive/enterprise-user-interviews`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Priya Shah",
    lastEdited: "3w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "Search UX benchmarking",
    href: `${BASE}/research-archive/search-ux-benchmarking`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Lena Park",
    lastEdited: "3w ago",
    parent: "Research archive",
  },
  {
    emoji: "📊",
    label: "NPS deep-dive Q1",
    href: `${BASE}/research-archive/nps-deep-dive-q1`,
    section: "favorites",
    kind: "database-item",
    createdBy: "Ravi Kumar",
    lastEdited: "4w ago",
    parent: "Research archive",
  },
];

export const dynamicPagesAtom = atom<PageEntry[]>([]);

export const allPagesAtom = atom((get) => [...pages, ...get(dynamicPagesAtom)]);

// ---------------------------------------------------------------------------
// Agents
// ---------------------------------------------------------------------------

export type Agent = {
  id: string;
  name: string;
  avatar: string;
  bannerColor: string;
  emoji: string;
  description: string;
  author: string;
  tools: string[];
  model: string;
  category: "custom" | "workspace" | "notion";
};

export const agents: Agent[] = [
  {
    id: "6",
    name: "Notion AI",
    avatar: "/images/customAgentAvatars/square-blue-sm.png",
    bannerColor: "#f0f0f0",
    emoji: "✨",
    description:
      "Your general-purpose AI assistant built into Notion. Ask questions, draft content, and brainstorm.",
    author: "Notion",
    tools: ["notionSearch", "deepResearch", "webBrowsing", "createPages"],
    model: "auto",
    category: "notion",
  },
  {
    id: "1",
    name: "Research Assistant",
    avatar: "/images/customAgentAvatars/bulb-purple-sm.png",
    bannerColor: "#e2d4f0",
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
    avatar: "/images/customAgentAvatars/book-green-sm.png",
    bannerColor: "#d4edda",
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
    avatar: "/images/customAgentAvatars/chat-orange-sm.png",
    bannerColor: "#f5e6d3",
    emoji: "📋",
    description:
      "Turns meeting transcripts into structured summaries with action items and key decisions.",
    author: "Notion",
    tools: ["notionSearch", "createPages"],
    model: "gpt-4.1",
    category: "workspace",
  },
  {
    id: "4",
    name: "Task Prioritizer",
    avatar: "/images/customAgentAvatars/check-blue-sm.png",
    bannerColor: "#d4e4f7",
    emoji: "🎯",
    description:
      "Analyzes your tasks and suggests priorities based on deadlines, dependencies, and effort.",
    author: "You",
    tools: ["notionSearch"],
    model: "gpt-4.1-mini",
    category: "custom",
  },
  {
    id: "5",
    name: "Code Reviewer",
    avatar: "/images/customAgentAvatars/triangle-yellow-sm.png",
    bannerColor: "#f5edd3",
    emoji: "💻",
    description:
      "Reviews code snippets for bugs, performance issues, and best practices.",
    author: "You",
    tools: ["deepResearch", "webBrowsing"],
    model: "claude-4.5-sonnet",
    category: "custom",
  },
];

// ---------------------------------------------------------------------------
// Sidebar / Calendar data
// ---------------------------------------------------------------------------

export const upcomingEvents = [
  {
    id: "1",
    title: "Design review",
    timeRange: "10 – 11 AM",
    color: "#5e9fe8",
    href: `${BASE}/meeting-note/design-review`,
  },
  {
    id: "2",
    title: "Sprint planning",
    timeRange: "2 – 3 PM",
    color: "#d49a6a",
    href: `${BASE}/meeting-note/sprint-planning`,
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
      { id: "c2", title: "Team sync at 3pm", time: "2h", agentId: "3" },
      { id: "c3", title: "Discuss Q3 roadmap", time: "2h" },
    ],
  },
  {
    label: "Yesterday",
    chats: [
      { id: "c4", title: "Brainstorm new features", time: "1d", agentId: "1" },
      { id: "c5", title: "Design review session", time: "1d" },
      { id: "c6", title: "Client presentation prep", time: "1d", agentId: "6" },
    ],
  },
];

export type ThreadMessage = {
  role: "user" | "assistant";
  content: string;
};

export const chatThreads: Record<string, ThreadMessage[]> = {
  c1: [
    {
      role: "assistant",
      content:
        'Good morning! Here\'s your Thursday brief:\n\n**3 tasks due today**\n- Finalize pricing FAQ copy (assigned by Sophie)\n- Review PR #247 for API v2 rollout\n- Submit Q1 retro feedback form\n\n**2 meetings**\n- Team sync at 3pm\n- 1:1 with manager at 4pm\n\n**Workspace activity**\n- Maya added 3 new entries to Research archive\n- Jordan updated the self-serve onboarding status to "On track"',
    },
  ],
  c2: [
    {
      role: "user",
      content:
        "Can you summarize what we need to cover in the team sync today?",
    },
    {
      role: "assistant",
      content:
        "Based on recent workspace activity, here are the key topics for today's sync:\n\n1. **API v2 rollout** — Lena marked this as Done. Quick celebration + any remaining cleanup?\n\n2. **Payments migration** — Currently \"In review\". Priya may need sign-off before Mar 28 deadline.\n\n3. **Customer health report** — Blocked. Maya is the owner — worth discussing what's blocking and how to unblock.\n\n4. **Self-serve onboarding** — On track for Apr 2. Jordan might have a quick update.\n\nWant me to draft an agenda doc for this?",
    },
    { role: "user", content: "Yes, draft an agenda" },
    {
      role: "assistant",
      content:
        "Here's a draft agenda:\n\n---\n\n## Team Sync — Thursday, March 23\n\n**Duration:** 30 min\n\n### Celebrations (5 min)\n- API v2 rollout shipped! 🎉\n\n### Status Updates (10 min)\n- Payments migration — review status, sign-off needed?\n- Self-serve onboarding — quick check-in\n\n### Blockers (10 min)\n- Customer health report — what's blocking?\n- Action items from last sync\n\n### Open Floor (5 min)\n\n---\n\nI can create this as a page in your workspace if you'd like.",
    },
  ],
  c3: [
    {
      role: "user",
      content:
        "What should our Q3 roadmap priorities be based on the product ideas database?",
    },
    {
      role: "assistant",
      content:
        "Looking at your Product ideas database, here are the top candidates for Q3 based on votes and strategic alignment:\n\n**High priority (strong signal)**\n- **Offline mode for mobile** — 45 votes, currently Parked. This has the most community demand but is XL effort. Consider scoping a lightweight version.\n- **Template gallery for new pages** — 31 votes, Exploring. Medium effort, high impact on activation.\n\n**Medium priority**\n- **Inline AI writing assistant** — 24 votes, Exploring. Large effort but aligns with AI strategy.\n- **Keyboard shortcut cheat sheet** — 18 votes, Planned. Small effort, good quality-of-life improvement.\n\n**Worth discussing**\n- **Bulk page export to PDF** — 15 votes, Planned. Small effort, frequently requested by enterprise users.\n\nI'd recommend focusing Q3 on the template gallery + keyboard shortcuts as quick wins, then investing in a scoped version of offline mode as the big bet.",
    },
  ],
  c4: [
    {
      role: "user",
      content: "Help me brainstorm new feature ideas for our product",
    },
    {
      role: "assistant",
      content:
        'I searched through your workspace for context. Based on your existing product ideas, research archive, and recent team discussions, here are some fresh directions:\n\n**Workflow automation**\n- Recurring page templates — auto-create weekly planning docs\n- Status change triggers — notify Slack when a launch item moves to "Blocked"\n\n**Collaboration**\n- Page-level comments thread (like Google Docs)\n- "Suggest edits" mode for shared docs\n- Live cursors showing who\'s viewing a page\n\n**AI-powered**\n- Auto-tagging for research entries based on content\n- Meeting transcript → action items pipeline\n- Smart page linking — suggest related pages as you write\n\n**Data & insights**\n- Page view analytics — see which docs get the most traffic\n- Database rollup dashboards\n- Custom chart blocks for inline data visualization\n\nWant me to add any of these to your Product ideas database?',
    },
  ],
  c5: [
    {
      role: "user",
      content: "Help me prepare talking points for the design review",
    },
    {
      role: "assistant",
      content:
        'Based on your Design references page and recent workspace activity, here are talking points for the review:\n\n**Navigation patterns**\n- Sidebar with collapsible sections is working well (Notion/Linear pattern)\n- Should we add breadcrumb trails for deep page hierarchies?\n- Command palette (⌘K) usage metrics — are people discovering it?\n\n**Data display updates**\n- Table views with inline editing — any usability issues from the research archive findings?\n- Board views — drag-and-drop feedback from the mobile nav usability study showed 12 insights\n- Timeline views — needed for launch tracker?\n\n**Typography & consistency**\n- Verify we\'re sticking to the type scale: body 14px, titles 40px, headings 24/20/18\n- Semantic token usage — are we consistent across new components?\n\n**Action items from last review**\n- Status of the dashboard redesign (Sophie, currently "In review")\n- Mobile push notification designs (Ravi, "On track" for Apr 15)\n\nWant me to format these into a presentation outline?',
    },
  ],
  c6: [
    {
      role: "user",
      content:
        "I need to prepare a presentation for a client. Can you help me outline it?",
    },
    {
      role: "assistant",
      content:
        "I'd be happy to help! To create the best outline, I need a bit more context:\n\n1. **Who is the client?** (industry, size, their role)\n2. **What's the goal?** (pitch, progress update, demo, proposal?)\n3. **How long** is the presentation?\n4. **Any specific topics** they've asked about?\n\nIn the meantime, here's a general structure that works well:\n\n## Client Presentation Outline\n\n1. **Opening** (2 min) — Thank them, set the agenda\n2. **Context recap** (3 min) — What we discussed last time, their goals\n3. **Progress / Demo** (10 min) — What we've built, key milestones\n4. **Results & Insights** (5 min) — Data, user feedback, learnings\n5. **Next Steps** (5 min) — Roadmap, timeline, asks\n6. **Q&A** (5 min)\n\nFill me in on the details and I'll tailor this for you.",
    },
    {
      role: "user",
      content:
        "It's for Acme Corp, a mid-size SaaS company. It's a quarterly progress update, about 20 minutes.",
    },
    {
      role: "assistant",
      content:
        "Here's a tailored outline for Acme Corp:\n\n## Q1 Progress Update — Acme Corp\n**Duration:** 20 minutes\n\n### 1. Welcome & Agenda (1 min)\n- Quick hello, outline what we'll cover\n\n### 2. Q1 Highlights (4 min)\n- Top 3 shipped features/milestones\n- Key metrics: adoption, performance, reliability\n- Customer feedback highlights\n\n### 3. Deep Dive: Key Deliverables (8 min)\n- Feature A — demo + impact\n- Feature B — demo + impact\n- Infrastructure/performance improvements\n\n### 4. Challenges & Learnings (3 min)\n- What we learned this quarter\n- Any timeline adjustments and why\n- How we're addressing blockers\n\n### 5. Q2 Roadmap Preview (3 min)\n- Planned features and priorities\n- Timeline and milestones\n- Any decisions needed from Acme\n\n### 6. Open Discussion (1 min)\n- Questions, feedback, priorities alignment\n\nWant me to create this as a page in your workspace so you can start filling it in?",
    },
  ],
};

export const meetingGroups: MeetingGroup[] = [
  {
    label: "Upcoming events",
    isUpcoming: true,
    events: [
      {
        id: "m1",
        title: "Product roadmap review",
        timeRange: "Tomorrow 9:00 AM",
        color: "#5e9fe8",
        href: `${BASE}/meeting-note/roadmap-review`,
      },
      {
        id: "m2",
        title: "Design system sync",
        timeRange: "10:00 AM",
        color: "#4a7c4f",
        href: `${BASE}/meeting-note/design-system-sync`,
      },
      {
        id: "m3",
        title: "Launch readiness check",
        timeRange: "11:00 AM",
        color: "#d49a6a",
        href: `${BASE}/meeting-note/launch-readiness`,
      },
      {
        id: "m4",
        title: "Research findings review",
        timeRange: "1:00 PM",
        color: "#9b8ec4",
        href: `${BASE}/meeting-note/research-findings`,
      },
      {
        id: "m5",
        title: "Team standup",
        timeRange: "Wed 9:15 AM",
        color: "#4a7c4f",
        href: `${BASE}/meeting-note/standup`,
      },
      {
        id: "m6",
        title: "Sophie <> Jordan",
        timeRange: "Wed 11:00 AM",
        color: "#4a7c4f",
        href: `${BASE}/meeting-note/sophie-jordan`,
      },
      {
        id: "m7",
        title: "API v2 retro",
        timeRange: "Thu 2:00 PM",
        color: "#d49a6a",
        href: `${BASE}/meeting-note/api-v2-retro`,
      },
      {
        id: "m8",
        title: "Product ideas triage",
        timeRange: "Thu 3:00 PM",
        color: "#5e9fe8",
        href: `${BASE}/meeting-note/ideas-triage`,
      },
      {
        id: "m9",
        title: "Team standup",
        timeRange: "Fri 9:15 AM",
        color: "#4a7c4f",
        href: `${BASE}/meeting-note/standup-fri`,
      },
      {
        id: "m10",
        title: "Sprint demo",
        timeRange: "Fri 4:00 PM",
        color: "#9b8ec4",
        href: `${BASE}/meeting-note/sprint-demo`,
      },
    ],
  },
  {
    label: "Today",
    events: [
      {
        id: "m11",
        title: "Team standup",
        href: `${BASE}/meeting-note/standup`,
      },
      {
        id: "m12",
        title: "Design review",
        href: `${BASE}/meeting-note/design-review`,
      },
      { id: "m13", title: "Meeting @Today", href: `${BASE}/meeting-note` },
      {
        id: "m14",
        title: "Sprint planning",
        href: `${BASE}/meeting-note/sprint-planning`,
      },
      {
        id: "m15",
        title: "1:1 with Maya",
        href: `${BASE}/meeting-note/manager-1on1`,
      },
      {
        id: "m16",
        title: "Customer health sync",
        href: `${BASE}/meeting-note/customer-health`,
      },
    ],
  },
  {
    label: "Past week",
    events: [
      {
        id: "m17",
        title: "Sprint retro",
        href: `${BASE}/meeting-note/sprint-retro`,
      },
      {
        id: "m18",
        title: "Product ideas brainstorm",
        href: `${BASE}/meeting-note/ideas-brainstorm`,
      },
      {
        id: "m19",
        title: "Onboarding flow review",
        href: `${BASE}/meeting-note/onboarding-review`,
      },
      {
        id: "m20",
        title: "Q2 planning kickoff",
        href: `${BASE}/meeting-note/q2-planning`,
      },
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
    pageHref: `${BASE}`,
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
    pageHref: `${BASE}/research-archive`,
    preview: "Added the latest interview findings here",
    time: "3h",
  },
];
