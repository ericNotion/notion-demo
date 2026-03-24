"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { pencilLineIcon } from "@nds-icons/pencilLine/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { viewCalendarIcon } from "@nds-icons/viewCalendar/default.icon";
import { volumeOnIcon } from "@nds-icons/volumeOn/default.icon";
import { use } from "react";
import ReactMarkdown from "react-markdown";

function DateMention({ children }: { children: React.ReactNode }) {
  return <span className="text-[#9B9A97] dark:text-[#6B6B6B]">{children}</span>;
}

type MeetingData = {
  title: string;
  dateLabel: string;
  attendees: { name: string; color: string }[];
  notes?: string;
};

const MEETINGS: Record<string, MeetingData> = {
  "roadmap-review": {
    title: "Product roadmap review",
    dateLabel: "@Tomorrow 9:00 AM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "James Wilson", color: "#d4a843" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Jordan Lee", color: "#8bb87a" },
    ],
    notes:
      "## Agenda\n- Review Q2 roadmap priorities against product ideas backlog\n- Align on top 3 bets for the quarter\n- Discuss resourcing for launch tracker items\n\n## Key decisions\n- Template gallery moves to Planned — 31 votes, medium effort, high activation impact\n- Offline mode for mobile stays Parked until Q3 — needs dedicated mobile eng\n- Inline AI writing assistant approved for exploration phase\n\n## Action items\n- [ ] Sophie: update product ideas statuses to reflect decisions\n- [ ] James: draft Q2 OKRs based on these priorities\n- [ ] Ravi: scope API requirements for template gallery\n- [ ] Jordan: share design concepts for template gallery by Friday",
  },
  "design-system-sync": {
    title: "Design system sync",
    dateLabel: "@Tomorrow 10:00 AM",
    attendees: [
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Lena Park", color: "#9b8ec4" },
    ],
    notes:
      "## Updates\n- New color tokens shipped for dark mode — 12 semantic tokens updated\n- Button component variants finalized (primary, secondary, ghost, destructive)\n- Typography scale documented in design references page\n\n## Open items\n- Status badge component needs consistent styling across launch tracker and product ideas\n- Icon library has 3 duplicate entries — need cleanup\n- [ ] Jordan: audit all pages for deprecated color tokens\n- [ ] Lena: publish updated component inventory to product handbook",
  },
  "launch-readiness": {
    title: "Launch readiness check",
    dateLabel: "@Tomorrow 11:00 AM",
    attendees: [
      { name: "Priya Shah", color: "#7c9cd4" },
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Evan Soto", color: "#d49a6a" },
    ],
    notes:
      "## Payments migration (In review)\n- Backend changes merged, running final integration tests\n- Priya needs sign-off from finance team before Mar 28\n- Rollback plan documented and tested\n\n## Self-serve onboarding (On track)\n- New flow live in staging, 3 internal testers using it this week\n- Onboarding friction points from research archive addressed in latest iteration\n- Target: Apr 2 GA\n\n## Blockers\n- Customer health report still blocked — Maya waiting on data pipeline fix\n- [ ] Sophie: escalate data pipeline issue to platform team\n- [ ] Evan: run load test on payments migration endpoint",
  },
  "research-findings": {
    title: "Research findings review",
    dateLabel: "@Tomorrow 1:00 PM",
    attendees: [
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Sophie Tran", color: "#b0a8a0" },
    ],
    notes:
      "## Studies reviewed\n- **Onboarding friction points** — 7 of 12 pain points addressed in new self-serve flow\n- **Mobile nav usability** — swipe gestures tested well, but bottom nav needs larger tap targets\n- **Search UX benchmarking** — our search ranks 3rd out of 5 competitors; main gap is fuzzy matching\n\n## Key insights\n- Users who complete onboarding in <3 min have 2.4x higher 30-day retention\n- Enterprise users want bulk page export more than any other feature (matches product ideas votes)\n- NPS Q1 score up 8 points, driven by recent performance improvements\n\n## Action items\n- [ ] Maya: summarize top 3 findings for the product handbook\n- [ ] Sophie: add research links to relevant product ideas entries",
  },
  standup: {
    title: "Team standup",
    dateLabel: "@Today 9:15 AM",
    attendees: [
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Evan Soto", color: "#d49a6a" },
    ],
    notes:
      "## Updates\n**Jordan** — Finished the dashboard redesign mockups. PR up for review. Starting on accessibility audit prep.\n\n**Maya** — Customer health report still blocked on data pipeline. Pinged platform team again. Working on competitor feature matrix update in the meantime.\n\n**Evan** — Pricing FAQ refresh copy is done. Sent to Sophie for final review. Moving to mobile push notification specs.\n\n## No blockers today",
  },
  "sophie-jordan": {
    title: "Sophie <> Jordan",
    dateLabel: "@Wed 11:00 AM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
    ],
    notes:
      "## Topics\n- Dashboard redesign timeline — on track for next sprint\n- Jordan interested in leading the template gallery design\n- Feedback from last design review was positive\n\n## Discussion\n- Sophie wants Jordan to own the template gallery end to end (design + spec)\n- Agreed to allocate 60% of Jordan's time to template gallery starting next sprint\n- Jordan will present initial concepts at Thursday's product ideas triage\n\n## Action items\n- [ ] Jordan: draft template gallery design brief by Friday\n- [ ] Sophie: update launch tracker with template gallery timeline",
  },
  "api-v2-retro": {
    title: "API v2 retro",
    dateLabel: "@Thu 2:00 PM",
    attendees: [
      { name: "Lena Park", color: "#9b8ec4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Priya Shah", color: "#7c9cd4" },
    ],
    notes:
      "## What went well\n- Shipped on time with zero P0 incidents\n- Lena's migration script handled 99.7% of edge cases\n- Documentation was comprehensive — support team had no escalations\n\n## What could improve\n- Testing was too manual — need automated integration test suite\n- Rollout communication could have started earlier\n- Monitoring dashboards weren't ready on day 1\n\n## Action items\n- [ ] Ravi: set up automated API regression tests\n- [ ] Priya: create monitoring dashboard template for future launches\n- [ ] Lena: write post-mortem for the product handbook",
  },
  "ideas-triage": {
    title: "Product ideas triage",
    dateLabel: "@Thu 3:00 PM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "James Wilson", color: "#d4a843" },
      { name: "Jordan Lee", color: "#8bb87a" },
    ],
    notes:
      "## New ideas reviewed\n- **Slack integration for page updates** — 12 votes, low effort. Move to Planned.\n- **Page analytics dashboard** — 8 votes, medium effort. Keep in Exploring.\n- **Bulk page export to PDF** — 15 votes, small effort. Move to Planned.\n\n## Status changes\n- Keyboard shortcut cheat sheet → Planned (James to implement next sprint)\n- Template gallery → Exploring (Jordan presenting design concepts)\n\n## Discussion\n- Slack integration aligns with self-serve onboarding — bundle them?\n- Page analytics could use data from the research archive NPS study\n- [ ] Sophie: update all statuses in the product ideas database\n- [ ] James: estimate Slack integration effort",
  },
  "standup-fri": {
    title: "Team standup",
    dateLabel: "@Fri 9:15 AM",
    attendees: [
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
    ],
  },
  "sprint-demo": {
    title: "Sprint demo",
    dateLabel: "@Fri 4:00 PM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Evan Soto", color: "#d49a6a" },
    ],
  },
  "design-review": {
    title: "Design review",
    dateLabel: "@Today 10:00 AM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Lena Park", color: "#9b8ec4" },
    ],
    notes:
      '## Review items\n- Dashboard redesign — new layout with inline charts and status summary\n- Self-serve onboarding flow — updated stepper component\n- Design references page needs cleanup\n\n## Feedback\n- Dashboard: team likes the new grid layout. Suggestion: add a "quick actions" row at the top\n- Onboarding: stepper looks good, but step 3 copy is too long — trim to 2 sentences\n- Design refs: archive anything older than 6 months\n\n## Action items\n- [ ] Jordan: add quick actions row to dashboard mockup\n- [ ] Lena: trim onboarding step 3 copy\n- [ ] Sophie: tag outdated design references for archive',
  },
  "sprint-planning": {
    title: "Sprint planning",
    dateLabel: "@Today 2:00 PM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Evan Soto", color: "#d49a6a" },
    ],
    notes:
      "## Sprint goals\n1. Ship self-serve onboarding to production\n2. Unblock customer health report\n3. Start template gallery exploration\n\n## Committed items\n- Self-serve onboarding GA (8 pts) — Priya\n- Customer health data pipeline fix (5 pts) — Maya\n- Template gallery design concepts (5 pts) — Jordan\n- Pricing FAQ publish (3 pts) — Evan\n- Keyboard shortcut cheat sheet (3 pts) — James\n- Mobile push notification specs (5 pts) — Ravi\n- Total: 29 pts\n\n## Risks\n- Data pipeline fix depends on platform team availability\n- Template gallery scope could expand — timebox to concepts only this sprint",
  },
  "manager-1on1": {
    title: "1:1 with Maya",
    dateLabel: "@Today 4:00 PM",
    attendees: [{ name: "Maya Chen", color: "#7c9cd4" }],
    notes:
      "## Topics discussed\n- Customer health report blocker — platform team responded, fix expected by Wednesday\n- Maya interested in leading the research archive revamp next quarter\n- Feedback from enterprise user interviews went well — customers loved the depth\n\n## Action items\n- [ ] Follow up with platform team if pipeline fix isn't deployed by Thursday\n- [ ] Maya: draft proposal for research archive improvements\n- [ ] Both: review Q2 goals alignment next week",
  },
  "customer-health": {
    title: "Customer health sync",
    dateLabel: "@Today 3:00 PM",
    attendees: [
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Priya Shah", color: "#7c9cd4" },
      { name: "James Wilson", color: "#d4a843" },
    ],
    notes:
      "## Status\n- Customer health report remains Blocked — waiting on data pipeline\n- 3 enterprise accounts flagged for churn risk\n- NPS scores from Q1 deep-dive shared with team\n\n## Discussion\n- Priya can unblock with a temporary workaround using cached data\n- James suggests adding health scores to the launch tracker for visibility\n- Churn risk accounts all cite missing bulk export feature\n\n## Action items\n- [ ] Priya: implement cached data workaround by Thursday\n- [ ] James: add health score column to launch tracker\n- [ ] Maya: reach out to at-risk accounts with timeline for bulk export",
  },
  "sprint-retro": {
    title: "Sprint retro",
    dateLabel: "@Last Friday 3:00 PM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Evan Soto", color: "#d49a6a" },
    ],
    notes:
      "## What went well\n- API v2 rollout shipped on time with zero incidents\n- Research archive got 3 new studies added — great momentum\n- Product ideas database hit 50+ entries, healthy community engagement\n\n## What could improve\n- Customer health report has been blocked for 2 sprints — need to escalate\n- Launch tracker statuses weren't updated promptly — several items were stale\n- Daily notes aren't being used consistently across the team\n\n## Action items\n- [ ] Sophie: set up weekly launch tracker review ritual\n- [ ] Maya: escalate data pipeline blocker to platform team lead\n- [ ] Jordan: add status update reminders to team standup template",
  },
  "ideas-brainstorm": {
    title: "Product ideas brainstorm",
    dateLabel: "@Last Thursday 2:00 PM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Lena Park", color: "#9b8ec4" },
    ],
    notes:
      "## New ideas generated\n- **Smart page linking** — suggest related pages as you type, based on content similarity\n- **Database rollup widgets** — show aggregate stats from databases inline on any page\n- **Recurring page templates** — auto-create weekly planning docs every Monday\n- **Comment threading** — nested replies on page comments like Slack\n\n## Top picks\n- Smart page linking got the most excitement — aligns with search UX benchmarking findings\n- Database rollups would add value to the product workspace home page\n\n## Next steps\n- [ ] Sophie: add all new ideas to the product ideas database\n- [ ] Jordan: sketch smart page linking interaction\n- [ ] Lena: prototype database rollup widget",
  },
  "onboarding-review": {
    title: "Onboarding flow review",
    dateLabel: "@Last Wednesday 11:00 AM",
    attendees: [
      { name: "Priya Shah", color: "#7c9cd4" },
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "Maya Chen", color: "#7c9cd4" },
    ],
    notes:
      '## Review\n- Walked through the updated self-serve onboarding flow\n- Addressed 7 of 12 friction points from Maya\'s research\n- New stepper component guides users through 4 setup steps\n\n## Feedback\n- Step 2 (invite team) should be optional — some users want to explore solo first\n- Add a "skip for now" link on every step\n- Final step should highlight the product handbook as a starting point\n\n## Metrics targets\n- Completion rate: 65% (currently 42% on old flow)\n- Time to complete: <3 min\n- [ ] Priya: implement skip links on all steps\n- [ ] Sophie: update onboarding copy based on feedback',
  },
  "q2-planning": {
    title: "Q2 planning kickoff",
    dateLabel: "@Last Monday 10:00 AM",
    attendees: [
      { name: "Sophie Tran", color: "#b0a8a0" },
      { name: "James Wilson", color: "#d4a843" },
      { name: "Maya Chen", color: "#7c9cd4" },
      { name: "Ravi Kumar", color: "#c47d5e" },
      { name: "Jordan Lee", color: "#8bb87a" },
      { name: "Lena Park", color: "#9b8ec4" },
    ],
    notes:
      "## Q1 recap\n- Shipped: API v2 rollout, 7 product ideas evaluated, 5 research studies completed\n- In progress: payments migration, self-serve onboarding\n- Missed: customer health report (blocked), accessibility audit (deprioritized)\n\n## Q2 themes\n1. **Activation** — self-serve onboarding, template gallery, keyboard shortcuts\n2. **Retention** — customer health monitoring, page analytics, NPS improvements\n3. **Platform** — Slack integration, bulk export, API improvements\n\n## Resourcing\n- Jordan: template gallery (60%) + design system (40%)\n- Maya: research + customer health\n- Ravi: platform + API\n- Evan: product ideas implementation\n- Priya: onboarding + launch support\n\n## Key dates\n- Q2 OKRs due: Apr 4\n- First sprint starts: Apr 7\n- Mid-quarter review: May 15",
  },
};

export default function MeetingNoteSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const meeting = MEETINGS[slug];

  if (!meeting) {
    return (
      <div className="mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-8">
        <p className="text-tertiary text-sm">Meeting not found</p>
      </div>
    );
  }

  const maxAvatars = 4;
  const visibleAttendees = meeting.attendees.slice(0, maxAvatars);
  const extraCount = meeting.attendees.length - maxAvatars;

  return (
    <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-8 pb-[30vh]">
      <div className="pt-[40px] pb-[4px]">
        <h1 className="text-primary text-[40px] leading-[1.2] font-bold">
          {meeting.title} <DateMention>{meeting.dateLabel}</DateMention>
        </h1>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Icon icon={viewCalendarIcon} size={18} color="secondary" />
          <span className="text-primary text-sm font-semibold">
            {meeting.title}
          </span>
        </div>
        <div className="flex items-center -space-x-1.5">
          {visibleAttendees.map((a) => (
            <div
              key={a.name}
              className="flex size-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white dark:border-[#191919]"
              style={{ backgroundColor: a.color }}
              title={a.name}
            >
              {a.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          ))}
          {extraCount > 0 && (
            <span className="text-tertiary ml-2 text-xs font-medium">
              +{extraCount}
            </span>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <span className="text-tertiary text-sm">
          Share this page with event participants?
        </span>
        <button
          type="button"
          className="text-accent-blue text-sm font-medium hover:underline"
        >
          Share
        </button>
        <button type="button" className="text-tertiary text-sm hover:underline">
          Dismiss
        </button>
      </div>

      <div className="mt-6">
        <div className="border-primary overflow-hidden rounded-lg border shadow-xs">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium",
                  "bg-secondary-translucent text-primary",
                )}
              >
                <Icon icon={slidersIcon} size={14} color="secondary" />
                Summary
              </button>
              <button
                type="button"
                className="text-tertiary hover:bg-secondary-translucent flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium"
              >
                <Icon icon={pencilLineIcon} size={14} color="tertiary" />
                Notes
              </button>
              <button
                type="button"
                className="text-tertiary hover:bg-secondary-translucent flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium"
              >
                <Icon icon={volumeOnIcon} size={14} color="tertiary" />
                Transcript
              </button>
            </div>
            <Button
              variant="primary"
              size="sm"
              className="h-7 rounded-md px-3 text-xs font-medium"
            >
              Share summary
            </Button>
          </div>

          {meeting.notes && (
            <div className="px-6 pt-4 pb-6">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-primary mt-6 mb-3 text-xl font-bold first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-primary mt-5 mb-2 text-lg font-bold">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-primary mb-2 text-[15px]/7">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-3 list-disc pl-6">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-3 list-decimal pl-6">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-primary mb-1 text-[15px]/7">
                      {children}
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  input: ({ checked, ...props }) => (
                    <input
                      type="checkbox"
                      checked={checked}
                      readOnly
                      className="mr-1.5 align-middle"
                      {...props}
                    />
                  ),
                }}
              >
                {meeting.notes}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
