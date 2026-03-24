import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const taurusIconGroup: IconGroup<"default"> = createIconGroup(
  "taurus",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
