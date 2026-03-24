import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const burstIconGroup: IconGroup<"default"> = createIconGroup(
  "burst",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
