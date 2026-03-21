import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
