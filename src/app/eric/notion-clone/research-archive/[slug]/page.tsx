"use client";

import { notFound, useParams } from "next/navigation";
import { DatabasePageView } from "../../components/DatabasePageView";
import { getResearchProperties, rows } from "../page";

export default function ResearchItemPage() {
  const { slug } = useParams<{ slug: string }>();
  const row = rows.find((r) => r.slug === slug);
  if (!row) return notFound();

  return (
    <DatabasePageView
      icon="📊"
      title={row.title}
      properties={getResearchProperties(row)}
      bodyStorageKey={`eric-nc-research-archive-${slug}`}
    />
  );
}
