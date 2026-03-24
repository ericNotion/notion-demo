import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const backpackIconGroup: IconGroup<"default"> = createIconGroup(
  "backpack",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
