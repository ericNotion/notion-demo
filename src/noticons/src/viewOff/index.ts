import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const viewOffIconGroup: IconGroup<"default"> = createIconGroup(
  "viewOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
