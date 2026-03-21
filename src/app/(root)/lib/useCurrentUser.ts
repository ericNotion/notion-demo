import { isProduction } from "@/utils/env";
import useSWR from "swr";

async function fetchCurrentUser() {
  const response = await fetch("/api/current-user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    redirect: "error",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetch current user from local .playground config file.
 * This is a development-only feature - in production, returns undefined
 * without making any API calls.
 */
export function useCurrentUser() {
  // Skip fetching in production - .playground file only exists locally
  const shouldFetch = !isProduction();
  return useSWR(shouldFetch ? "/api/current-user" : null, fetchCurrentUser);
}

// Hook for cases that only need the username
export function useCurrentUsername() {
  const { data, error, isLoading } = useCurrentUser();
  return {
    username: data?.username || null,
    error,
    isLoading,
  };
}
