import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bookmarkOutlineIconGroup: IconGroup<"default"> = createIconGroup(
  "bookmarkOutline",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
