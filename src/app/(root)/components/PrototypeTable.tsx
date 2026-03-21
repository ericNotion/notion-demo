"use client";

import { TableRow } from "@/app/(root)/components/TableRow";
import { useCurrentUser } from "@/app/(root)/lib/useCurrentUser";
import {
  PlaygroundIconButton,
  PreviewCardTrigger,
  PrototypePreviewCardProvider,
  type PrototypePreviewPayload,
} from "@/components/playground-kit";
import CustomTooltip from "@/components/ui/tooltip";
import { useAnonymizeMode } from "@/hooks/useAnonymizeMode";
import { useGitStatus } from "@/hooks/useGitStatus";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { arrowUpRightSquareIcon } from "@/nds-icons/src/arrowUpRightSquare/default.icon";
import { codeIcon } from "@/nds-icons/src/code/default.icon";
import {
  AddVersionButton,
  DuplicatePrototypeButton,
  EditPrototypeButton,
} from "@/root/components/IndexPage";
import { SharePrototypeButton } from "@/root/components/SharePrototypeDialog";
import { VersionBadge } from "@/root/components/VersionBadge";
import { Prototype } from "@/types/prototypes";
import { cn } from "@/utils/cn";
import { getMonthLabel, sortMonthGroups } from "@/utils/dateGroups";
import { searchPrototypes } from "@/utils/searchPrototypes";
import {
  getVersionCount,
  getVersionsForPrototype,
} from "@/utils/versionGrouping";
import { Icon } from "@nds-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type PrototypeWithAuthor = Prototype & { username: string };

type DateGroup = {
  label: string;
  prototypes: PrototypeWithAuthor[];
};

export function PrototypeTable({
  prototypes,
  allPrototypes,
  currentUsername,
  searchQuery,
  onUsernameClick,
}: {
  prototypes: PrototypeWithAuthor[];
  allPrototypes: PrototypeWithAuthor[];
  currentUsername?: string;
  searchQuery: string;
  onUsernameClick?: (username: string) => void;
}) {
  const { gitStatus } = useGitStatus();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleExpanded = (versionGroupId: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(versionGroupId)) {
        next.delete(versionGroupId);
      } else {
        next.add(versionGroupId);
      }
      return next;
    });
  };

  const filteredAndGroupedPrototypes = useMemo(() => {
    // Apply weighted search first
    const filtered = searchPrototypes(prototypes, searchQuery);

    // Then group by date
    const groups = new Map<string, DateGroup>();

    filtered.forEach((proto) => {
      // Use the appropriate date for grouping based on sort field
      const dateForGrouping = proto.updatedAt || proto.createdAt;
      const label = getMonthLabel(dateForGrouping);
      if (!groups.has(label)) {
        groups.set(label, { label, prototypes: [] });
      }
      groups.get(label)!.prototypes.push(proto);
    });

    // Convert to array and sort groups
    const groupsArray = Array.from(groups.values());
    groupsArray.sort(sortMonthGroups);

    // Note: Prototypes are already sorted by relevance + date from searchPrototypes
    // so we don't re-sort within groups to preserve search ranking

    return groupsArray;
  }, [prototypes, searchQuery]);

  if (filteredAndGroupedPrototypes.length === 0) {
    return (
      <div className="text-secondary py-8 text-center">
        {searchQuery
          ? "No prototypes found matching your search."
          : "No prototypes yet."}
      </div>
    );
  }

  return (
    <PrototypePreviewCardProvider>
      <div className="flex flex-col">
        {filteredAndGroupedPrototypes.map((group) => (
          <div key={group.label} className="mb-10">
            <h3 className="text-tertiary mb-2 px-1 text-base font-medium">
              {group.label}
            </h3>
            <div className="flex flex-col">
              {group.prototypes.map((proto) => {
                const versionGroupId =
                  proto.versionGroupId || `${proto.username}/${proto.slug}`;
                const versionCount = getVersionCount(proto, allPrototypes);
                const hasMultipleVersions = versionCount > 1;
                const isExpanded = expandedGroups.has(versionGroupId);

                // Get older versions when expanded
                const olderVersions =
                  isExpanded && hasMultipleVersions
                    ? getVersionsForPrototype(proto, allPrototypes).slice(1) // Skip the latest (first)
                    : [];

                return (
                  <div key={`${proto.username}-${proto.slug}`}>
                    <PrototypeRow
                      prototype={proto}
                      currentUsername={currentUsername}
                      hasLocalChanges={
                        gitStatus[`${proto.username}/${proto.slug}`] || false
                      }
                      onUsernameClick={onUsernameClick}
                      totalVersions={versionCount}
                      hasMultipleVersions={hasMultipleVersions}
                      onToggleExpand={() => toggleExpanded(versionGroupId)}
                    />
                    {/* Older versions - expanded inline */}
                    <AnimatePresence>
                      {isExpanded && olderVersions.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {olderVersions.map((oldProto) => (
                            <OlderVersionRow
                              key={`${oldProto.username}-${oldProto.slug}`}
                              prototype={oldProto}
                              currentUsername={currentUsername}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PrototypePreviewCardProvider>
  );
}

/**
 * Shared hook for prototype row logic
 */
function usePrototypeRowState(
  prototype: PrototypeWithAuthor,
  currentUsername?: string,
) {
  const [loading, setLoading] = useState(false);
  const { data } = useCurrentUser();
  const isProduction = useIsProduction();
  const allowFileOps = !isProduction;
  const { enabled: anonymizeEnabled, obscure } = useAnonymizeMode();

  const isCurrentUsers = prototype.username === currentUsername;
  const isExternal = Boolean(prototype.externalUrl);
  const displayTitle = obscure(prototype.title);
  const prototypeUrl = `/${prototype.username}/${prototype.slug}`;

  const cursorPath =
    !isExternal && data?.sourcePath
      ? `cursor://file//${data.sourcePath}/src/app/${prototype.username}/${prototype.slug}/page.tsx`
      : null;

  function handleExternalClick() {
    if (prototype.externalUrl) {
      window.open(prototype.externalUrl, "_blank", "noopener,noreferrer");
    }
  }

  return {
    loading,
    setLoading,
    isProduction,
    allowFileOps,
    anonymizeEnabled,
    isCurrentUsers,
    isExternal,
    displayTitle,
    prototypeUrl,
    cursorPath,
    handleExternalClick,
  };
}

/**
 * Shared action buttons for prototype rows
 */
function PrototypeRowActions({
  prototype,
  isCurrentUsers,
  isExternal,
  cursorPath,
  loading,
  setLoading,
}: {
  prototype: PrototypeWithAuthor;
  isCurrentUsers: boolean;
  isExternal: boolean;
  cursorPath: string | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}) {
  return (
    <>
      {isCurrentUsers && (
        <EditPrototypeButton
          prototype={prototype}
          username={prototype.username}
        />
      )}
      {/* AddVersionButton handles both local and external prototypes */}
      {isCurrentUsers ? (
        <AddVersionButton username={prototype.username} prototype={prototype} />
      ) : (
        // Only show duplicate for non-external prototypes
        !isExternal && (
          <DuplicatePrototypeButton
            username={prototype.username}
            prototype={prototype}
            loading={loading}
            setLoading={setLoading}
          />
        )
      )}
      {!isExternal && cursorPath && (
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
    </>
  );
}

function PrototypeRow({
  prototype,
  currentUsername,
  hasLocalChanges,
  onUsernameClick,
  totalVersions,
  hasMultipleVersions,
  onToggleExpand,
}: {
  prototype: PrototypeWithAuthor;
  currentUsername?: string;
  hasLocalChanges: boolean;
  onUsernameClick?: (username: string) => void;
  totalVersions?: number;
  hasMultipleVersions?: boolean;
  onToggleExpand?: () => void;
}) {
  const {
    loading,
    setLoading,
    isProduction,
    allowFileOps,
    anonymizeEnabled,
    isCurrentUsers,
    isExternal,
    displayTitle,
    prototypeUrl,
    cursorPath,
    handleExternalClick,
  } = usePrototypeRowState(prototype, currentUsername);

  // Build payload for the preview card
  const previewPayload: PrototypePreviewPayload = {
    id: `${prototype.username}/${prototype.slug}`,
    name: prototype.title,
    description: prototype.description,
    createdAt: prototype.createdAt,
    updatedAt: prototype.updatedAt,
    previewUrl: isExternal ? undefined : prototypeUrl,
    externalUrl: prototype.externalUrl,
  };

  const actions = (
    <>
      {allowFileOps && (
        <PrototypeRowActions
          prototype={prototype}
          isCurrentUsers={isCurrentUsers}
          isExternal={isExternal}
          cursorPath={cursorPath}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {isProduction && (
        <SharePrototypeButton
          prototype={prototype}
          username={prototype.username}
        />
      )}
    </>
  );

  return (
    <div className="group/row hover:bg-secondary data-[state=open]:bg-secondary relative -mx-3 rounded-full px-4">
      <PreviewCardTrigger payload={previewPayload}>
        <TableRow
          href={isExternal ? undefined : prototypeUrl}
          onClick={isExternal ? handleExternalClick : undefined}
        >
          <div className="flex items-center">
            {isExternal && (
              <Icon
                icon={arrowUpRightSquareIcon}
                color="secondary"
                className="mr-1.5"
              />
            )}
            <span
              className={cn(
                "mr-2 font-medium select-none",
                anonymizeEnabled ? "text-lg" : "text-base",
              )}
            >
              {displayTitle}
            </span>
            {hasMultipleVersions && prototype.version && (
              <VersionBadge
                version={prototype.version}
                totalVersions={totalVersions}
                className="mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onToggleExpand?.();
                }}
              />
            )}
            <AnimatePresence>
              {hasLocalChanges && allowFileOps && (
                <motion.span
                  className="pointer-events-auto absolute -left-5 z-10 origin-right"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    mass: 0.5,
                  }}
                >
                  <CustomTooltip content="Has local changes">
                    <motion.span className="inline-flex h-2 w-2 rounded-full bg-amber-500 ring-[4px] ring-white dark:ring-neutral-900" />
                  </CustomTooltip>
                </motion.span>
              )}
            </AnimatePresence>
            <button
              type="button"
              className="text-tertiary hover:text-primary pointer-events-auto z-10 cursor-pointer text-base"
              onClick={(e) => {
                e.stopPropagation();
                onUsernameClick?.(prototype.username);
              }}
            >
              {prototype.username}
            </button>
          </div>
        </TableRow>
      </PreviewCardTrigger>

      {actions && (
        <div
          className={cn(
            "via-secondary to-secondary pointer-events-none absolute top-1/2 right-1.5 z-10 w-[70%] -translate-y-1/2 items-center justify-end rounded-full bg-linear-to-r from-transparent from-0% via-70%",
            "hidden group-hover/row:flex",
          )}
        >
          <div className="pointer-events-auto flex items-center gap-0.5">
            {actions}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Row for older versions in an expanded group
 */
function OlderVersionRow({
  prototype,
  currentUsername,
}: {
  prototype: PrototypeWithAuthor;
  currentUsername?: string;
}) {
  const {
    loading,
    setLoading,
    isProduction,
    allowFileOps,
    anonymizeEnabled,
    isCurrentUsers,
    isExternal,
    displayTitle,
    prototypeUrl,
    cursorPath,
    handleExternalClick,
  } = usePrototypeRowState(prototype, currentUsername);

  // Build payload for the preview card
  const previewPayload: PrototypePreviewPayload = {
    id: `${prototype.username}/${prototype.slug}`,
    name: prototype.title,
    description: prototype.description,
    createdAt: prototype.createdAt,
    updatedAt: prototype.updatedAt,
    previewUrl: isExternal ? undefined : prototypeUrl,
    externalUrl: prototype.externalUrl,
  };

  const actions = (
    <>
      {allowFileOps && (
        <PrototypeRowActions
          prototype={prototype}
          isCurrentUsers={isCurrentUsers}
          isExternal={isExternal}
          cursorPath={cursorPath}
          loading={loading}
          setLoading={setLoading}
        />
      )}
      {isProduction && (
        <SharePrototypeButton
          prototype={prototype}
          username={prototype.username}
        />
      )}
    </>
  );

  return (
    <div className="group/row hover:bg-secondary data-[state=open]:bg-secondary relative -mx-3 rounded-full px-4">
      <PreviewCardTrigger payload={previewPayload}>
        <TableRow
          href={isExternal ? undefined : prototypeUrl}
          onClick={isExternal ? handleExternalClick : undefined}
        >
          <div className="flex items-center">
            {isExternal && (
              <Icon
                icon={arrowUpRightSquareIcon}
                color="secondary"
                className="mr-1.5"
              />
            )}
            <span
              className={cn(
                "mr-2 font-medium select-none",
                anonymizeEnabled ? "text-lg" : "text-base",
              )}
            >
              {displayTitle}
            </span>
            {prototype.version !== undefined && (
              <VersionBadge
                version={prototype.version}
                className="mr-2"
                forceShow
              />
            )}
            <span className="text-tertiary text-base">
              {prototype.username}
            </span>
          </div>
        </TableRow>
      </PreviewCardTrigger>
      {actions && (
        <div
          className={cn(
            "via-secondary to-secondary pointer-events-none absolute top-1/2 right-1.5 z-10 w-[70%] -translate-y-1/2 items-center justify-end rounded-full bg-linear-to-r from-transparent from-0% via-70%",
            "hidden group-hover/row:flex",
          )}
        >
          <div className="pointer-events-auto flex items-center gap-0.5">
            {actions}
          </div>
        </div>
      )}
    </div>
  );
}
