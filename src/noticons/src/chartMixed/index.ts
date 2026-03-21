import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chartMixedIconGroup: IconGroup<"default"> = createIconGroup(
  "chartMixed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
