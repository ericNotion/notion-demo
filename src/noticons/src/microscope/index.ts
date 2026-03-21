import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const microscopeIconGroup: IconGroup<"default"> = createIconGroup(
  "microscope",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
