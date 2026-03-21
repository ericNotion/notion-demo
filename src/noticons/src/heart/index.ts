import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const heartIconGroup: IconGroup<"default"> = createIconGroup(
  "heart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
