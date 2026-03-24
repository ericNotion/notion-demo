import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const undoIconGroup: IconGroup<"default"> = createIconGroup(
  "undo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
