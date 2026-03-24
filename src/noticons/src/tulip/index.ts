import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tulipIconGroup: IconGroup<"default"> = createIconGroup(
  "tulip",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
