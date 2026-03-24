import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pillIconGroup: IconGroup<"default"> = createIconGroup(
  "pill",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
