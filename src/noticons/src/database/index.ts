import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const databaseIconGroup: IconGroup<"default"> = createIconGroup(
  "database",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
