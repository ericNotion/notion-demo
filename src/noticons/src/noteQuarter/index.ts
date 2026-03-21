import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteQuarterIconGroup: IconGroup<"default"> = createIconGroup(
  "noteQuarter",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
