import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const reorderIconGroup: IconGroup<"default"> = createIconGroup(
  "reorder",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
