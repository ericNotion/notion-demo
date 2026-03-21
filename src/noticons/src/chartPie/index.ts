import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartPieIconGroup: IconGroup<"default"> = createIconGroup(
  "chartPie",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
