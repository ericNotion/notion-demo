import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const refreshReverseIconGroup: IconGroup<"default"> = createIconGroup(
  "refreshReverse",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
