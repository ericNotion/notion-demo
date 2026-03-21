"use client";

import {
  HoverCardContent as BaseHoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useAnonymizeMode } from "@/hooks/useAnonymizeMode";
import { cn } from "@/utils/cn";
import Link from "next/link";
import * as React from "react";
import { LoadingSquiggle } from "../ui/loading-squiggle";

// Context to allow children to close and disable the hover card
interface HoverCardContextValue {
  close: () => void;
  setDisabled: (disabled: boolean) => void;
}

const HoverCardContext = React.createContext<HoverCardContextValue | null>(
  null,
);

export function useHoverCardControl() {
  return React.useContext(HoverCardContext);
}

/** @deprecated Use useHoverCardControl instead */
function useCloseHoverCard() {
  const ctx = React.useContext(HoverCardContext);
  return ctx?.close ?? null;
}

interface PlaygroundHoverCardProps {
  children: React.ReactNode;
  openDelay?: number;
  closeDelay?: number;
}

function PlaygroundHoverCard({
  children,
  openDelay = 300,
  closeDelay = 100,
}: PlaygroundHoverCardProps) {
  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  const contextValue = React.useMemo<HoverCardContextValue>(
    () => ({
      close: () => setOpen(false),
      setDisabled,
    }),
    [],
  );

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      // Prevent opening when disabled
      if (disabled && newOpen) return;
      setOpen(newOpen);
    },
    [disabled],
  );

  return (
    <HoverCardContext.Provider value={contextValue}>
      <HoverCardRoot
        open={open}
        onOpenChange={handleOpenChange}
        openDelay={openDelay}
        closeDelay={closeDelay}
      >
        {children}
      </HoverCardRoot>
    </HoverCardContext.Provider>
  );
}

function PlaygroundHoverCardTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HoverCardTrigger asChild>{children}</HoverCardTrigger>;
}

function PlaygroundHoverCardContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BaseHoverCardContent>) {
  return (
    <BaseHoverCardContent
      className={cn("rounded-3xl", className)}
      side="top"
      align="start"
      sideOffset={8}
      {...props}
    >
      {children}
    </BaseHoverCardContent>
  );
}

interface PrototypeHoverCardContentProps {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  previewUrl?: string;
  externalUrl?: string;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function PrototypePreview({ url }: { url: string }) {
  const [loaded, setLoaded] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);

  React.useEffect(() => {
    if (loaded) return;
    const timer = setTimeout(() => setShowLoading(true), 300);
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <div className="bg-tertiary relative z-20 aspect-[4/3] w-full overflow-hidden rounded-xl ring-[0.5px] ring-black/10 dark:ring-white/10">
      {!loaded && showLoading && (
        <div className="absolute inset-0 flex scale-150 items-center justify-center">
          <LoadingSquiggle />
        </div>
      )}
      <iframe
        src={url}
        className={cn(
          "h-[900px] w-[1200px] origin-top-left scale-[0.25] border-0",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setLoaded(true)}
        title="Prototype preview"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function PrototypeHoverCardContent({
  name,
  description,
  createdAt,
  updatedAt,
  previewUrl,
  externalUrl,
}: PrototypeHoverCardContentProps) {
  const { enabled: anonymizeEnabled, obscure } = useAnonymizeMode();

  const displayName = obscure(name);
  const showPreview = previewUrl && !anonymizeEnabled;
  const showDescription = description && !anonymizeEnabled;

  return (
    <div className="relative flex w-80 flex-col gap-3 p-3">
      <Link
        href={previewUrl ?? externalUrl ?? ""}
        target="_blank"
        className="absolute inset-0 z-10"
      />
      {showPreview && <PrototypePreview url={previewUrl} />}
      <div className="px-1">
        <h4
          className={cn(
            "text-primary font-semibold",
            anonymizeEnabled ? "text-lg" : "text-base",
          )}
        >
          {displayName}
        </h4>
        {showDescription && (
          <p className="text-secondary mt-1 line-clamp-3 text-sm">
            {description}
          </p>
        )}
        {externalUrl && (
          <p className="text-tertiary mt-1 text-sm">{getDomain(externalUrl)}</p>
        )}
        <div className="border-secondary mt-3 flex flex-col gap-1 border-t pt-3">
          <div className="flex items-center justify-between font-mono text-[13px]">
            <span className="text-tertiary">Created</span>
            <span className="text-secondary">{formatDate(createdAt)}</span>
          </div>
          {updatedAt && updatedAt !== createdAt && (
            <div className="flex items-center justify-between font-mono text-[13px]">
              <span className="text-tertiary">Modified</span>
              <span className="text-secondary">{formatDate(updatedAt)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export {
  PlaygroundHoverCard,
  PlaygroundHoverCardContent,
  PlaygroundHoverCardTrigger,
  PrototypeHoverCardContent,
};
