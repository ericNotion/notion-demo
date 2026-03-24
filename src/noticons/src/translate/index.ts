import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const translateIconGroup: IconGroup<"default"> = createIconGroup(
  "translate",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
