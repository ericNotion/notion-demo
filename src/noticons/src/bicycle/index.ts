import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bicycleIconGroup: IconGroup<"default"> = createIconGroup(
  "bicycle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
