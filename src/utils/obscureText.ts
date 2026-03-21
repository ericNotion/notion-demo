// I Ching trigrams (U+2630 to U+2637) - 8 characters
// ☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷
const TRIGRAMS = ["☰", "☱", "☲", "☳", "☴", "☵", "☶", "☷"];

/**
 * Obscures text by replacing characters with random I Ching trigrams.
 * Preserves spaces for readability.
 */
function obscureText(text: string): string {
  return text
    .split("")
    .filter((char) => char !== " ")
    .slice(0, 16)
    .map(() => {
      return TRIGRAMS[Math.floor(Math.random() * TRIGRAMS.length)];
    })
    .join("");
}

/**
 * Creates a seeded obscured version of text that's consistent
 * (same input always produces same output).
 * Uses I Ching trigrams with pseudo-random selection based on
 * character position and text content.
 */
export function obscureTextSeeded(text: string): string {
  // Simple hash function to get consistent "random" values
  function simpleHash(str: string, index: number): number {
    let hash = 0;
    const combined = str + index.toString();
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  return text
    .split("")
    .filter((char) => char !== " ")
    .slice(0, 16)
    .map((_, index) => {
      const trigramIndex = simpleHash(text, index) % TRIGRAMS.length;
      return TRIGRAMS[trigramIndex];
    })
    .join("");
}
