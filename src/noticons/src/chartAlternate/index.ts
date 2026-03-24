import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "chartAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
