import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowTurnRightIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowTurnRight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
