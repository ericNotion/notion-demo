import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wheelchairAccessIconGroup: IconGroup<"default"> = createIconGroup(
  "wheelchairAccess",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
