import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardHeartIconGroup: IconGroup<"default"> = createIconGroup(
  "cardHeart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
