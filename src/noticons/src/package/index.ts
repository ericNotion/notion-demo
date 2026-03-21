import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const packageIconGroup: IconGroup<"default"> = createIconGroup(
  "package",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
