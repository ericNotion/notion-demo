import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const skipForwardIconGroup: IconGroup<"default"> = createIconGroup(
  "skipForward",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
