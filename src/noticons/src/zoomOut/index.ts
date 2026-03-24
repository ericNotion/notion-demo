import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const zoomOutIconGroup: IconGroup<"default"> = createIconGroup(
  "zoomOut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
