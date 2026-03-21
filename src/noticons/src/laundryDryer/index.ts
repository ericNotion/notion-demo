import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const laundryDryerIconGroup: IconGroup<"default"> = createIconGroup(
  "laundryDryer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
