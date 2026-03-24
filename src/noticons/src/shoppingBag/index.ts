import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shoppingBagIconGroup: IconGroup<"default"> = createIconGroup(
  "shoppingBag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
