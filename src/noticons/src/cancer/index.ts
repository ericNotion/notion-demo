import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cancerIconGroup: IconGroup<"default"> = createIconGroup(
  "cancer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
