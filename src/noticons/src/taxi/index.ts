import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const taxiIconGroup: IconGroup<"default"> = createIconGroup(
  "taxi",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
