import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clothesIronIconGroup: IconGroup<"default"> = createIconGroup(
  "clothesIron",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
