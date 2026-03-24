import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const megaphoneIconGroup: IconGroup<"default"> = createIconGroup(
  "megaphone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
