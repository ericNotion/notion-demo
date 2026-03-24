import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const infinityIconGroup: IconGroup<"default"> = createIconGroup(
  "infinity",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
