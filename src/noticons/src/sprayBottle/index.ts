import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sprayBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "sprayBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
