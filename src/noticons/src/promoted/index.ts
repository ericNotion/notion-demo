import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const promotedIconGroup: IconGroup<"default"> = createIconGroup(
  "promoted",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
