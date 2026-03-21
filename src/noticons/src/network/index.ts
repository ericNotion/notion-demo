import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const networkIconGroup: IconGroup<"default"> = createIconGroup(
  "network",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
