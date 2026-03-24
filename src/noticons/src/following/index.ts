import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const followingIconGroup: IconGroup<"default"> = createIconGroup(
  "following",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
