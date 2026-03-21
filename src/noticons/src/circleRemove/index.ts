import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleRemoveIconGroup: IconGroup<"default"> = createIconGroup(
  "circleRemove",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
