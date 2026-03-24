import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lostAndFoundIconGroup: IconGroup<"default"> = createIconGroup(
  "lostAndFound",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
