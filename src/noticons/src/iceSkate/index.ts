import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const iceSkateIconGroup: IconGroup<"default"> = createIconGroup(
  "iceSkate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
