"use client";

import {
  PlaygroundHoverCard,
  PlaygroundHoverCardContent,
  PlaygroundHoverCardTrigger,
  PrototypeHoverCardContent,
} from "@/components/playground-kit";
import { PlaygroundIconButton } from "@/components/playground-kit/icon-button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/nds-icons";
import { duplicateIcon } from "@/nds-icons/src/duplicate/default.icon";
import { Prototype } from "@/types/prototypes";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { forwardRef, useMemo } from "react";
import { useDuplicatePrototype } from "../lib/useDuplicatePrototype";

// Templates in this list appear first, in this exact order
const PINNED_TEMPLATE_SLUGS = [
  "notion-ui",
  "notion-desktop",
  "collections",
  "desktop",
];

function sortTemplates(templates: Prototype[]): Prototype[] {
  const pinnedMap = new Map(
    PINNED_TEMPLATE_SLUGS.map((slug, index) => [slug, index]),
  );

  return [...templates].sort((a, b) => {
    const aIndex = pinnedMap.get(a.slug);
    const bIndex = pinnedMap.get(b.slug);

    // Both are pinned: sort by pinned order
    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex - bIndex;
    }
    // Only a is pinned: a comes first
    if (aIndex !== undefined) return -1;
    // Only b is pinned: b comes first
    if (bIndex !== undefined) return 1;
    // Neither pinned: sort by createdAt (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function TemplatesGrid({
  templates,
  currentUsername,
}: {
  templates: Prototype[];
  currentUsername?: string;
}) {
  const sortedTemplates = useMemo(() => sortTemplates(templates), [templates]);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2">
      {sortedTemplates.map((template) => (
        <TemplateCard
          key={template.slug}
          template={template}
          currentUsername={currentUsername}
        />
      ))}
    </div>
  );
}

function TemplateCard({
  template,
  currentUsername,
}: {
  template: Prototype;
  currentUsername?: string;
}) {
  const { duplicate, loading } = useDuplicatePrototype({
    sourceUsername: "templates",
  });

  return (
    <PlaygroundHoverCard>
      <PlaygroundHoverCardTrigger>
        <TemplateCardInner
          template={template}
          currentUsername={currentUsername}
          loading={loading}
          onDuplicate={() => duplicate(template)}
        />
      </PlaygroundHoverCardTrigger>
      <PlaygroundHoverCardContent side="bottom" align="start">
        <PrototypeHoverCardContent
          name={template.title}
          description={template.description}
          createdAt={template.createdAt}
          updatedAt={template.updatedAt}
          previewUrl={`/templates/${template.slug}`}
        />
      </PlaygroundHoverCardContent>
    </PlaygroundHoverCard>
  );
}

interface TemplateCardInnerProps {
  template: Prototype;
  currentUsername?: string;
  loading: boolean;
  onDuplicate: () => void;
}

const TemplateCardInner = forwardRef<HTMLDivElement, TemplateCardInnerProps>(
  function TemplateCardInner(
    { template, currentUsername, loading, onDuplicate, ...props },
    ref,
  ) {
    const isHoverCardOpen =
      (props as Record<string, unknown>)["data-state"] === "open";

    return (
      <Card
        ref={ref}
        className={cn(
          "group/card border-secondary relative flex h-12 items-center gap-0 overflow-hidden rounded-2xl py-3 pr-1 pl-4",
          isHoverCardOpen ? "bg-secondary" : "hover:bg-secondary",
        )}
        {...props}
      >
        <Link
          href={`/templates/${template.slug}`}
          className="absolute inset-0 z-0"
        />

        {/* Card content */}
        <div className="min-w-0 truncate text-base font-medium">
          {template.title}
        </div>

        {currentUsername && (
          <PlaygroundIconButton
            tooltip="Duplicate template"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              onDuplicate();
            }}
            disabled={loading}
            className="fill-secondary hover:fill-primary invisible relative z-10 ml-auto group-hover/card:visible"
          >
            <Icon icon={duplicateIcon} weight="bold" color="inherit" />
          </PlaygroundIconButton>
        )}
      </Card>
    );
  },
);
