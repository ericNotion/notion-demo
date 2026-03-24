import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gridWideIconGroup: IconGroup<"default"> = createIconGroup(
  "gridWide",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
