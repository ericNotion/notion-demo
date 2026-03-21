import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const laundryWasherIconGroup: IconGroup<"default"> = createIconGroup(
  "laundryWasher",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
