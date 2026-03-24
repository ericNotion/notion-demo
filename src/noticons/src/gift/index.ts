import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const giftIconGroup: IconGroup<"default"> = createIconGroup(
  "gift",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
