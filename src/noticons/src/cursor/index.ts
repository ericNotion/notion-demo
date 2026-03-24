import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cursorIconGroup: IconGroup<"default"> = createIconGroup(
  "cursor",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
