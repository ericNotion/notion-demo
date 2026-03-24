import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const locationIconGroup: IconGroup<"default"> = createIconGroup(
  "location",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
