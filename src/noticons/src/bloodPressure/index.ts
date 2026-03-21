import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bloodPressureIconGroup: IconGroup<"default"> = createIconGroup(
  "bloodPressure",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
