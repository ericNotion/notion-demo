import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const telescopeIconGroup: IconGroup<"default"> = createIconGroup(
  "telescope",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
