// @ts-nocheck - Share token dialog uses stubs in this fork
"use client";

import {
  PlaygroundButton,
  PlaygroundDialog,
  PlaygroundDialogContent,
  PlaygroundDialogDescription,
  PlaygroundDialogTitle,
  PlaygroundDialogTrigger,
  PlaygroundIconButton,
  PlaygroundInput,
  useHoverCardControl,
  usePreviewCardDisable,
} from "@/components/playground-kit";
import { checkmarkIcon } from "@/nds-icons/src/checkmark/default.icon";
import { duplicateIcon } from "@/nds-icons/src/duplicate/default.icon";
import { squareAndArrowUpIcon } from "@/nds-icons/src/squareAndArrowUp/default.icon";
import { trashIcon } from "@/nds-icons/src/trash/default.icon";
import { Prototype } from "@/types/prototypes";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { useState } from "react";
type ShareTokenRecord = {
  id: string;
  token: string;
  prototypeId: string;
  prototypePath: string;
  name: string;
  shareUrl: string;
  expiresAt: string | null;
  createdAt: string;
};

const DURATION_OPTIONS = [
  { label: "1 day", days: 1 },
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
] as const;

function formatExpiry(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  if (date < now) return "Expired";
  const days = Math.ceil(
    (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (days <= 1) return "Expires tomorrow";
  return `Expires in ${days} days`;
}

function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <PlaygroundIconButton
      variant="ghost"
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy link"}
      className="shrink-0"
    >
      <Icon
        icon={copied ? checkmarkIcon : duplicateIcon}
        color="inherit"
        weight="bold"
      />
    </PlaygroundIconButton>
  );
}

function TokenRow({
  token,
  onRevoked,
}: {
  token: ShareTokenRecord;
  onRevoked: () => void;
}) {
  const [confirming, setConfirming] = useState(false);
  const [revoking, setRevoking] = useState(false);

  async function handleRevoke() {
    setRevoking(true);
    try {
      const res = await fetch("/api/share-tokens", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: token.id }),
      });
      if (res.ok) {
        onRevoked();
      }
    } catch {
      // Non-critical
    } finally {
      setRevoking(false);
      setConfirming(false);
    }
  }

  return (
    <div className="flex min-w-0 items-center gap-2 py-1">
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-medium">
          {token.name || token.prototypePath}
        </p>
        <p className="text-tertiary text-sm">{formatExpiry(token.expiresAt)}</p>
      </div>
      {confirming ? (
        <div className="flex shrink-0 items-center gap-1">
          <PlaygroundButton
            variant="ghost"
            size="sm"
            onClick={() => setConfirming(false)}
            disabled={revoking}
          >
            Cancel
          </PlaygroundButton>
          <PlaygroundButton
            variant="destructive"
            size="sm"
            onClick={handleRevoke}
            disabled={revoking}
          >
            {revoking ? "Revoking..." : "Revoke"}
          </PlaygroundButton>
        </div>
      ) : (
        <div className="flex shrink-0 items-center gap-0.5">
          <CopyLinkButton url={token.shareUrl} />
          <PlaygroundIconButton
            variant="ghost"
            onClick={() => setConfirming(true)}
            title="Revoke link"
            className="shrink-0"
          >
            <Icon icon={trashIcon} color="inherit" />
          </PlaygroundIconButton>
        </div>
      )}
    </div>
  );
}

export function SharePrototypeButton({
  prototype,
  username,
}: {
  prototype: Prototype;
  username: string;
}) {
  const [open, setOpen] = useState(false);
  const hoverCardControl = useHoverCardControl();
  const setPreviewCardDisabled = usePreviewCardDisable();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [existingTokens, setShareTokenRecords] = useState<ShareTokenRecord[]>(
    [],
  );
  const [selectedDays, setSelectedDays] = useState(7);
  const [name, setName] = useState("");

  const prototypePath = `${username}/${prototype.slug}`;

  async function loadShareTokenRecords() {
    try {
      const res = await fetch(
        `/api/share-tokens?path=${encodeURIComponent(prototypePath)}`,
      );
      if (res.ok) {
        const data = await res.json();
        setShareTokenRecords(
          data.tokens.filter(
            (t: ShareTokenRecord) => new Date(t.expiresAt) > new Date(),
          ),
        );
      }
    } catch {
      // Non-critical
    }
  }

  async function handleCreate() {
    setLoading(true);
    setError(null);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + selectedDays);

    try {
      const res = await fetch("/api/share-tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prototypePath,
          expiresAt: expiresAt.toISOString(),
          name: name.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create share link");
        return;
      }

      const { url } = await res.json();
      await navigator.clipboard.writeText(url);
      setName("");
      await loadShareTokenRecords();
    } catch {
      setError("Failed to create share link");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenChange(newOpen: boolean) {
    hoverCardControl?.setDisabled(newOpen);
    setPreviewCardDisabled(newOpen);
    if (newOpen) {
      hoverCardControl?.close();
      setError(null);
      setName("");
      loadShareTokenRecords();
    }
    setOpen(newOpen);
  }

  return (
    <PlaygroundDialog open={open} onOpenChange={handleOpenChange}>
      <PlaygroundDialogTrigger asChild>
        <PlaygroundIconButton variant="ghost" title="Share prototype">
          <Icon icon={squareAndArrowUpIcon} color="inherit" />
        </PlaygroundIconButton>
      </PlaygroundDialogTrigger>
      <PlaygroundDialogContent
        showCloseButton={false}
        className="max-w-md gap-6 overflow-hidden"
      >
        <div className="flex flex-col gap-2">
          <PlaygroundDialogTitle>Share prototype</PlaygroundDialogTitle>
          <PlaygroundDialogDescription
            className={cn(existingTokens.length > 0 && "sr-only")}
          >
            Create a time-limited link for external participants.
          </PlaygroundDialogDescription>
        </div>

        {existingTokens.length > 0 && (
          <div className="bg-secondary dark:bg-tertiary flex flex-col gap-px rounded-xl px-6 py-5">
            {existingTokens.map((token) => (
              <TokenRow
                key={token.id}
                token={token}
                onRevoked={loadShareTokenRecords}
              />
            ))}
          </div>
        )}

        <div
          className={cn("flex flex-col gap-5", {
            "bg-secondary dark:bg-tertiary rounded-xl px-6 pt-5 pb-6":
              !!existingTokens.length,
          })}
        >
          {!!existingTokens.length && (
            <span className="text-primary text-lg font-medium">Create new</span>
          )}
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="share-name"
            >
              Name (optional)
            </label>
            <PlaygroundInput
              id="share-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. UXR participant batch 1"
              disabled={loading}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Expires after
            </label>
            <div className="flex gap-1.5">
              {DURATION_OPTIONS.map((opt) => (
                <PlaygroundButton
                  key={opt.days}
                  type="button"
                  variant={selectedDays === opt.days ? "default" : "tint"}
                  onClick={() => setSelectedDays(opt.days)}
                  disabled={loading}
                  className="flex-1"
                >
                  {opt.label}
                </PlaygroundButton>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-1">
            <PlaygroundButton
              variant="primary"
              type="button"
              fullWidth
              onClick={handleCreate}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create link"}
            </PlaygroundButton>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
      </PlaygroundDialogContent>
    </PlaygroundDialog>
  );
}
