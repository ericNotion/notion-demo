import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const barricadeIconGroup: IconGroup<"default"> = createIconGroup(
  "barricade",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
