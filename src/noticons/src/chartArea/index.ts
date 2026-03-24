import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartAreaIconGroup: IconGroup<"default"> = createIconGroup(
  "chartArea",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
