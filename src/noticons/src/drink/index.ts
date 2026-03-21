import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const drinkIconGroup: IconGroup<"default"> = createIconGroup(
  "drink",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
