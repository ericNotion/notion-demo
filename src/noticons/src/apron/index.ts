import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const apronIconGroup: IconGroup<"default"> = createIconGroup(
  "apron",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
