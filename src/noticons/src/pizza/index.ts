import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pizzaIconGroup: IconGroup<"default"> = createIconGroup(
  "pizza",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
