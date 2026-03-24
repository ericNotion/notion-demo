import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const categoriesIconGroup: IconGroup<"default"> = createIconGroup(
  "categories",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
