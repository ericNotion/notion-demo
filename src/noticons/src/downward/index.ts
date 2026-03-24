import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const downwardIconGroup: IconGroup<"default"> = createIconGroup(
  "downward",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
