"use client";

import { notFound, useParams } from "next/navigation";
import { DatabasePageView } from "./DatabasePageView";
import type { PageProperty } from "./PagePeekModal";

interface DatabaseDetailPageProps<T extends { slug: string }> {
  rows: T[];
  getTitle: (row: T) => string;
  getProperties: (row: T) => PageProperty[];
  icon: string;
  bodyStorageKeyPrefix: string;
}

export function DatabaseDetailPage<T extends { slug: string }>({
  rows,
  getTitle,
  getProperties,
  icon,
  bodyStorageKeyPrefix,
}: DatabaseDetailPageProps<T>) {
  const { slug } = useParams<{ slug: string }>();
  const row = rows.find((r) => r.slug === slug);
  if (!row) return notFound();

  return (
    <DatabasePageView
      icon={icon}
      title={getTitle(row)}
      properties={getProperties(row)}
      bodyStorageKey={`${bodyStorageKeyPrefix}-${slug}`}
    />
  );
}
