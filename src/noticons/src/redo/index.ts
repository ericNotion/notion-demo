import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const redoIconGroup: IconGroup<"default"> = createIconGroup(
  "redo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
