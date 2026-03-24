import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shoppingCartIconGroup: IconGroup<"default"> = createIconGroup(
  "shoppingCart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
