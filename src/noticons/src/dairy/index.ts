import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dairyIconGroup: IconGroup<"default"> = createIconGroup(
  "dairy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
