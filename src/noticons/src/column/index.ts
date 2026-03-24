import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const columnIconGroup: IconGroup<"default"> = createIconGroup(
  "column",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
