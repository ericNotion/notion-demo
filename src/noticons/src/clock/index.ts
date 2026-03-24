import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clockIconGroup: IconGroup<"default"> = createIconGroup(
  "clock",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
