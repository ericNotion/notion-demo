import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const badgeIconGroup: IconGroup<"default"> = createIconGroup(
  "badge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
