import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const palmTreeIconGroup: IconGroup<"default"> = createIconGroup(
  "palmTree",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
