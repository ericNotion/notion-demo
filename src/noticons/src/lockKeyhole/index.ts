import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lockKeyholeIconGroup: IconGroup<"default"> = createIconGroup(
  "lockKeyhole",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
