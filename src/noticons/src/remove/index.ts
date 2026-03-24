import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const removeIconGroup: IconGroup<"default"> = createIconGroup(
  "remove",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
