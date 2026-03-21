import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cdIconGroup: IconGroup<"default"> = createIconGroup(
  "cd",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
