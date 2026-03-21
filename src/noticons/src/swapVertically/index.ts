import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const swapVerticallyIconGroup: IconGroup<"default"> = createIconGroup(
  "swapVertically",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
