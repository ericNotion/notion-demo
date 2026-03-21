import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const jarIconGroup: IconGroup<"default"> = createIconGroup(
  "jar",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
