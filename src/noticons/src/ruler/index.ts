import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const rulerIconGroup: IconGroup<"default"> = createIconGroup(
  "ruler",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
