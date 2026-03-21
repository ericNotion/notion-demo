import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowRightLineIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowRightLine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
