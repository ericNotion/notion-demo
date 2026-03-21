import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trafficConeIconGroup: IconGroup<"default"> = createIconGroup(
  "trafficCone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
