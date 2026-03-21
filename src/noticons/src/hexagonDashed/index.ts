import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "hexagonDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
