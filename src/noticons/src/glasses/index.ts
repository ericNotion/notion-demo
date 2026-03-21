import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const glassesIconGroup: IconGroup<"default"> = createIconGroup(
  "glasses",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
