import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const newBadgeIconGroup: IconGroup<"default"> = createIconGroup(
  "newBadge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
