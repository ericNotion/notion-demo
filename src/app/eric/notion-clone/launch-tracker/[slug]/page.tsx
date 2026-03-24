"use client";

import { DatabaseDetailPage } from "../../components/DatabaseDetailPage";
import { getLaunchProperties, rows } from "../page";

export default function LaunchItemPage() {
  return (
    <DatabaseDetailPage
      rows={rows}
      getTitle={(r) => r.name}
      getProperties={getLaunchProperties}
      icon="📄"
      bodyStorageKeyPrefix="eric-nc-launch-tracker"
    />
  );
}
