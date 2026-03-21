import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const forwardIconGroup: IconGroup<"default"> = createIconGroup(
  "forward",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
