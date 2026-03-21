import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const crutchIconGroup: IconGroup<"default"> = createIconGroup(
  "crutch",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
