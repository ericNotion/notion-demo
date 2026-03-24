import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stopwatchIconGroup: IconGroup<"default"> = createIconGroup(
  "stopwatch",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
