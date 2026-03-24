import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const globeIconGroup: IconGroup<"default"> = createIconGroup(
  "globe",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
