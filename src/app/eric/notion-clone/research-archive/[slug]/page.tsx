"use client";

import { DatabaseDetailPage } from "../../components/DatabaseDetailPage";
import { getResearchProperties, rows } from "../page";

export default function ResearchItemPage() {
  return (
    <DatabaseDetailPage
      rows={rows}
      getTitle={(r) => r.title}
      getProperties={getResearchProperties}
      icon="📊"
      bodyStorageKeyPrefix="eric-nc-research-archive"
    />
  );
}
