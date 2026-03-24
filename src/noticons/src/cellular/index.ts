import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cellularIconGroup: IconGroup<"default"> = createIconGroup(
  "cellular",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
