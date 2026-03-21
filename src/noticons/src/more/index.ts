import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const moreIconGroup: IconGroup<"default"> = createIconGroup(
  "more",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
