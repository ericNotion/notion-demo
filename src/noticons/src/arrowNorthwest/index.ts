import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowNorthwestIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowNorthwest",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
