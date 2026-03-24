import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const unfollowIconGroup: IconGroup<"default"> = createIconGroup(
  "unfollow",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
