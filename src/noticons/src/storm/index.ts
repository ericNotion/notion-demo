import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stormIconGroup: IconGroup<"default"> = createIconGroup(
  "storm",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
