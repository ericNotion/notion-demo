import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hailIconGroup: IconGroup<"default"> = createIconGroup(
  "hail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
