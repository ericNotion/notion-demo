import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const earthquakeIconGroup: IconGroup<"default"> = createIconGroup(
  "earthquake",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
