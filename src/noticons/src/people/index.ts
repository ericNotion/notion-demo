import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const peopleIconGroup: IconGroup<"default"> = createIconGroup(
  "people",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
