import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const swordIconGroup: IconGroup<"default"> = createIconGroup(
  "sword",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
