"use client";

import { useAnonymizeMode } from "@/hooks/useAnonymizeMode";
import { cn } from "@/utils/cn";
import * as Tooltip from "@base-ui/react/tooltip";
import Link from "next/link";
import {
  cloneElement,
  createContext,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { LoadingSquiggle } from "../ui/loading-squiggle";

// Payload type for prototype preview cards
export interface PrototypePreviewPayload {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  previewUrl?: string;
  externalUrl?: string;
}

type PreviewCardHandle = ReturnType<
  typeof Tooltip.Tooltip.createHandle<PrototypePreviewPayload>
>;

interface PreviewCardContextValue {
  handle: PreviewCardHandle;
  isTouchDevice: boolean;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

const PreviewCardContext = createContext<PreviewCardContextValue | null>(null);

function usePreviewCardContext() {
  const context = useContext(PreviewCardContext);
  if (!context) {
    throw new Error(
      "usePreviewCardContext must be used within a PrototypePreviewCardProvider",
    );
  }
  return context;
}

export function usePreviewCardHandle() {
  return usePreviewCardContext().handle;
}

export function usePreviewCardDisable() {
  const { setDisabled } = usePreviewCardContext();
  return setDisabled;
}

// Hook to detect touch/hover-less devices using useSyncExternalStore
const touchMediaQuery = "(hover: none)";

function subscribeTouchDevice(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(touchMediaQuery);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshotTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(touchMediaQuery).matches;
}

function getServerSnapshotTouchDevice() {
  return false; // Assume non-touch on server
}

function useIsTouchDevice() {
  return useSyncExternalStore(
    subscribeTouchDevice,
    getSnapshotTouchDevice,
    getServerSnapshotTouchDevice,
  );
}

interface PrototypePreviewCardProviderProps {
  children: ReactNode;
}

/**
 * Provider that renders a single shared preview card using Base UI Tooltip.
 * The tooltip follows the cursor and smoothly transitions between triggers.
 */
export function PrototypePreviewCardProvider({
  children,
}: PrototypePreviewCardProviderProps) {
  const handle = useMemo(
    () => Tooltip.Tooltip.createHandle<PrototypePreviewPayload>(),
    [],
  );
  const isTouchDevice = useIsTouchDevice();
  const [disabled, setDisabled] = useState(false);

  const contextValue = useMemo(
    () => ({ handle, isTouchDevice, disabled, setDisabled }),
    [handle, isTouchDevice, disabled],
  );

  return (
    <PreviewCardContext.Provider value={contextValue}>
      {children}
      <Tooltip.Tooltip.Root handle={handle}>
        {({ payload }) => (
          <Tooltip.Tooltip.Portal>
            <Tooltip.Tooltip.Positioner
              side="left"
              align="center"
              sideOffset={16}
              collisionPadding={20}
              collisionAvoidance={{ side: "flip", align: "shift" }}
              className="z-50"
            >
              <Tooltip.Tooltip.Popup
                className={cn(
                  "pointer-events-auto",
                  "bg-elevated text-primary dark:shadow-contrast",
                  "w-80 overflow-hidden rounded-3xl shadow-lg ring-[0.5px] ring-black/10 dark:border-0",
                  "origin-(--transform-origin)",
                  "transition-[transform,scale,opacity] duration-150",
                  "data-ending-style:scale-95 data-ending-style:opacity-0",
                  "data-starting-style:scale-95 data-starting-style:opacity-0",
                )}
              >
                {payload && (
                  <PrototypePreviewContent
                    name={payload.name}
                    description={payload.description}
                    createdAt={payload.createdAt}
                    updatedAt={payload.updatedAt}
                    previewUrl={payload.previewUrl}
                    externalUrl={payload.externalUrl}
                  />
                )}
              </Tooltip.Tooltip.Popup>
            </Tooltip.Tooltip.Positioner>
          </Tooltip.Tooltip.Portal>
        )}
      </Tooltip.Tooltip.Root>
    </PreviewCardContext.Provider>
  );
}

interface PreviewCardTriggerProps {
  payload: PrototypePreviewPayload;
  children: ReactNode;
  className?: string;
}

/**
 * Trigger component that shows the shared preview card on hover.
 * Uses the provided element as the tooltip trigger.
 */
export function PreviewCardTrigger({
  payload,
  children,
  className,
}: PreviewCardTriggerProps) {
  const { handle, isTouchDevice, disabled } = usePreviewCardContext();

  // On touch devices or when disabled, skip the tooltip trigger entirely
  if (isTouchDevice || disabled) {
    if (!isValidElement(children)) {
      return <span className={className}>{children}</span>;
    }

    if (!className) {
      return children;
    }

    if (children.type === Fragment) {
      return <span className={className}>{children}</span>;
    }

    return cloneElement(children as ReactElement<{ className?: string }>, {
      className: cn(
        (children.props as { className?: string }).className,
        className,
      ),
    });
  }

  if (!isValidElement(children)) {
    return (
      <Tooltip.Tooltip.Trigger
        handle={handle}
        payload={payload}
        delay={300}
        closeDelay={100}
        className={className}
        render={<span />}
      >
        {children}
      </Tooltip.Tooltip.Trigger>
    );
  }

  return (
    <Tooltip.Tooltip.Trigger
      handle={handle}
      payload={payload}
      delay={300}
      closeDelay={100}
      className={className}
      render={children}
    />
  );
}

// ============================================================================
// Preview content components
// ============================================================================

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function PrototypePreview({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // Show loading indicator after a short delay to avoid flash
  useEffect(() => {
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

interface PrototypePreviewContentProps {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  previewUrl?: string;
  externalUrl?: string;
}

function PrototypePreviewContent({
  name,
  description,
  createdAt,
  updatedAt,
  previewUrl,
  externalUrl,
}: PrototypePreviewContentProps) {
  const { enabled: anonymizeEnabled, obscure } = useAnonymizeMode();

  const displayName = obscure(name);
  const showPreview = previewUrl && !anonymizeEnabled;
  const showDescription = description && !anonymizeEnabled;
  const linkUrl = previewUrl ?? externalUrl;

  return (
    <div className="relative flex flex-col gap-3 p-3">
      {linkUrl && (
        <Link
          href={linkUrl}
          target="_blank"
          className="absolute inset-0 z-10"
        />
      )}
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

export { PrototypePreviewContent };
