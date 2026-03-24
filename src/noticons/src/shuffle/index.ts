import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shuffleIconGroup: IconGroup<"default"> = createIconGroup(
  "shuffle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
