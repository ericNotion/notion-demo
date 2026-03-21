import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sinkIconGroup: IconGroup<"default"> = createIconGroup(
  "sink",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
