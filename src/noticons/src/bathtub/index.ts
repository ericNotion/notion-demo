import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bathtubIconGroup: IconGroup<"default"> = createIconGroup(
  "bathtub",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
