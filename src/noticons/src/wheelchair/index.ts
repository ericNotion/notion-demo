import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wheelchairIconGroup: IconGroup<"default"> = createIconGroup(
  "wheelchair",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
