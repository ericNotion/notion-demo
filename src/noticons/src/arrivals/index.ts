import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrivalsIconGroup: IconGroup<"default"> = createIconGroup(
  "arrivals",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
