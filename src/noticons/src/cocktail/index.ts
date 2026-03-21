import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cocktailIconGroup: IconGroup<"default"> = createIconGroup(
  "cocktail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
