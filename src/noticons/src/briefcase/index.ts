import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const briefcaseIconGroup: IconGroup<"default"> = createIconGroup(
  "briefcase",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
