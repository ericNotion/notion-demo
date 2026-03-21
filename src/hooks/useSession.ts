"use client";

import type { Session } from "next-auth";
import { useEffect, useState } from "react";

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch("/api/auth/session");
        if (response.ok) {
          const data = await response.json();
          setSession(data);
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSession();
  }, []);

  return {
    session,
    user: session?.user,
    isLoading,
    isAuthenticated: !!session?.user,
  };
}
