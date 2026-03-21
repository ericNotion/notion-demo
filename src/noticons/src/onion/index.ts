import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const onionIconGroup: IconGroup<"default"> = createIconGroup(
  "onion",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
