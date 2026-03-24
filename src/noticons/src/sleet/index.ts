import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sleetIconGroup: IconGroup<"default"> = createIconGroup(
  "sleet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
