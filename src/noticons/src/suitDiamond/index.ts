import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suitDiamondIconGroup: IconGroup<"default"> = createIconGroup(
  "suitDiamond",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
