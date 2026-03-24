import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const powerIconGroup: IconGroup<"default"> = createIconGroup(
  "power",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
