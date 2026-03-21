"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// Check if Okta auth is configured - if not, skip the session provider
// to avoid ClientFetchError when auth backend isn't set up
const isAuthConfigured = process.env.NEXT_PUBLIC_USE_OKTA === "true";

export function SessionProvider({ children }: { children: ReactNode }) {
  // Skip auth provider if not configured - allows prototypes to work without auth
  if (!isAuthConfigured) {
    return <>{children}</>;
  }

  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
