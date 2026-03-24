import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clearIconGroup: IconGroup<"default"> = createIconGroup(
  "clear",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
