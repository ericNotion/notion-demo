import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const friendsIconGroup: IconGroup<"default"> = createIconGroup(
  "friends",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
