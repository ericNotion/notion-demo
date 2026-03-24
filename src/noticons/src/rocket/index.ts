import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const rocketIconGroup: IconGroup<"default"> = createIconGroup(
  "rocket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
