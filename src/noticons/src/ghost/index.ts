import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ghostIconGroup: IconGroup<"default"> = createIconGroup(
  "ghost",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
