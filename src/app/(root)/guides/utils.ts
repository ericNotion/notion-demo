import type { Guide } from "@/lib/notion";

// In development, always return all guides - client-side filtering
// will handle hiding "getting-started" based on preview production mode
export function filterGuidesForEnvironment(guides: Guide[]): Guide[] {
  return guides;
}
