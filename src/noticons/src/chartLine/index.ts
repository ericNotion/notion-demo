import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartLineIconGroup: IconGroup<"default"> = createIconGroup(
  "chartLine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
