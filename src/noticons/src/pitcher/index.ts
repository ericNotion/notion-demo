import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pitcherIconGroup: IconGroup<"default"> = createIconGroup(
  "pitcher",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
