import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const archeryIconGroup: IconGroup<"default"> = createIconGroup(
  "archery",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
