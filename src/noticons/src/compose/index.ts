import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const composeIconGroup: IconGroup<"default"> = createIconGroup(
  "compose",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
