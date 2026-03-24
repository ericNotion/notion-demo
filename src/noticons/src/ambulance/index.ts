import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const ambulanceIconGroup: IconGroup<"default"> = createIconGroup(
  "ambulance",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
