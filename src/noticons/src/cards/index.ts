import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cardsIconGroup: IconGroup<"default"> = createIconGroup(
  "cards",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
