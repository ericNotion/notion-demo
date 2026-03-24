import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const peanutIconGroup: IconGroup<"default"> = createIconGroup(
  "peanut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
