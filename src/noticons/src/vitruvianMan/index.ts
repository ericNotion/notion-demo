import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const vitruvianManIconGroup: IconGroup<"default"> = createIconGroup(
  "vitruvianMan",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
