import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const guitarIconGroup: IconGroup<"default"> = createIconGroup(
  "guitar",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
