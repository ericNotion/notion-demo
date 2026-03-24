import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gradebookIconGroup: IconGroup<"default"> = createIconGroup(
  "gradebook",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
