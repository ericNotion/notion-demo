import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suitHeartIconGroup: IconGroup<"default"> = createIconGroup(
  "suitHeart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
