"use client";

import {
  useCurrentUser,
  useCurrentUsername,
} from "@/app/(root)/lib/useCurrentUser";
import {
  PlaygroundButton,
  PlaygroundIconButton,
  PlaygroundInput,
  useHoverCardControl,
} from "@/components/playground-kit";
import { PlaygroundTextarea } from "@/components/playground-kit/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoadingDots } from "@/components/ui/loading-dots";
import CustomTooltip from "@/components/ui/tooltip";
import { useGitStatus } from "@/hooks/useGitStatus";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { codeIcon } from "@/nds-icons/src/code/default.icon";
import { duplicateIcon } from "@/nds-icons/src/duplicate/default.icon";
import { pencilIcon } from "@/nds-icons/src/pencil/default.icon";
import { stackIcon } from "@/nds-icons/src/stack/default.icon";
import {
  linkExternalDialogOpenAtom,
  openLinkExternalDialogForVersion,
} from "@/root/atoms/linkExternalDialogOpenAtom";
import { useCreateVersion } from "@/root/lib/useCreateVersion";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { AnimatePresence, motion } from "framer-motion";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Prototype } from "../../../types/prototypes";

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function formatDate(date: Date) {
  const includeYear = date.getFullYear() !== new Date().getFullYear();
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: includeYear ? "numeric" : undefined,
  });
}

export function IndexHeader({
  icon = <Icon icon={aiFaceIcon} size="xl" weight="bold" />,
  heading = "Playground",
  breadcrumbs,
}: {
  icon?: React.ReactNode;
  heading?: string;
  breadcrumbs?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 select-none">
      {icon}
      <Link draggable={false} href="/">
        <h1 className="text-title-lg font-semibold">{heading}</h1>
      </Link>
      {breadcrumbs}
    </div>
  );
}

export function Username({ username }: { username: string }) {
  if (username === "nds") {
    return null;
  }

  return (
    <Link
      href={`/${username}`}
      className="text-secondary mb-1 px-2 text-sm font-medium"
    >
      {username}
    </Link>
  );
}

export function DuplicatePrototypeButton({
  username,
  prototype,
  loading,
  setLoading,
}: {
  username: string;
  prototype: Prototype;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}) {
  const { username: currentUsername, isLoading: isLoadingUsername } =
    useCurrentUsername();
  const hoverCardControl = useHoverCardControl();

  async function handleDuplicate() {
    if (!currentUsername) {
      alert("Unable to determine your username. Please try again.");
      return;
    }

    hoverCardControl?.close();
    setLoading(true);
    try {
      const res = await fetch("/api/duplicate-prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceUsername: username,
          sourceSlug: prototype.slug,
        }),
      });
      if (res.ok) {
        const { slug } = await res.json();
        const newUrl = `/${currentUsername}/${slug}`;
        // Use full page navigation to ensure Next.js dev server compiles the new route
        // and server components re-render with fresh data
        window.location.href = newUrl;
      } else {
        alert("Failed to duplicate prototype");
      }
    } catch (error) {
      console.error("Error duplicating prototype:", error);
      alert("An error occurred while duplicating the prototype");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PlaygroundIconButton
      variant="ghost"
      onClick={handleDuplicate}
      disabled={loading || isLoadingUsername}
      title="Duplicate prototype"
      tooltip="Duplicate"
    >
      {loading ? (
        <span>
          <LoadingDots />
        </span>
      ) : (
        <Icon icon={duplicateIcon} color="inherit" />
      )}
    </PlaygroundIconButton>
  );
}

export function AddVersionButton({
  username,
  prototype,
}: {
  username: string;
  prototype: Prototype;
}) {
  const hoverCardControl = useHoverCardControl();
  const { createVersion, loading } = useCreateVersion();
  const isProduction = useIsProduction();
  const setLinkExternalDialogState = useSetAtom(linkExternalDialogOpenAtom);

  const isExternal = Boolean(prototype.externalUrl);

  async function handleAddVersion() {
    hoverCardControl?.close();

    if (isExternal) {
      // For external prototypes, open the link external dialog with version context
      setLinkExternalDialogState(
        openLinkExternalDialogForVersion({ ...prototype, username }),
      );
    } else {
      // For local prototypes, use the regular version creation flow
      await createVersion(username, prototype);
    }
  }

  // Only show in local development (not production or preview production mode)
  if (isProduction) return null;

  return (
    <PlaygroundIconButton
      variant="ghost"
      onClick={handleAddVersion}
      disabled={loading}
      title="Add new version"
      tooltip="New version"
    >
      {loading ? (
        <span>
          <LoadingDots />
        </span>
      ) : (
        <Icon icon={stackIcon} color="inherit" />
      )}
    </PlaygroundIconButton>
  );
}

export function EditPrototypeButton({
  onClick,
  prototype,
  username,
}: {
  onClick?: () => void;
  prototype: Prototype;
  username: string;
}) {
  const [open, setOpen] = useState(false);
  const hoverCardControl = useHoverCardControl();
  const router = useRouter();
  const [name, setName] = useState(prototype.title);
  const [description, setDescription] = useState(prototype.description || "");
  const [externalUrl, setExternalUrl] = useState(prototype.externalUrl || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const isExternal = Boolean(prototype.externalUrl);

  useEffect(() => {
    if (!open) {
      setName(prototype.title);
      setDescription(prototype.description || "");
      setExternalUrl(prototype.externalUrl || "");
      setError(null);
    }
  }, [open, prototype]);

  async function handleSave(e?: React.FormEvent | React.KeyboardEvent) {
    if (e) e.preventDefault();

    // Validate external URL if this is an external prototype
    if (isExternal) {
      const trimmedUrl = externalUrl.trim();
      if (!trimmedUrl) {
        setError("External URL is required");
        return;
      }
      if (trimmedUrl.includes(" ")) {
        setError("URL cannot contain spaces");
        return;
      }
      if (!isValidUrl(trimmedUrl)) {
        setError("Please enter a valid URL");
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      // Local development - direct file edit
      const res = await fetch("/api/edit-prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          oldSlug: prototype.slug,
          name,
          description,
          ...(isExternal && { externalUrl: externalUrl.trim() }),
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        setError(text || "Failed to update prototype");
      } else {
        setOpen(false);
        router.refresh();
      }
    } catch {
      setError("Failed to update prototype");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    setDeleting(true);
    setError(null);

    try {
      // Local development - direct file delete
      const res = await fetch("/api/delete-prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, slug: prototype.slug }),
      });
      if (!res.ok) {
        const text = await res.text();
        setError(text || "Failed to delete prototype");
      } else {
        setOpen(false);
        window.location.reload();
      }
    } catch {
      setError("Failed to delete prototype");
    } finally {
      setDeleting(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleSave(e);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        // Disable hover card while dialog is open
        hoverCardControl?.setDisabled(newOpen);
        if (newOpen) hoverCardControl?.close();
        setOpen(newOpen);
      }}
    >
      <DialogTrigger asChild>
        <PlaygroundIconButton
          variant="ghost"
          onClick={onClick}
          title="Edit prototype"
          tooltip="Edit"
        >
          <Icon icon={pencilIcon} color="inherit" />
        </PlaygroundIconButton>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogTitle>Edit {isExternal ? "External " : ""}Prototype</DialogTitle>
        <form
          onSubmit={handleSave}
          onKeyDown={handleKeyDown}
          className="flex flex-col gap-4"
        >
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="prototype-name"
            >
              Name
            </label>
            <PlaygroundInput
              id="prototype-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={1}
              disabled={loading}
              placeholder="Prototype name"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="prototype-description"
            >
              Description
            </label>
            <PlaygroundTextarea
              id="prototype-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              disabled={loading}
              placeholder="Description (optional)"
            />
          </div>
          {isExternal && (
            <div>
              <label
                className="mb-1 block text-xs font-medium"
                htmlFor="prototype-external-url"
              >
                External URL
              </label>
              <PlaygroundInput
                id="prototype-external-url"
                type="url"
                value={externalUrl}
                onChange={(e) => setExternalUrl(e.target.value)}
                required
                disabled={loading}
                placeholder="https://..."
              />
            </div>
          )}
          {error && <div className="text-sm text-red-600">{error}</div>}
          <div className="flex justify-end gap-1">
            <PlaygroundButton
              className="mr-auto"
              variant="destructive"
              type="button"
              onClick={handleDelete}
              disabled={loading || deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </PlaygroundButton>
            <DialogClose asChild>
              <PlaygroundButton
                variant="tint"
                type="button"
                disabled={loading || deleting}
              >
                Cancel
              </PlaygroundButton>
            </DialogClose>
            <PlaygroundButton
              variant="primary"
              type="submit"
              disabled={loading || !name.trim() || deleting}
            >
              {loading ? "Saving..." : "Save"}
            </PlaygroundButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function PrototypeItem({
  prototype,
  username,
  isCurrentUsers,
}: {
  prototype: Prototype;
  username: string;
  isCurrentUsers: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const { data } = useCurrentUser();
  const { gitStatus } = useGitStatus();
  const isProduction = useIsProduction();
  const allowFileOps = !isProduction;
  const hasLocalChanges = gitStatus[`${username}/${prototype.slug}`] || false;
  const cursorPath = data?.sourcePath
    ? `cursor://file//${data.sourcePath}/src/app/${username}/${prototype.slug}/page.tsx`
    : null;

  return (
    <li className="group relative flex-1">
      <Link
        draggable={false}
        className={cn(
          "group-hover:bg-secondary flex flex-1 rounded-lg p-2 text-sm font-medium",
          {
            "bg-white/10": loading,
          },
        )}
        href={`/${username}/${prototype.slug}`}
      >
        <span className="flex flex-wrap items-center">
          <span className="mr-2">{prototype.title}</span>
          <AnimatePresence>
            {hasLocalChanges && allowFileOps && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  mass: 0.5,
                }}
                className="mr-2"
              >
                <CustomTooltip content="Has local changes">
                  <motion.span
                    className="inline-flex h-2 w-2 rounded-full bg-amber-500"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </CustomTooltip>
              </motion.span>
            )}
          </AnimatePresence>
          {prototype.description && (
            <span className="text-secondary">{prototype.description}</span>
          )}
        </span>

        <span
          className={cn(
            "text-tertiary ml-auto pl-4 whitespace-nowrap select-none group-hover:opacity-0",
            {
              "opacity-0": loading,
            },
          )}
        >
          {formatDate(prototype.createdAt)}
        </span>
      </Link>

      {allowFileOps && (
        <div
          className={cn(
            "absolute top-1/2 right-2 z-20 hidden -translate-y-1/2 items-center gap-1 group-hover:flex",
            {
              flex: loading,
            },
          )}
        >
          {isCurrentUsers && (
            <EditPrototypeButton prototype={prototype} username={username} />
          )}
          <DuplicatePrototypeButton
            username={username}
            prototype={prototype}
            loading={loading}
            setLoading={setLoading}
          />
          {cursorPath && (
            <CustomTooltip content="Open in Cursor">
              <PlaygroundIconButton asChild>
                <a
                  href={cursorPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Cursor"
                >
                  <Icon icon={codeIcon} weight="bold" color="primary" />
                </a>
              </PlaygroundIconButton>
            </CustomTooltip>
          )}
        </div>
      )}
    </li>
  );
}

export function PrototypeSection({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <ul className="flex flex-1 flex-col gap-px">{children}</ul>
    </li>
  );
}
