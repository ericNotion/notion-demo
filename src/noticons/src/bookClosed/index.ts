import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bookClosedIconGroup: IconGroup<"default"> = createIconGroup(
  "bookClosed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
