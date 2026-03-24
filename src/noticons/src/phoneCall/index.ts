import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const phoneCallIconGroup: IconGroup<"default"> = createIconGroup(
  "phoneCall",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
