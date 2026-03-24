import type { GraphData } from "./types";

const BASE = "/eric/notion-clone";

export const mockGraphData: GraphData = {
  nodes: [
    { id: "1", label: "Product workspace", link: BASE },
    { id: "2", label: "Launch tracker", link: `${BASE}/launch-tracker` },
    { id: "3", label: "Research archive", link: `${BASE}/research-archive` },
    { id: "4", label: "Design references", link: `${BASE}/design-references` },
    { id: "5", label: "Product handbook", link: `${BASE}/product-handbook` },
    { id: "6", label: "Product ideas", link: `${BASE}/product-ideas` },
    { id: "7", label: "Daily notes", link: `${BASE}/daily-notes` },
    {
      id: "8",
      label: "Payments migration",
      link: `${BASE}/launch-tracker/payments-migration`,
    },
    {
      id: "9",
      label: "Self-serve onboarding",
      link: `${BASE}/launch-tracker/self-serve-onboarding`,
    },
    {
      id: "10",
      label: "Dashboard redesign",
      link: `${BASE}/launch-tracker/dashboard-redesign`,
    },
    {
      id: "11",
      label: "API v2 rollout",
      link: `${BASE}/launch-tracker/api-v2-rollout`,
    },
    {
      id: "12",
      label: "Inline AI writing assistant",
      link: `${BASE}/product-ideas/inline-ai-writing-assistant`,
    },
    {
      id: "13",
      label: "Template gallery",
      link: `${BASE}/product-ideas/template-gallery`,
    },
    {
      id: "14",
      label: "Onboarding friction points",
      link: `${BASE}/research-archive/onboarding-friction-points`,
    },
    {
      id: "15",
      label: "Customer health report",
      link: `${BASE}/launch-tracker/customer-health-report`,
    },
  ],
  edges: [
    { source: "1", target: "2" },
    { source: "1", target: "3" },
    { source: "1", target: "5" },
    { source: "1", target: "6" },
    { source: "1", target: "4" },
    { source: "1", target: "7" },
    { source: "2", target: "8" },
    { source: "2", target: "9" },
    { source: "2", target: "10" },
    { source: "2", target: "11" },
    { source: "2", target: "15" },
    { source: "6", target: "12" },
    { source: "6", target: "13" },
    { source: "3", target: "14" },
    { source: "9", target: "14" },
    { source: "10", target: "4" },
    { source: "11", target: "5" },
  ],
};
