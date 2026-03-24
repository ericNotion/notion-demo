import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowTurnLeftIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowTurnLeft",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
