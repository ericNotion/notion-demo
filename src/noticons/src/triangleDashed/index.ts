import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const triangleDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "triangleDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
