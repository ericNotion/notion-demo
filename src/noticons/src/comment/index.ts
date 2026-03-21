import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const commentIconGroup: IconGroup<"default"> = createIconGroup(
  "comment",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
