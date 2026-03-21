import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clippingIconGroup: IconGroup<"default"> = createIconGroup(
  "clipping",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
