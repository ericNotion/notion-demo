import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const seedIconGroup: IconGroup<"default"> = createIconGroup(
  "seed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
