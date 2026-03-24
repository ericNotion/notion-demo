import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const feedIconGroup: IconGroup<"default"> = createIconGroup(
  "feed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
