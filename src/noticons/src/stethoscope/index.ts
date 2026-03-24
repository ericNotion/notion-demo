import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const stethoscopeIconGroup: IconGroup<"default"> = createIconGroup(
  "stethoscope",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
