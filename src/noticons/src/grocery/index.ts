import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const groceryIconGroup: IconGroup<"default"> = createIconGroup(
  "grocery",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
