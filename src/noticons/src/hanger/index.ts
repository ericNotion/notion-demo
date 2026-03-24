import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hangerIconGroup: IconGroup<"default"> = createIconGroup(
  "hanger",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
