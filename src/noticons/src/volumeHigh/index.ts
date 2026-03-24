import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const volumeHighIconGroup: IconGroup<"default"> = createIconGroup(
  "volumeHigh",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
