import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gearIconGroup: IconGroup<"default"> = createIconGroup(
  "gear",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
