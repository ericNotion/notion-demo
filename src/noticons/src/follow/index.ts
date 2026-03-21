import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const followIconGroup: IconGroup<"default"> = createIconGroup(
  "follow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
