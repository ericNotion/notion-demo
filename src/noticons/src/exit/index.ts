import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const exitIconGroup: IconGroup<"default"> = createIconGroup(
  "exit",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
