import {
  createBlockId,
  type Block,
} from "@/components/notion-kit/editor/atoms";

function p(text: string): Block {
  return { id: createBlockId(), type: "paragraph", text };
}
function h2(text: string): Block {
  return { id: createBlockId(), type: "h2", text };
}
function h3(text: string): Block {
  return { id: createBlockId(), type: "h3", text };
}
function ul(...items: string[]): Block {
  return {
    id: createBlockId(),
    type: "ul",
    items: items.map((text) => ({ id: createBlockId("li"), text })),
  };
}
function divider(): Block {
  return { id: createBlockId(), type: "divider" };
}

const defaultContent: Record<string, Block[]> = {
  // ── Launch tracker ──
  "eric-nc-launch-tracker-payments-migration": [
    h2("Overview"),
    p(
      "Migrating from Stripe Connect v1 to v2 to support multi-currency payouts and improved settlement times. This affects all merchant accounts created before 2025.",
    ),
    h2("Key decisions"),
    ul(
      "Keep existing API surface — wrap v2 behind the same endpoints",
      "Run shadow-mode for 2 weeks before cutting over",
      "Rollback plan: feature flag per merchant cohort",
    ),
    h2("Open questions"),
    ul(
      "Do we need to notify merchants about downtime during the cutover window?",
      "Tax reporting implications for mid-cycle migration",
    ),
    divider(),
    h3("Status updates"),
    p(
      "Mar 25 — Shadow mode enabled for 10% of test merchants. No discrepancies so far.",
    ),
    p(
      "Mar 20 — Completed API mapping for all 14 endpoints. PR #482 in review.",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-self-serve-onboarding": [
    h2("Goal"),
    p(
      "Let new users set up a workspace, invite teammates, and connect integrations without talking to sales. Target: 60% of signups complete onboarding within 10 minutes.",
    ),
    h2("Flow"),
    ul(
      "Step 1: Workspace name + URL slug",
      "Step 2: Invite teammates (email or link)",
      "Step 3: Pick a template (blank, project management, wiki, CRM)",
      "Step 4: Connect integrations (Slack, GitHub, Figma)",
    ),
    h2("Metrics"),
    ul(
      "Completion rate (target: 60%)",
      "Time to first page created",
      "Day-7 retention by onboarding variant",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-customer-health-report": [
    h2("Summary"),
    p(
      "Automated weekly health score report sent to CSMs. Combines usage data, support ticket volume, and NPS responses into a single dashboard view.",
    ),
    h2("Blockers"),
    ul(
      "Data pipeline for usage events is 6–12 hours behind — need real-time or near-real-time",
      "Legal review pending on sharing aggregated usage data with CSM team",
    ),
    h2("Requirements"),
    ul(
      "Health score: weighted composite of DAU/MAU ratio, feature adoption, support tickets",
      "Email digest with top 10 at-risk accounts",
      "Drill-down view per account in the internal dashboard",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-pricing-faq-refresh": [
    h2("Context"),
    p(
      "The current pricing FAQ was last updated in Q3 2024. Several new plans and features have launched since then. Support tickets about pricing increased 40% last quarter.",
    ),
    h2("Changes needed"),
    ul(
      "Add Enterprise tier FAQ section",
      "Update seat-based pricing language to reflect per-member billing",
      "Add comparison table: Free vs Pro vs Enterprise",
      "Remove deprecated 'Teams' plan references",
    ),
    h2("Stakeholders"),
    ul(
      "Content: Sophie Tran (writer)",
      "Legal: needs sign-off on refund policy language",
      "Design: new comparison table component from design system",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-api-v2-rollout": [
    h2("Overview"),
    p(
      "API v2 introduces breaking changes to the blocks and databases endpoints. Providing a 6-month migration window with parallel support for v1 and v2.",
    ),
    h2("Breaking changes"),
    ul(
      "Block IDs are now UUIDs (were sequential integers)",
      "Pagination uses cursor-based pagination instead of offset",
      "Rate limits are per-workspace instead of per-API-key",
      "Webhook payloads include full block content (were IDs only)",
    ),
    h2("Migration guide"),
    p(
      "Published at docs.example.com/api/v2/migration. Includes code samples for Python, Node.js, and Ruby. SDK updates shipped for all three.",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-mobile-push-notifications": [
    h2("Scope"),
    p(
      "Push notifications for mobile (iOS + Android) covering mentions, comments, page updates, and reminders. Users can configure per-channel preferences.",
    ),
    h2("Notification types"),
    ul(
      "Mentions — immediate push",
      "Comments on pages you follow — batched every 15 min",
      "Page edits by collaborators — daily digest",
      "Reminders — exact time",
    ),
    h2("Technical notes"),
    ul(
      "Using FCM for Android and APNs for iOS",
      "Notification service extension for rich previews on iOS",
      "Deep links open directly to the relevant block/comment",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-dashboard-redesign": [
    h2("Why"),
    p(
      "Current dashboard has a 35% bounce rate. User research showed people can't find their recent work quickly. The redesign prioritizes recency and team activity.",
    ),
    h2("New layout"),
    ul(
      "Top section: recently visited pages (max 8)",
      "Middle: team activity feed (edits, comments, new pages)",
      "Right rail: upcoming events + quick actions",
      "Bottom: favorited databases with inline previews",
    ),
    h2("Design"),
    p(
      "Figma file linked in the design channel. Final review scheduled for Mar 28.",
    ),
    p(""),
  ],

  "eric-nc-launch-tracker-accessibility-audit": [
    h2("Audit scope"),
    p(
      "Full WCAG 2.1 AA compliance audit of the core editor, sidebar, and database views. Using both automated tooling (axe-core) and manual screen reader testing.",
    ),
    h2("Findings so far"),
    ul(
      "Missing aria-labels on 12 icon-only buttons in the toolbar",
      "Color contrast ratio below 4.5:1 on tertiary text in light mode",
      "Keyboard navigation traps in the slash command menu",
      "Focus indicators not visible on database row selection",
    ),
    h2("Timeline"),
    ul(
      "Week 1: automated scan + manual audit (complete)",
      "Week 2: fix critical issues (in progress)",
      "Week 3: screen reader testing with external consultants",
      "Week 4: verification and sign-off",
    ),
    p(""),
  ],

  // ── Product ideas ──
  "eric-nc-product-ideas-inline-ai-writing-assistant": [
    h2("Concept"),
    p(
      "An inline AI assistant that appears when you select text or press a hotkey. It can rewrite, summarize, expand, translate, or change tone — all without leaving the editor.",
    ),
    h2("User stories"),
    ul(
      "As a writer, I want to highlight a paragraph and ask AI to make it more concise",
      "As a PM, I want to generate a summary of a long spec by selecting the whole page",
      "As a non-native speaker, I want to improve the grammar of my writing",
    ),
    h2("Open questions"),
    ul(
      "Should AI suggestions appear inline (ghost text) or in a floating panel?",
      "How do we handle undo — single undo step or character-level?",
      "Rate limiting: per-user or per-workspace?",
    ),
    p(""),
  ],

  "eric-nc-product-ideas-keyboard-shortcut-cheat-sheet": [
    h2("Problem"),
    p(
      "Power users frequently ask for a keyboard shortcut reference. Currently they have to visit the docs site. We should have an in-app cheat sheet accessible via ⌘/.",
    ),
    h2("Design"),
    ul(
      "Modal overlay with categorized shortcuts",
      "Categories: navigation, editing, formatting, blocks, databases",
      "Search/filter within the modal",
      "Link to customize shortcuts (future)",
    ),
    p("Low effort, high satisfaction. Similar to what VS Code and Figma do."),
    p(""),
  ],

  "eric-nc-product-ideas-slack-integration-for-page-updates": [
    h2("Idea"),
    p(
      "Post a summary to a Slack channel whenever a page is updated. Configurable per page or per database. Reduces the need to check Notion for status updates.",
    ),
    h2("Proposed behavior"),
    ul(
      "User connects Slack workspace via OAuth",
      "Per-page setting: 'Notify Slack channel' with channel picker",
      "Notifications include: page title, who edited, summary of changes",
      "Throttled to max 1 notification per page per hour",
    ),
    h2("Votes & feedback"),
    p(
      "31 votes. Most requested by teams that use Slack as their primary communication tool but Notion for documentation.",
    ),
    p(""),
  ],

  "eric-nc-product-ideas-template-gallery": [
    h2("Overview"),
    p(
      "A gallery of pre-built templates users can browse and duplicate when creating a new page. Templates cover project management, meeting notes, wikis, CRMs, and personal productivity.",
    ),
    h2("Categories"),
    ul(
      "Getting started (5 templates)",
      "Project management (8 templates)",
      "Engineering (6 templates)",
      "Design (4 templates)",
      "Marketing (5 templates)",
      "Personal (4 templates)",
    ),
    h2("Community templates"),
    p(
      "Phase 2: allow users to publish templates to a community gallery. Requires moderation workflow and a submission/approval process.",
    ),
    p(""),
  ],

  "eric-nc-product-ideas-offline-mode-mobile": [
    h2("Problem"),
    p(
      "45 votes — the most-requested feature. Users on planes, subways, or in areas with poor connectivity can't access or edit their pages.",
    ),
    h2("Technical approach"),
    ul(
      "Cache recently viewed pages in local SQLite database",
      "Optimistic writes with conflict resolution on reconnect",
      "Sync queue with retry logic and exponential backoff",
      "Storage limit: 500MB per device, LRU eviction",
    ),
    h2("Risks"),
    ul(
      "Merge conflicts when two users edit the same block offline",
      "Storage management on low-end devices",
      "Testing matrix: iOS, Android, varying network conditions",
    ),
    p("Currently parked due to complexity. Revisit in Q3."),
    p(""),
  ],

  "eric-nc-product-ideas-page-analytics-dashboard": [
    h2("Concept"),
    p(
      "Show page authors how their content is performing: views, unique visitors, average read time, and engagement (comments, reactions).",
    ),
    h2("Metrics"),
    ul(
      "Total views (last 7d, 30d, all time)",
      "Unique visitors",
      "Average time on page",
      "Scroll depth (% who reached the bottom)",
      "Comments and reactions count",
    ),
    h2("Privacy"),
    p(
      "Analytics are visible only to the page creator and workspace admins. No individual visitor tracking — all metrics are aggregated.",
    ),
    p(""),
  ],

  "eric-nc-product-ideas-bulk-page-export-to-pdf": [
    h2("Request"),
    p(
      "Users want to export multiple pages at once as a single PDF or a ZIP of PDFs. Common use case: exporting a project's entire documentation for a client handoff.",
    ),
    h2("Proposed UX"),
    ul(
      "Multi-select pages in the sidebar or library view",
      "Right-click → 'Export selected as PDF'",
      "Options: include subpages, include database views, page size (A4/Letter)",
      "Progress indicator for large exports",
    ),
    h2("Technical considerations"),
    ul(
      "Server-side rendering with Puppeteer for consistent output",
      "Max 100 pages per export to prevent abuse",
      "Queue system for exports > 20 pages",
    ),
    p(""),
  ],

  // ── Research archive ──
  "eric-nc-research-archive-onboarding-friction-points": [
    h2("Research summary"),
    p(
      "Conducted 12 user interviews with new signups who dropped off during onboarding. Identified 8 key friction points across the first-time experience.",
    ),
    h2("Key findings"),
    ul(
      "Users didn't understand the difference between pages and databases (7/12)",
      "The template picker was overwhelming — too many options with no guidance (9/12)",
      "Invite flow was confusing — users expected a shareable link, not email-only (6/12)",
      "'Getting Started' page was too long — nobody read past the first section (8/12)",
    ),
    h2("Recommendations"),
    ul(
      "Add a 60-second interactive tutorial instead of a static Getting Started page",
      "Reduce template picker to 6 options with a 'Browse all' link",
      "Add invite-by-link as the primary option, email as secondary",
    ),
    divider(),
    p(
      "Full interview recordings are in the Research drive under /2025-Q1/Onboarding.",
    ),
    p(""),
  ],

  "eric-nc-research-archive-pricing-page-ab-results": [
    h2("Experiment"),
    p(
      "A/B test on the pricing page comparing the current layout (Control) with a simplified version that emphasizes the Pro plan (Variant B).",
    ),
    h2("Results"),
    ul(
      "Variant B: +18% conversion to Pro trial (p < 0.01)",
      "Variant B: −5% conversion to Free tier (not significant)",
      "No change in Enterprise inquiry rate",
      "Mobile conversion improved more than desktop (+24% vs +14%)",
    ),
    h2("Recommendation"),
    p(
      "Ship Variant B. The simplified layout with the Pro plan highlighted as 'Most Popular' significantly outperformed the control. Follow-up experiment planned to test annual vs monthly toggle placement.",
    ),
    p(""),
  ],

  "eric-nc-research-archive-mobile-nav-usability": [
    h2("Study design"),
    p(
      "Moderated usability test with 8 participants. Tasks: find a specific page, create a new page, switch between workspaces, access settings.",
    ),
    h2("Key findings"),
    ul(
      "5/8 participants couldn't find the workspace switcher (hidden behind the logo)",
      "The bottom tab bar was well-understood — all participants used it successfully",
      "Search was the fallback for everything — participants preferred it over browsing",
      "Swipe-to-go-back conflicted with sidebar swipe gesture (3/8 triggered accidentally)",
    ),
    h2("Design recommendations"),
    ul(
      "Move workspace switcher to a visible location in the bottom tab bar",
      "Remove sidebar swipe gesture on mobile — use a hamburger menu instead",
      "Add recent pages to the search screen before the user types anything",
    ),
    p(""),
  ],

  "eric-nc-research-archive-competitor-feature-matrix": [
    h2("Competitors analyzed"),
    ul(
      "Notion (us) — baseline",
      "Coda — strong on formulas and automations",
      "Confluence — enterprise wiki, Jira integration",
      "Slite — simple, fast, good search",
      "Outline — open source, clean UI",
    ),
    h2("Feature gaps we should close"),
    ul(
      "Real-time commenting with threads (Coda, Confluence have this)",
      "Offline support (Coda has partial, Outline has full)",
      "Advanced permissions at the block level (Confluence)",
    ),
    h2("Our advantages"),
    ul(
      "Best-in-class database views and relations",
      "AI integration depth",
      "Design quality and flexibility of the editor",
      "Template ecosystem",
    ),
    p(""),
  ],

  "eric-nc-research-archive-enterprise-user-interviews": [
    h2("Participants"),
    p(
      "9 interviews with IT admins and team leads at companies with 500+ employees. Focus: what's blocking them from upgrading or expanding usage.",
    ),
    h2("Top concerns"),
    ul(
      "SSO/SAML setup is too complicated — needs better documentation (7/9)",
      "No audit log for compliance — required for SOC 2 (6/9)",
      "Bulk user provisioning via SCIM is unreliable (5/9)",
      "Need workspace-level content policies (e.g., prevent external sharing) (4/9)",
    ),
    h2("Opportunities"),
    ul(
      "Dedicated onboarding support would justify a higher price point",
      "Admin dashboard with usage analytics across the org",
      "Custom branding (logo, colors) for the workspace",
    ),
    p(""),
  ],

  "eric-nc-research-archive-search-ux-benchmarking": [
    h2("Methodology"),
    p(
      "Benchmarked our search against Coda, Confluence, and Slite. Measured: time to find a specific page, relevance of top-3 results, and user satisfaction.",
    ),
    h2("Results"),
    ul(
      "Our search is fastest for exact title matches (0.8s avg vs 1.2s industry avg)",
      "Content search (searching within page bodies) ranked 3rd — Slite was best",
      "Typo tolerance was poor — 'onboading' returned 0 results (Slite handled this)",
      "No search history or recent searches — every other competitor has this",
    ),
    h2("Recommendations"),
    ul(
      "Add fuzzy matching / typo tolerance",
      "Show recent searches when the search dialog opens",
      "Improve content search ranking — title matches shouldn't always win",
    ),
    p(""),
  ],

  "eric-nc-research-archive-nps-deep-dive-q1": [
    h2("Q1 NPS results"),
    p(
      "Overall NPS: 42 (up from 38 in Q4). Promoters: 58%, Passives: 26%, Detractors: 16%.",
    ),
    h2("Top themes from promoters"),
    ul(
      "Love the flexibility of databases and views",
      "AI features are genuinely useful (not gimmicky)",
      "Clean design — 'it stays out of my way'",
    ),
    h2("Top themes from detractors"),
    ul(
      "Performance on large pages — lag when typing on 1000+ block pages",
      "Mobile app feels incomplete compared to desktop",
      "Pricing is confusing — unclear what's included in each tier",
    ),
    h2("Action items"),
    ul(
      "Performance: engineering sprint planned for April (see Launch tracker)",
      "Mobile: roadmap item for Q2",
      "Pricing: FAQ refresh in progress (see Pricing FAQ refresh task)",
    ),
    p(""),
  ],
};

export function getDefaultBlocks(storageKey: string): Block[] {
  return (
    defaultContent[storageKey] ?? [
      { id: createBlockId(), type: "paragraph", text: "" },
    ]
  );
}
