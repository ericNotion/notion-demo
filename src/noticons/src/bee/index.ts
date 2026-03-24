import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const beeIconGroup: IconGroup<"default"> = createIconGroup(
  "bee",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
