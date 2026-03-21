import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const carrotIconGroup: IconGroup<"default"> = createIconGroup(
  "carrot",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
