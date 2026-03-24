import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const rubberStampIconGroup: IconGroup<"default"> = createIconGroup(
  "rubberStamp",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
