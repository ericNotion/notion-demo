import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const verifiedIconGroup: IconGroup<"default"> = createIconGroup(
  "verified",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
