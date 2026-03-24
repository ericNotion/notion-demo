import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suitIconGroup: IconGroup<"default"> = createIconGroup(
  "suit",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
