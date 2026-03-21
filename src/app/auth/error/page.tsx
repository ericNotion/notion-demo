"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { useRouter, useSearchParams } from "next/navigation";

const errorMessages: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: "Server Configuration Error",
    description:
      "There is a problem with the server configuration. Please contact the administrator.",
  },
  AccessDenied: {
    title: "Access Denied",
    description:
      "You are not assigned to the Prototype Playground application in Okta. Please contact your administrator to request access to this application.",
  },
  Verification: {
    title: "Verification Failed",
    description:
      "The sign in link is no longer valid. It may have been used already or expired.",
  },
  Default: {
    title: "Authentication Error",
    description: "An error occurred during authentication. Please try again.",
  },
};

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error") ?? undefined;

  const errorInfo = errorMessages[error ?? ""] ?? errorMessages.Default;

  return (
    <div className="relative z-20 flex min-h-dvh flex-1 flex-col items-center justify-center gap-12">
      <div className="flex flex-col items-center gap-6">
        <div className="flex max-w-[400px] flex-col items-center gap-2">
          <h1 className="text-primary text-center text-2xl font-semibold">
            {errorInfo.title}
          </h1>
          <p className="text-secondary text-center text-base text-pretty">
            {errorInfo.description}
          </p>
        </div>
      </div>

      <PlaygroundButton
        onClick={() => router.push("/auth/signin")}
        variant="default"
        size="lg"
      >
        Try Again
      </PlaygroundButton>
    </div>
  );
}
