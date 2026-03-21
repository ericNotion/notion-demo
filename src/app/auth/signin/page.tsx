"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function isValidCallbackUrl(url: string | undefined): string {
  if (!url) return "/";

  try {
    const parsed = new URL(url, "http://localhost");
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return "/";
    }
    if (parsed.host !== "localhost" && !url.startsWith("/")) {
      return "/";
    }
    return url;
  } catch {
    return "/";
  }
}

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? undefined;
  const error = searchParams.get("error") ?? undefined;
  const safeCallbackUrl = isValidCallbackUrl(callbackUrl);

  return (
    <div className="relative z-20 flex min-h-dvh flex-1 flex-col items-center justify-center gap-12">
      <PlaygroundButton
        onClick={() => {
          signIn("okta", { callbackUrl: safeCallbackUrl });
        }}
        variant="default"
        size="lg"
      >
        Sign in with Okta
      </PlaygroundButton>

      {error && (
        <p className="text-base text-red-500">
          {error === "OAuthSignin"
            ? "Error connecting to Okta. Please try again."
            : error === "OAuthCallback" || error === "OAuthCallbackError"
              ? "You are not assigned to the Prototype Playground application in Okta. Please contact your administrator to request access."
              : error === "AccessDenied"
                ? "You are not assigned to the Prototype Playground application in Okta. Please contact your administrator to request access."
                : error === "Configuration"
                  ? "Server configuration error. Please contact your administrator."
                  : "An error occurred during sign in. Please try again."}
        </p>
      )}
    </div>
  );
}
