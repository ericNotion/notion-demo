import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const vacuumCleanerIconGroup: IconGroup<"default"> = createIconGroup(
  "vacuumCleaner",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
