import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const smokingIconGroup: IconGroup<"default"> = createIconGroup(
  "smoking",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
