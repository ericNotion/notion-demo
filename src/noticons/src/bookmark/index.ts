import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bookmarkIconGroup: IconGroup<"default"> = createIconGroup(
  "bookmark",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
