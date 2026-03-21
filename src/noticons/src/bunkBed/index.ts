import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bunkBedIconGroup: IconGroup<"default"> = createIconGroup(
  "bunkBed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
