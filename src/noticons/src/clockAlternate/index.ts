import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clockAlternateIconGroup: IconGroup<"default"> = createIconGroup(
  "clockAlternate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
