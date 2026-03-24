import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowsVerticalIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowsVertical",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
