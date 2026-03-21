import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const babyIconGroup: IconGroup<"default"> = createIconGroup(
  "baby",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
