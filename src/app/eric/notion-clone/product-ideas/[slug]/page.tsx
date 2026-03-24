"use client";

import { notFound, useParams } from "next/navigation";
import { DatabasePageView } from "../../components/DatabasePageView";
import { getIdeaProperties, rows } from "../page";

export default function IdeaItemPage() {
  const { slug } = useParams<{ slug: string }>();
  const row = rows.find((r) => r.slug === slug);
  if (!row) return notFound();

  return (
    <DatabasePageView
      icon="💡"
      title={row.title}
      properties={getIdeaProperties(row)}
      bodyStorageKey={`eric-nc-product-ideas-${slug}`}
    />
  );
}
