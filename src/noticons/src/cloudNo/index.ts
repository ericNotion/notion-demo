import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloudNoIconGroup: IconGroup<"default"> = createIconGroup(
  "cloudNo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
