import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const foodAndDrinkIconGroup: IconGroup<"default"> = createIconGroup(
  "foodAndDrink",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
