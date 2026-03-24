import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const umbrellaIconGroup: IconGroup<"default"> = createIconGroup(
  "umbrella",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
