"use client";

import { notFound, useParams } from "next/navigation";
import { DatabasePageView } from "../../components/DatabasePageView";
import { getLaunchProperties, rows } from "../page";

export default function LaunchItemPage() {
  const { slug } = useParams<{ slug: string }>();
  const row = rows.find((r) => r.slug === slug);
  if (!row) return notFound();

  return (
    <DatabasePageView
      icon="📄"
      title={row.name}
      properties={getLaunchProperties(row)}
      bodyStorageKey={`eric-nc-launch-tracker-${slug}`}
    />
  );
}
