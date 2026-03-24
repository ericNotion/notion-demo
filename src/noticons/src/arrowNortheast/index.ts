import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowNortheastIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowNortheast",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
