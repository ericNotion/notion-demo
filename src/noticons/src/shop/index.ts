import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shopIconGroup: IconGroup<"default"> = createIconGroup(
  "shop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
