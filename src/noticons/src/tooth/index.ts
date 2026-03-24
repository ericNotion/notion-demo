import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const toothIconGroup: IconGroup<"default"> = createIconGroup(
  "tooth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
