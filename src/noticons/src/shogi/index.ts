import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shogiIconGroup: IconGroup<"default"> = createIconGroup(
  "shogi",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
