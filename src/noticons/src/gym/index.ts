import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gymIconGroup: IconGroup<"default"> = createIconGroup(
  "gym",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
