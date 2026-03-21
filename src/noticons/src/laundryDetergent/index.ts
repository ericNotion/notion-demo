import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const laundryDetergentIconGroup: IconGroup<"default"> = createIconGroup(
  "laundryDetergent",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
