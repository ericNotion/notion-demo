import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const elevatorIconGroup: IconGroup<"default"> = createIconGroup(
  "elevator",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
