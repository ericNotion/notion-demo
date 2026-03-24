import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pregnancyTestIconGroup: IconGroup<"default"> = createIconGroup(
  "pregnancyTest",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
