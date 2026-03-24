import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowsHorizontalIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowsHorizontal",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
