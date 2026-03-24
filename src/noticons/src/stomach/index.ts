import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stomachIconGroup: IconGroup<"default"> = createIconGroup(
  "stomach",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
