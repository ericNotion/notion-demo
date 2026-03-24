import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const butterflyIconGroup: IconGroup<"default"> = createIconGroup(
  "butterfly",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
