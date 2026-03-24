import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const swapHorizontallyIconGroup: IconGroup<"default"> = createIconGroup(
  "swapHorizontally",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
