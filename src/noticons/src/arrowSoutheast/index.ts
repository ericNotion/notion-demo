import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowSoutheastIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowSoutheast",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
