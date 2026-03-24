import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const historyIconGroup: IconGroup<"default"> = createIconGroup(
  "history",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
