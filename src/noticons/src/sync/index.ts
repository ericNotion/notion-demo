import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const syncIconGroup: IconGroup<"default"> = createIconGroup(
  "sync",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
