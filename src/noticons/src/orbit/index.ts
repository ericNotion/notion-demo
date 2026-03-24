import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const orbitIconGroup: IconGroup<"default"> = createIconGroup(
  "orbit",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
