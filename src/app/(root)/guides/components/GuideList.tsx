"use client";

import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import type { Guide } from "@/lib/notion";
import { isDevelopment } from "@/utils/env";
import Image from "next/image";
import Link from "next/link";

interface GuideListProps {
  guides: Guide[];
}

export function GuideList({ guides }: GuideListProps) {
  const isProduction = useIsProduction();

  // In development (not simulating production), hide the "getting-started" guide
  const filteredGuides =
    isDevelopment() && !isProduction
      ? guides.filter((guide) => guide.slug !== "getting-started")
      : guides;

  if (filteredGuides.length === 0) {
    return (
      <div className="text-secondary py-8 text-center">
        No guides published yet.
      </div>
    );
  }

  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2 @4xl:grid-cols-3">
        {filteredGuides.map((guide) => {
          const { headerImageLight, headerImageDark } = guide;
          const hasImages = headerImageLight && headerImageDark;

          return (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="bg-elevated group ring-px flex flex-col overflow-hidden rounded-2xl ring ring-black/5 transition-shadow hover:shadow-sm dark:bg-black dark:ring-white/10"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                {hasImages ? (
                  <>
                    <Image
                      src={headerImageLight}
                      alt={guide.title}
                      width={640}
                      height={360}
                      className="size-full object-cover dark:hidden"
                      unoptimized
                    />
                    <Image
                      src={headerImageDark}
                      alt={guide.title}
                      width={640}
                      height={360}
                      className="hidden size-full object-cover dark:block"
                      unoptimized
                    />
                  </>
                ) : (
                  <div className="bg-secondary size-full" />
                )}
              </div>
              <div className="flex flex-col gap-2 p-5 pt-0 text-center">
                <h2 className="text-primary group-hover:text-accent text-lg leading-tight font-semibold">
                  {guide.title}
                </h2>
                {guide.description && (
                  <p className="text-secondary line-clamp-2 text-base">
                    {guide.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
