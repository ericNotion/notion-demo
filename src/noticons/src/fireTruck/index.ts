import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fireTruckIconGroup: IconGroup<"default"> = createIconGroup(
  "fireTruck",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
