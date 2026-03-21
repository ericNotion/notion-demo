import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mobileIconGroup: IconGroup<"default"> = createIconGroup(
  "mobile",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
