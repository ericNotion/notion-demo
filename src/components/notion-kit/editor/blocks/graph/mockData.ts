import type { GraphData } from "./types";

const BASE = "/eric/notion-clone";

export const mockGraphData: GraphData = {
  nodes: [
    { id: "1", label: "Product workspace", link: BASE, category: "workspace" },
    { id: "2", label: "Launch tracker", link: `${BASE}/launch-tracker`, category: "launches" },
    { id: "3", label: "Research archive", link: `${BASE}/research-archive`, category: "research" },
    { id: "4", label: "Design references", link: `${BASE}/design-references`, category: "design" },
    { id: "5", label: "Product handbook", link: `${BASE}/product-handbook`, category: "docs" },
    { id: "6", label: "Product ideas", link: `${BASE}/product-ideas`, category: "ideas" },
    { id: "7", label: "Daily notes", link: `${BASE}/daily-notes`, category: "notes" },
    {
      id: "8",
      label: "Payments migration",
      link: `${BASE}/launch-tracker/payments-migration`,
      category: "launches",
    },
    {
      id: "9",
      label: "Self-serve onboarding",
      link: `${BASE}/launch-tracker/self-serve-onboarding`,
      category: "launches",
    },
    {
      id: "10",
      label: "Dashboard redesign",
      link: `${BASE}/launch-tracker/dashboard-redesign`,
      category: "launches",
    },
    {
      id: "11",
      label: "API v2 rollout",
      link: `${BASE}/launch-tracker/api-v2-rollout`,
      category: "launches",
    },
    {
      id: "12",
      label: "Inline AI writing assistant",
      link: `${BASE}/product-ideas/inline-ai-writing-assistant`,
      category: "ideas",
    },
    {
      id: "13",
      label: "Template gallery",
      link: `${BASE}/product-ideas/template-gallery`,
      category: "ideas",
    },
    {
      id: "14",
      label: "Onboarding friction points",
      link: `${BASE}/research-archive/onboarding-friction-points`,
      category: "research",
    },
    {
      id: "15",
      label: "Customer health report",
      link: `${BASE}/launch-tracker/customer-health-report`,
      category: "launches",
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
