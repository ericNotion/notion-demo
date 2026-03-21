import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const penIconGroup: IconGroup<"default"> = createIconGroup(
  "pen",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
