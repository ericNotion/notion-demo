import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const spoonIconGroup: IconGroup<"default"> = createIconGroup(
  "spoon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
