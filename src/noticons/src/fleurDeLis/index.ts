import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fleurDeLisIconGroup: IconGroup<"default"> = createIconGroup(
  "fleurDeLis",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
