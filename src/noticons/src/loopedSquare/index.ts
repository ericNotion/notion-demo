import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const loopedSquareIconGroup: IconGroup<"default"> = createIconGroup(
  "loopedSquare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
