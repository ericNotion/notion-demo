import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const combIconGroup: IconGroup<"default"> = createIconGroup(
  "comb",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
