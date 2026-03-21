import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const directionsIconGroup: IconGroup<"default"> = createIconGroup(
  "directions",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
