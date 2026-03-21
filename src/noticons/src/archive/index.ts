import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const archiveIconGroup: IconGroup<"default"> = createIconGroup(
  "archive",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
