import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const boomboxIconGroup: IconGroup<"default"> = createIconGroup(
  "boombox",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
