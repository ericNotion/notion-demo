import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "squareDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
