import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const motorcycleIconGroup: IconGroup<"default"> = createIconGroup(
  "motorcycle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
