import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const telephoneIconGroup: IconGroup<"default"> = createIconGroup(
  "telephone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
