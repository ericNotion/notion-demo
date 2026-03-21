import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const setSquareIconGroup: IconGroup<"default"> = createIconGroup(
  "setSquare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
