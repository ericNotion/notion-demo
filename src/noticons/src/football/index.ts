import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const footballIconGroup: IconGroup<"default"> = createIconGroup(
  "football",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
