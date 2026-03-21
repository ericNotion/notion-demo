"use client";

import { useCurrentUsername } from "@/app/(root)/lib/useCurrentUser";
import {
  PlaygroundButton,
  PlaygroundDialog,
  PlaygroundDialogClose,
  PlaygroundDialogContent,
  PlaygroundDialogTitle,
} from "@/components/playground-kit";
import { PlaygroundInput } from "@/components/playground-kit/input";
import { PlaygroundTextarea } from "@/components/playground-kit/textarea";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { useProductionUsername } from "@/hooks/useProductionUsername";
import { useSession } from "@/hooks/useSession";
import {
  closeLinkExternalDialog,
  linkExternalDialogOpenAtom,
} from "@/root/atoms/linkExternalDialogOpenAtom";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UsernamePromptDialog } from "./UsernamePromptDialog";
function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function LinkExternalDialog() {
  const [dialogState, setDialogState] = useAtom(linkExternalDialogOpenAtom);
  const { open, versionContext } = dialogState;
  const isVersioning = Boolean(versionContext);

  const { username: devUsername } = useCurrentUsername();
  const prodUsername = useProductionUsername();
  const { session, isLoading: sessionLoading } = useSession();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [showUsernamePrompt, setShowUsernamePrompt] = useState(false);
  const router = useRouter();

  // Determine environment and username
  const isProduction = useIsProduction();
  const useOAuth = process.env.NEXT_PUBLIC_USE_OKTA === "true";

  // In OAuth mode, use session username; otherwise fall back to localStorage
  const username = isProduction
    ? useOAuth
      ? session?.user?.playgroundUsername
      : prodUsername.username
    : devUsername;

  // Check if user is fully set up (has notionUserId from users.json lookup)
  const isUserSetUp = useOAuth ? !!session?.user?.notionUserId : true;

  useEffect(() => {
    if (!open) {
      setUrl("");
      setTitle("");
      setDescription("");
      setError(null);
      setUrlError(null);
    } else {
      // Pre-fill from version context when versioning
      if (versionContext) {
        const source = versionContext.sourcePrototype;
        setUrl(source.externalUrl || "");
        setTitle(source.title);
        setDescription(source.description || "");
      }

      // Only show username prompt in non-OAuth production mode
      if (
        isProduction &&
        !useOAuth &&
        !prodUsername.isValid &&
        !prodUsername.isLoading
      ) {
        setShowUsernamePrompt(true);
      }
    }
  }, [
    open,
    isProduction,
    useOAuth,
    prodUsername.isValid,
    prodUsername.isLoading,
    versionContext,
  ]);

  async function handleCreate(e?: React.FormEvent | React.KeyboardEvent) {
    if (e) e.preventDefault();
    if (!username || !url.trim() || !title.trim()) return;

    if (!isValidUrl(url)) {
      setUrlError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (isProduction) {
        // Production flow: Create PR
        const res = await fetch("/api/create-external-prototype-pr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: url.trim(),
            title: title.trim(),
            description: description.trim(),
            username,
            // Include version context if versioning
            ...(versionContext && {
              sourceSlug: versionContext.sourcePrototype.slug,
              sourceUsername: versionContext.sourcePrototype.username,
            }),
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Failed to create pull request");
          if (data.setupUrl) {
            setError(`${data.error || "Failed to create pull request"}`);
          }
          setLoading(false);
          return;
        }

        const data = await res.json();
        // Open PR in new tab and close dialog
        window.open(data.prUrl, "_blank");
        setDialogState(closeLinkExternalDialog());
      } else {
        // Development flow: Create directly
        const res = await fetch("/api/create-external-prototype", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: url.trim(),
            title: title.trim(),
            description: description.trim(),
            // Include version context if versioning
            ...(versionContext && {
              sourceSlug: versionContext.sourcePrototype.slug,
              sourceUsername: versionContext.sourcePrototype.username,
            }),
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          setError(
            text ||
              (isVersioning
                ? "Failed to create new version"
                : "Failed to create external prototype"),
          );
          setLoading(false);
          return;
        }

        setDialogState(closeLinkExternalDialog());

        // Refresh the page to show the new prototype
        router.refresh();
      }
    } catch (err) {
      console.error("Failed to create external prototype:", err);
      setError(
        isVersioning
          ? "Failed to create new version"
          : "Failed to create external prototype",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleCreate(e);
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setDialogState({ ...dialogState, open: true });
    } else {
      setDialogState(closeLinkExternalDialog());
    }
  };

  // Dialog title and button text based on mode
  const dialogTitle = isVersioning ? "New Version" : "Link External Prototype";

  function getSubmitButtonText(): string {
    if (loading) {
      return isProduction ? "Creating PR..." : "Creating...";
    }
    return isVersioning ? "Create Version" : "Create";
  }
  const submitButtonText = getSubmitButtonText();

  return (
    <>
      <UsernamePromptDialog
        open={showUsernamePrompt}
        onOpenChange={(isOpen) => {
          setShowUsernamePrompt(isOpen);
          // If user cancels username prompt without setting username, close everything
          if (!isOpen && !prodUsername.isValid) {
            setDialogState(closeLinkExternalDialog());
          }
        }}
        onUsernameSet={(newUsername) => {
          prodUsername.setUsername(newUsername);
          setShowUsernamePrompt(false);
        }}
      />
      <PlaygroundDialog
        open={open && !showUsernamePrompt}
        onOpenChange={handleOpenChange}
      >
        <PlaygroundDialogContent showCloseButton={false} className="max-w-md">
          <PlaygroundDialogTitle>{dialogTitle}</PlaygroundDialogTitle>

          {isVersioning && versionContext && (
            <p className="text-secondary -mt-2 text-sm">
              Creating a new version of &ldquo;
              {versionContext.sourcePrototype.title}&rdquo;
            </p>
          )}

          {isProduction && useOAuth && !isUserSetUp && !sessionLoading && (
            <Link
              href="https://playground.makenotion.com/guides/getting-started"
              target="_blank"
              className="block rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 transition-colors hover:bg-yellow-500/20"
            >
              <p className="text-primary text-sm font-medium">Setup required</p>
              <p className="text-secondary mt-1 text-sm">
                Complete local setup to link external prototypes →
              </p>
            </Link>
          )}
          <form
            onSubmit={handleCreate}
            onKeyDown={handleKeyDown}
            className="flex flex-col gap-4"
          >
            {isProduction && (
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="username"
                >
                  Username
                </label>
                <PlaygroundInput
                  id="username"
                  value={username || ""}
                  disabled
                  placeholder={sessionLoading ? "Loading..." : "Not signed in"}
                />
                {!useOAuth && (
                  <PlaygroundButton
                    variant="ghost"
                    size="xs"
                    className="mt-2"
                    onClick={() => setShowUsernamePrompt(true)}
                  >
                    Change username
                  </PlaygroundButton>
                )}
              </div>
            )}
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="external-url"
              >
                URL
              </label>
              <PlaygroundInput
                id="external-url"
                type="url"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setUrlError(null);
                }}
                required
                disabled={loading || !username}
                placeholder="https://v0.dev/chat/..."
              />
              {urlError && (
                <div className="mt-1 text-sm text-red-600">{urlError}</div>
              )}
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="external-title"
              >
                Title
              </label>
              <PlaygroundInput
                id="external-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                minLength={1}
                disabled={loading || !username}
                placeholder="Prototype title"
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="external-description"
              >
                Description
              </label>
              <PlaygroundTextarea
                id="external-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                disabled={loading || !username}
                placeholder="Description (optional)"
              />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <div className="flex justify-end gap-1">
              <PlaygroundDialogClose asChild>
                <PlaygroundButton
                  variant="tint"
                  type="button"
                  disabled={loading}
                >
                  Cancel
                </PlaygroundButton>
              </PlaygroundDialogClose>
              <PlaygroundButton
                variant="primary"
                type="submit"
                disabled={
                  loading ||
                  !url.trim() ||
                  !title.trim() ||
                  !username ||
                  !isUserSetUp
                }
              >
                {submitButtonText}
              </PlaygroundButton>
            </div>
          </form>
        </PlaygroundDialogContent>
      </PlaygroundDialog>
    </>
  );
}
