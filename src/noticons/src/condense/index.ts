import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const condenseIconGroup: IconGroup<"default"> = createIconGroup(
  "condense",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
