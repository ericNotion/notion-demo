import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const runIconGroup: IconGroup<"default"> = createIconGroup(
  "run",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
