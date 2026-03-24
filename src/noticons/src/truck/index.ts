import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const truckIconGroup: IconGroup<"default"> = createIconGroup(
  "truck",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
