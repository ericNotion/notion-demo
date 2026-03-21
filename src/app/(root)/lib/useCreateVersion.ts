import { useCurrentUsername } from "@/app/(root)/lib/useCurrentUser";
import type { Prototype } from "@/types/prototypes";
import { useState } from "react";

interface CreateVersionResult {
  slug: string;
  version: number;
  versionGroupId: string;
  branchedFromVersion: number;
}

const MAX_ROUTE_READY_ATTEMPTS = 10;
const ROUTE_READY_DELAY_MS = 200;

async function waitForRouteReady(url: string): Promise<void> {
  for (let i = 0; i < MAX_ROUTE_READY_ATTEMPTS; i++) {
    const res = await fetch(url, { method: "HEAD" });
    if (res.ok) return;
    await new Promise((resolve) => setTimeout(resolve, ROUTE_READY_DELAY_MS));
  }
}

export function useCreateVersion({
  onVersionCreated,
}: {
  onVersionCreated?: (result: CreateVersionResult) => void;
} = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { username } = useCurrentUsername();

  async function createVersion(
    sourceUsername: string,
    prototype: Prototype,
  ): Promise<CreateVersionResult | null> {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-version", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceUsername,
          sourceSlug: prototype.slug,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        setError(text || "Failed to create version");
        return null;
      }

      const result: CreateVersionResult = await res.json();
      if (!username) throw new Error("No username found");

      const newUrl = `/${username}/${result.slug}`;
      onVersionCreated?.(result);
      await waitForRouteReady(newUrl);
      window.location.href = newUrl;
      return result;
    } catch {
      setError("Failed to create version");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { createVersion, loading, error };
}
