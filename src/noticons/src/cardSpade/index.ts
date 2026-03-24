import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardSpadeIconGroup: IconGroup<"default"> = createIconGroup(
  "cardSpade",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
