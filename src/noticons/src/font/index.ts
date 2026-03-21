import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const fontIconGroup: IconGroup<"default"> = createIconGroup(
  "font",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
