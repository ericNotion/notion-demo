import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const candyIconGroup: IconGroup<"default"> = createIconGroup(
  "candy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
