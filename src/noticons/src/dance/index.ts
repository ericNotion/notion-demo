import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const danceIconGroup: IconGroup<"default"> = createIconGroup(
  "dance",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
