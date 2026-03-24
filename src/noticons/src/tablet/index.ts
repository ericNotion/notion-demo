import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tabletIconGroup: IconGroup<"default"> = createIconGroup(
  "tablet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
