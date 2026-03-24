import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cloudIconGroup: IconGroup<"default"> = createIconGroup(
  "cloud",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
