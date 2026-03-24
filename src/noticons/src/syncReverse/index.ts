import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const syncReverseIconGroup: IconGroup<"default"> = createIconGroup(
  "syncReverse",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
