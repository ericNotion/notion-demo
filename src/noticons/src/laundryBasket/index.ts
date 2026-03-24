import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const laundryBasketIconGroup: IconGroup<"default"> = createIconGroup(
  "laundryBasket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
