import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const forkIconGroup: IconGroup<"default"> = createIconGroup(
  "fork",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
