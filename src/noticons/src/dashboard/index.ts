import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dashboardIconGroup: IconGroup<"default"> = createIconGroup(
  "dashboard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
