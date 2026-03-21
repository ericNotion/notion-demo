import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shoppingBasketIconGroup: IconGroup<"default"> = createIconGroup(
  "shoppingBasket",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
