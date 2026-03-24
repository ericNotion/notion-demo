import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const champagneIconGroup: IconGroup<"default"> = createIconGroup(
  "champagne",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
