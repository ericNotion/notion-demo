import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const musicIconGroup: IconGroup<"default"> = createIconGroup(
  "music",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
