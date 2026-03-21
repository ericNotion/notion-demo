import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chemistryIconGroup: IconGroup<"default"> = createIconGroup(
  "chemistry",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
