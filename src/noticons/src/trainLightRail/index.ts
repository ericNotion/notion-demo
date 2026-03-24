import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trainLightRailIconGroup: IconGroup<"default"> = createIconGroup(
  "trainLightRail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
