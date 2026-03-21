import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const navigationIconGroup: IconGroup<"default"> = createIconGroup(
  "navigation",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
