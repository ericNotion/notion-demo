import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const poultryIconGroup: IconGroup<"default"> = createIconGroup(
  "poultry",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
