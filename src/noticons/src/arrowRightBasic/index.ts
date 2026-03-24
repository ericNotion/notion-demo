import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowRightBasicIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowRightBasic",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
