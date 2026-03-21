import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const alertIconGroup: IconGroup<"default"> = createIconGroup(
  "alert",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
