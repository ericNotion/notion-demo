import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trophyIconGroup: IconGroup<"default"> = createIconGroup(
  "trophy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
