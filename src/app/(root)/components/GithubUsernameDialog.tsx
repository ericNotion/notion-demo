"use client";

import {
  PlaygroundButton,
  PlaygroundDialog,
  PlaygroundDialogContent,
  PlaygroundDialogDescription,
  PlaygroundDialogTitle,
} from "@/components/playground-kit";
import { PlaygroundInput } from "@/components/playground-kit/input";
import { useState } from "react";

type GithubUsernameDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentGithubUsername?: string;
  currentEmail?: string;
};

export function GithubUsernameDialog({
  open,
  onOpenChange,
  currentGithubUsername,
  currentEmail,
}: GithubUsernameDialogProps) {
  const [githubUsername, setGithubUsername] = useState(
    currentGithubUsername || "",
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!githubUsername.trim()) {
      setError("Please enter your GitHub username");
      return;
    }

    // Basic validation for GitHub username format
    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(githubUsername)) {
      setError(
        "Invalid GitHub username format. Use only alphanumeric characters and hyphens.",
      );
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/update-github-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ githubUsername: githubUsername.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          onOpenChange(false);
          // Reload to refresh session data
          window.location.reload();
        }, 1500);
      } else {
        setError(data.error || "Failed to save GitHub username");
      }
    } catch (err) {
      console.error("Save error:", err);
      setError("Failed to save GitHub username. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <PlaygroundDialog open={open} onOpenChange={onOpenChange}>
      <PlaygroundDialogContent className="max-w-md">
        <PlaygroundDialogTitle>Configure GitHub Username</PlaygroundDialogTitle>
        <PlaygroundDialogDescription>
          {currentGithubUsername ? (
            <>
              Your GitHub username is used for PR author mapping and prototype
              syncing.
            </>
          ) : (
            <>
              To enable PR author mapping, you can submit a PR to add yourself
              to <code className="text-xs">users.json</code>. For local
              development, you can save it directly.
            </>
          )}
        </PlaygroundDialogDescription>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {currentEmail && (
            <div className="border-secondary bg-secondary rounded-lg border px-3 py-2">
              <div className="text-tertiary text-xs">Signed in as</div>
              <div className="text-sm font-medium">{currentEmail}</div>
            </div>
          )}

          <div>
            <label
              htmlFor="github-username"
              className="mb-1.5 block text-sm font-medium"
            >
              GitHub Username
            </label>
            <PlaygroundInput
              id="github-username"
              type="text"
              value={githubUsername}
              onChange={(e) => {
                setGithubUsername(e.target.value);
                setError(null);
                setSuccess(false);
              }}
              placeholder="e.g., octocat"
              disabled={saving}
              className="w-full"
            />
            <div className="text-tertiary mt-1.5 text-xs">
              Your GitHub username (not email) for PR author detection
            </div>
            {error && (
              <div className="mt-2 text-xs text-red-600 dark:text-red-400">
                {error}
              </div>
            )}
            {success && (
              <div className="mt-2 text-xs text-green-600 dark:text-green-400">
                ✓ GitHub username saved successfully
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <PlaygroundButton
              type="button"
              variant="tint"
              onClick={() => onOpenChange(false)}
              disabled={saving}
            >
              Cancel
            </PlaygroundButton>
            <PlaygroundButton
              type="submit"
              variant="primary"
              disabled={saving || !githubUsername.trim()}
            >
              {saving ? "Saving..." : "Save"}
            </PlaygroundButton>
          </div>
        </form>
      </PlaygroundDialogContent>
    </PlaygroundDialog>
  );
}
