import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hurricaneIconGroup: IconGroup<"default"> = createIconGroup(
  "hurricane",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
