import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const refreshIconGroup: IconGroup<"default"> = createIconGroup(
  "refresh",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
