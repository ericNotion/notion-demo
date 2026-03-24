import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const smokingNoIconGroup: IconGroup<"default"> = createIconGroup(
  "smokingNo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
