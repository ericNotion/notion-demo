import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const waterIconGroup: IconGroup<"default"> = createIconGroup(
  "water",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
