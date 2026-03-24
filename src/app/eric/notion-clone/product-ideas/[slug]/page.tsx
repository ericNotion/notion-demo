"use client";

import { DatabaseDetailPage } from "../../components/DatabaseDetailPage";
import { getIdeaProperties, rows } from "../page";

export default function IdeaItemPage() {
  return (
    <DatabaseDetailPage
      rows={rows}
      getTitle={(r) => r.title}
      getProperties={getIdeaProperties}
      icon="💡"
      bodyStorageKeyPrefix="eric-nc-product-ideas"
    />
  );
}
