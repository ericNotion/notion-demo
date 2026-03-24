import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const tropicalCocktailIconGroup: IconGroup<"default"> = createIconGroup(
  "tropicalCocktail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
