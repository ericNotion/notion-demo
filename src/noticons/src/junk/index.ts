import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const junkIconGroup: IconGroup<"default"> = createIconGroup(
  "junk",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
