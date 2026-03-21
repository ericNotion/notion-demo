import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const crabIconGroup: IconGroup<"default"> = createIconGroup(
  "crab",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
