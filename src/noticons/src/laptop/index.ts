import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const laptopIconGroup: IconGroup<"default"> = createIconGroup(
  "laptop",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
