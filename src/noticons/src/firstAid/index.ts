import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const firstAidIconGroup: IconGroup<"default"> = createIconGroup(
  "firstAid",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
