import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const robotIconGroup: IconGroup<"default"> = createIconGroup(
  "robot",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
