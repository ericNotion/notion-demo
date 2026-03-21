import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const geographyIconGroup: IconGroup<"default"> = createIconGroup(
  "geography",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
