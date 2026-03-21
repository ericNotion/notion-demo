import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const zoomInIconGroup: IconGroup<"default"> = createIconGroup(
  "zoomIn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
