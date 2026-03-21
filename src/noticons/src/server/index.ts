import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const serverIconGroup: IconGroup<"default"> = createIconGroup(
  "server",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
