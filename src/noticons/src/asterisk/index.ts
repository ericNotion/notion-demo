import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const asteriskIconGroup: IconGroup<"default"> = createIconGroup(
  "asterisk",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
