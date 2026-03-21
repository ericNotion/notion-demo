import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowLeftBasicIconGroup: IconGroup<"default"> = createIconGroup(
  "arrowLeftBasic",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
