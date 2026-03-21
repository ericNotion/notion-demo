import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardDiamondIconGroup: IconGroup<"default"> = createIconGroup(
  "cardDiamond",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
