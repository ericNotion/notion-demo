"use client";

import { useCurrentUsername } from "@/app/(root)/lib/useCurrentUser";
import {
  PlaygroundButton,
  PlaygroundDialog,
  PlaygroundDialogClose,
  PlaygroundDialogContent,
  PlaygroundDialogTitle,
  PlaygroundInput,
  PlaygroundTextarea,
} from "@/components/playground-kit";
import { createPrototypeDialogOpenAtom } from "@/root/atoms/createPrototypeDialogOpenAtom";
import { slugify } from "@/utils/slugify";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function CreatePrototypeDialog() {
  const [open, setOpen] = useAtom(createPrototypeDialogOpenAtom);
  const { username } = useCurrentUsername();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      setName("");
      setDescription("");
      setError(null);
    }
  }, [open]);

  async function handleCreate(e?: React.FormEvent | React.KeyboardEvent) {
    if (e) e.preventDefault();
    if (!username) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-prototype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prototypeName: name }),
      });
      if (!res.ok) {
        const text = await res.text();
        setError(text || "Failed to create prototype");
        setLoading(false);
        return;
      }
      const slug = slugify(name);
      if (description.trim() !== "") {
        await fetch("/api/edit-prototype", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            oldSlug: slug,
            name,
            description,
          }),
        });
      }
      setOpen(false);
      const newUrl = `/${username}/${slug}`;
      let tries = 0;
      const maxTries = 10;
      const delay = 200;
      while (tries < maxTries) {
        const headRes = await fetch(newUrl, { method: "HEAD" });
        if (headRes.ok) break;
        await new Promise((resolve) => setTimeout(resolve, delay));
        tries += 1;
      }
      router.push(newUrl);
    } catch {
      setError("Failed to create prototype");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleCreate(e);
    }
  }

  return (
    <PlaygroundDialog open={open} onOpenChange={setOpen}>
      <PlaygroundDialogContent showCloseButton={false} className="max-w-md">
        <PlaygroundDialogTitle>New Prototype</PlaygroundDialogTitle>
        <form
          onSubmit={handleCreate}
          onKeyDown={handleKeyDown}
          className="flex flex-col gap-4"
        >
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="new-prototype-name"
            >
              Name
            </label>
            <PlaygroundInput
              id="new-prototype-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={1}
              disabled={loading || !username}
              placeholder="Name"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-sm font-medium"
              htmlFor="new-prototype-description"
            >
              Description
            </label>
            <PlaygroundTextarea
              id="new-prototype-description"
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
              <PlaygroundButton variant="tint" type="button" disabled={loading}>
                Cancel
              </PlaygroundButton>
            </PlaygroundDialogClose>
            <PlaygroundButton
              variant="primary"
              type="submit"
              disabled={loading || !name.trim() || !username}
            >
              {loading ? "Creating..." : "Create"}
            </PlaygroundButton>
          </div>
        </form>
      </PlaygroundDialogContent>
    </PlaygroundDialog>
  );
}
