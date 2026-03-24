import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartIconGroup: IconGroup<"default"> = createIconGroup(
  "chart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
