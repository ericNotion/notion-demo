import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartDonutIconGroup: IconGroup<"default"> = createIconGroup(
  "chartDonut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
