import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const busIconGroup: IconGroup<"default"> = createIconGroup(
  "bus",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
