import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const computerIconGroup: IconGroup<"default"> = createIconGroup(
  "computer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
