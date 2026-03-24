import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flagCheckeredIconGroup: IconGroup<"default"> = createIconGroup(
  "flagCheckered",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
