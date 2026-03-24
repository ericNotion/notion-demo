import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dependencyIconGroup: IconGroup<"default"> = createIconGroup(
  "dependency",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
