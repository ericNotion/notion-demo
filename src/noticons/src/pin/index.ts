import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pinIconGroup: IconGroup<"default"> = createIconGroup(
  "pin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
