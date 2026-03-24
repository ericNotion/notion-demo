import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cornIconGroup: IconGroup<"default"> = createIconGroup(
  "corn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
