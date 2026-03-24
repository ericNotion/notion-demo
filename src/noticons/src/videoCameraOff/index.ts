import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videoCameraOffIconGroup: IconGroup<"default"> = createIconGroup(
  "videoCameraOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
