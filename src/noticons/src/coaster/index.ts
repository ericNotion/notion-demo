import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const coasterIconGroup: IconGroup<"default"> = createIconGroup(
  "coaster",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
