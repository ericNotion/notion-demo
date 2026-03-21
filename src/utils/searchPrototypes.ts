import { Prototype } from "@/types/prototypes";

type PrototypeWithAuthor = Prototype & { username: string };

interface SearchResult<T> {
  item: T;
  score: number;
}

/**
 * Weighted search for prototypes with prioritization:
 * - Exact username match: 1000 points
 * - Username starts with query: 500 points
 * - Username contains query: 250 points
 * - Title exact match: 100 points
 * - Title starts with query: 50 points
 * - Title contains query: 25 points
 * - Description contains query: 10 points
 */
export function searchPrototypes(
  prototypes: PrototypeWithAuthor[],
  query: string,
): PrototypeWithAuthor[] {
  if (!query.trim()) {
    return prototypes;
  }

  const normalizedQuery = query.toLowerCase().trim();

  const results: SearchResult<PrototypeWithAuthor>[] = prototypes
    .map((proto) => {
      let score = 0;
      const username = proto.username.toLowerCase();
      const title = proto.title.toLowerCase();
      const description = (proto.description || "").toLowerCase();

      // Username scoring (highest priority)
      if (username === normalizedQuery) {
        score += 1000;
      } else if (username.startsWith(normalizedQuery)) {
        score += 500;
      } else if (username.includes(normalizedQuery)) {
        score += 250;
      }

      // Title scoring
      if (title === normalizedQuery) {
        score += 100;
      } else if (title.startsWith(normalizedQuery)) {
        score += 50;
      } else if (title.includes(normalizedQuery)) {
        score += 25;
      }

      // Description scoring (lowest priority)
      if (description.includes(normalizedQuery)) {
        score += 10;
      }

      return { item: proto, score };
    })
    .filter((result) => result.score > 0);

  // Sort by score (descending), then by date (newest first)
  results.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.item.createdAt.getTime() - a.item.createdAt.getTime();
  });

  return results.map((result) => result.item);
}
