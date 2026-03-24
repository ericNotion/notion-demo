import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shortsIconGroup: IconGroup<"default"> = createIconGroup(
  "shorts",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
