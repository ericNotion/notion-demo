import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const starOutlineIconGroup: IconGroup<"default"> = createIconGroup(
  "starOutline",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
