import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hourglassIconGroup: IconGroup<"default"> = createIconGroup(
  "hourglass",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
