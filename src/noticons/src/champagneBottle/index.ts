import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const champagneBottleIconGroup: IconGroup<"default"> = createIconGroup(
  "champagneBottle",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
