import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowSouthwestIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowSouthwest",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
