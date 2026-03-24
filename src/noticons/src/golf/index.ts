import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const golfIconGroup: IconGroup<"default"> = createIconGroup(
  "golf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
