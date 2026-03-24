import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scienceIconGroup: IconGroup<"default"> = createIconGroup(
  "science",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
