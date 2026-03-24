import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tSquareIconGroup: IconGroup<"default"> = createIconGroup(
  "tSquare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
