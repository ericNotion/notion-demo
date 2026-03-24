import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonIconGroup: IconGroup<"default"> = createIconGroup(
  "pentagon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
