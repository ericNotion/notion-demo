import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const menorahIconGroup: IconGroup<"default"> = createIconGroup(
  "menorah",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
