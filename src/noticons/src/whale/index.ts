import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const whaleIconGroup: IconGroup<"default"> = createIconGroup(
  "whale",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
