import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const iterateIconGroup: IconGroup<"default"> = createIconGroup(
  "iterate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
