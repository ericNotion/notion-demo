import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const scriptIconGroup: IconGroup<"default"> = createIconGroup(
  "script",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
