import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const softServeIconGroup: IconGroup<"default"> = createIconGroup(
  "softServe",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
