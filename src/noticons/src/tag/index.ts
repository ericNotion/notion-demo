import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tagIconGroup: IconGroup<"default"> = createIconGroup(
  "tag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
