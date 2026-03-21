import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const underwearIconGroup: IconGroup<"default"> = createIconGroup(
  "underwear",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
