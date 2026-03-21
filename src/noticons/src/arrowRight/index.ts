import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowRightIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowRight",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
