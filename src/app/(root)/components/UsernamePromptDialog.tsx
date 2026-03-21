"use client";

import {
  PlaygroundButton,
  PlaygroundDialog,
  PlaygroundDialogContent,
  PlaygroundDialogDescription,
  PlaygroundDialogTitle,
  PlaygroundSelect,
} from "@/components/playground-kit";
import {
  PlaygroundSelectContent,
  PlaygroundSelectItem,
  PlaygroundSelectTrigger,
  PlaygroundSelectValue,
} from "@/components/playground-kit/select";
import { useEffect, useState } from "react";

type UsernamePromptDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUsernameSet: (username: string) => void;
};

export function UsernamePromptDialog({
  open,
  onOpenChange,
  onUsernameSet,
}: UsernamePromptDialogProps) {
  const [username, setUsername] = useState("");
  const [validating, setValidating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validUsernames, setValidUsernames] = useState<string[] | null>(null);

  // Fetch valid usernames for autocomplete
  useEffect(() => {
    if (open) {
      setValidUsernames(null); // Reset to loading state
      fetch("/api/validate-username")
        .then((res) => res.json())
        .then((data) => {
          setValidUsernames(data.usernames || []);
        })
        .catch((err) => {
          console.error("Failed to fetch usernames:", err);
          setValidUsernames([]); // Set to empty on error
        });
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter your username");
      return;
    }

    setValidating(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/validate-username?username=${encodeURIComponent(username)}`,
      );
      const data = await response.json();

      if (data.valid) {
        onUsernameSet(username);
        onOpenChange(false);
      } else {
        setError(
          "Username not found. Please run Prototype Playground locally to create your user first.",
        );
      }
    } catch (err) {
      console.error("Validation error:", err);
      setError("Failed to validate username. Please try again.");
    } finally {
      setValidating(false);
    }
  }

  return (
    <PlaygroundDialog open={open} onOpenChange={onOpenChange}>
      <PlaygroundDialogContent showCloseButton={false} className="max-w-md">
        <PlaygroundDialogTitle>Who goes there?</PlaygroundDialogTitle>
        <PlaygroundDialogDescription>
          Identify yourself, stranger. Do not deceive.
        </PlaygroundDialogDescription>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <PlaygroundSelect
              value={username}
              onValueChange={(value) => {
                setUsername(value);
                setError(null);
              }}
              disabled={validating}
            >
              <PlaygroundSelectTrigger className="w-full">
                <PlaygroundSelectValue placeholder="Who are you?" />
              </PlaygroundSelectTrigger>
              <PlaygroundSelectContent>
                {validUsernames === null ? (
                  <div className="text-secondary px-2 py-1.5 text-sm">
                    Loading usernames...
                  </div>
                ) : validUsernames.length > 0 ? (
                  validUsernames.map((name) => (
                    <PlaygroundSelectItem key={name} value={name}>
                      {name}
                    </PlaygroundSelectItem>
                  ))
                ) : (
                  <div className="text-secondary px-2 py-1.5 text-sm">
                    No usernames found
                  </div>
                )}
              </PlaygroundSelectContent>
            </PlaygroundSelect>
            {error && <div className="mt-2 text-xs text-red-600">{error}</div>}
            {error && (
              <div className="mt-2">
                <a
                  href="https://github.com/makenotion/prototype-playground"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline dark:text-blue-400"
                >
                  Set up Prototype Playground locally →
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <PlaygroundButton
              type="button"
              variant="tint"
              onClick={() => onOpenChange(false)}
              disabled={validating}
            >
              Cancel
            </PlaygroundButton>
            <PlaygroundButton
              type="submit"
              variant="primary"
              disabled={validating || !username}
            >
              {validating ? "Validating..." : "Continue"}
            </PlaygroundButton>
          </div>
        </form>
      </PlaygroundDialogContent>
    </PlaygroundDialog>
  );
}
