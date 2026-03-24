import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const bootIconGroup: IconGroup<"default"> = createIconGroup(
  "boot",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
