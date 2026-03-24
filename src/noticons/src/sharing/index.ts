import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sharingIconGroup: IconGroup<"default"> = createIconGroup(
  "sharing",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
