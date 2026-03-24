import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const moveIconGroup: IconGroup<"default"> = createIconGroup(
  "move",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
