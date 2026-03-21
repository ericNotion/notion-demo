import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scooterIconGroup: IconGroup<"default"> = createIconGroup(
  "scooter",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
