import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const compassIconGroup: IconGroup<"default"> = createIconGroup(
  "compass",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
