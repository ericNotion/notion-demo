import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "pentagonDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
