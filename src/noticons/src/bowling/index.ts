import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bowlingIconGroup: IconGroup<"default"> = createIconGroup(
  "bowling",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
