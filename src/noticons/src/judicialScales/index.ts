import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const judicialScalesIconGroup: IconGroup<"default"> = createIconGroup(
  "judicialScales",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
