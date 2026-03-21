import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const balloonIconGroup: IconGroup<"default"> = createIconGroup(
  "balloon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
