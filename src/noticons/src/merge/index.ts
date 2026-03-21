import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mergeIconGroup: IconGroup<"default"> = createIconGroup(
  "merge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
