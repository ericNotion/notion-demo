import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloverIconGroup: IconGroup<"default"> = createIconGroup(
  "clover",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
