import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sunIconGroup: IconGroup<"default"> = createIconGroup(
  "sun",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
