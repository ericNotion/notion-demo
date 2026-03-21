import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const groupsIconGroup: IconGroup<"default"> = createIconGroup(
  "groups",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
