import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteWholeIconGroup: IconGroup<"default"> = createIconGroup(
  "noteWhole",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
