import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const throatIconGroup: IconGroup<"default"> = createIconGroup(
  "throat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
