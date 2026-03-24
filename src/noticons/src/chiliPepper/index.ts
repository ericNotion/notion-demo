import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chiliPepperIconGroup: IconGroup<"default"> = createIconGroup(
  "chiliPepper",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
