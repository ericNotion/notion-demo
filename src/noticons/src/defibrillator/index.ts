import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const defibrillatorIconGroup: IconGroup<"default"> = createIconGroup(
  "defibrillator",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
