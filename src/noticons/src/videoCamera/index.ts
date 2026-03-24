import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videoCameraIconGroup: IconGroup<"default"> = createIconGroup(
  "videoCamera",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
