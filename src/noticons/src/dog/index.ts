import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dogIconGroup: IconGroup<"default"> = createIconGroup(
  "dog",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
