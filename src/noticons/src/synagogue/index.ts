import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const synagogueIconGroup: IconGroup<"default"> = createIconGroup(
  "synagogue",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
