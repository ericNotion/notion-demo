"use client";

import type { Guide } from "@/lib/notion";
import Link from "next/link";

interface GuidesGridProps {
  guides: Guide[];
}

export function GuidesGrid({ guides }: GuidesGridProps) {
  if (guides.length === 0) {
    return (
      <div className="text-tertiary py-8 text-center text-sm">
        No guides published yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <Link
          key={guide.id}
          href={`/guides/${guide.slug}`}
          className="bg-secondary hover:bg-tertiary group flex flex-col gap-1 rounded-lg p-3 transition-colors"
        >
          <h3 className="text-primary group-hover:text-accent-blue text-sm font-medium transition-colors">
            {guide.title}
          </h3>
          {guide.description && (
            <p className="text-tertiary line-clamp-2 text-xs">
              {guide.description}
            </p>
          )}
        </Link>
      ))}

      {/* View all link */}
      <Link
        href="/guides"
        className="text-tertiary hover:text-secondary flex items-center justify-center rounded-lg border border-dashed border-current p-3 text-sm transition-colors"
      >
        View all guides &rarr;
      </Link>
    </div>
  );
}
