import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const octagonIconGroup: IconGroup<"default"> = createIconGroup(
  "octagon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
