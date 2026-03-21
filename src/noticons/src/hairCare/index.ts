import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hairCareIconGroup: IconGroup<"default"> = createIconGroup(
  "hairCare",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
