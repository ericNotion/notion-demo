import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const parkingNoIconGroup: IconGroup<"default"> = createIconGroup(
  "parkingNo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
