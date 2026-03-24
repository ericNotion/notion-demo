import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cakeIconGroup: IconGroup<"default"> = createIconGroup(
  "cake",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
