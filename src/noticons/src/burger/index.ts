import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const burgerIconGroup: IconGroup<"default"> = createIconGroup(
  "burger",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
