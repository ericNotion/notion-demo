import { useCurrentUsername } from "@/app/(root)/lib/useCurrentUser";
import type { Prototype } from "@/types/prototypes";
import { useState } from "react";

export function useDuplicatePrototype({
  sourceUsername = "templates",
  onDuplicated,
}: {
  sourceUsername?: string;
  onDuplicated?: (newSlug: string) => void;
} = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { username } = useCurrentUsername();

  async function duplicate(prototype: Prototype) {
    if (!username) {
      setError("Unable to determine your username. Please try again.");
      return;
    }

    console.log("duplicating", prototype);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/duplicate-prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceUsername,
          sourceSlug: prototype.slug,
        }),
      });
      if (res.ok) {
        const { slug } = await res.json();
        const newUrl = `/${username}/${slug}`;
        if (onDuplicated) onDuplicated(slug);
        // Use full page navigation to ensure Next.js dev server compiles the new route
        window.location.href = newUrl;
      } else {
        const text = await res.text();
        setError(text || "Failed to duplicate prototype");
      }
    } catch {
      setError("Failed to duplicate prototype");
    } finally {
      setLoading(false);
    }
  }

  return { duplicate, loading, error };
}
