import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const publicIconGroup: IconGroup<"default"> = createIconGroup(
  "public",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
