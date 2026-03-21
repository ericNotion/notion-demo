import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const leafIconGroup: IconGroup<"default"> = createIconGroup(
  "leaf",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
