import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "squareAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
