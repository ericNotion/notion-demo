import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const nutIconGroup: IconGroup<"default"> = createIconGroup(
  "nut",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
