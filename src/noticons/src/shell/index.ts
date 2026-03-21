import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shellIconGroup: IconGroup<"default"> = createIconGroup(
  "shell",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
