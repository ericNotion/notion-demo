import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const shoeIconGroup: IconGroup<"default"> = createIconGroup(
  "shoe",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
