import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const catIconGroup: IconGroup<"default"> = createIconGroup(
  "cat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
