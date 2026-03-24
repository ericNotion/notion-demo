import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flagIconGroup: IconGroup<"default"> = createIconGroup(
  "flag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
