import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pumpBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "pumpBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
