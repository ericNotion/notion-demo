import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chairIconGroup: IconGroup<"default"> = createIconGroup(
  "chair",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
