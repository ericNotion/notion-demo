import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const broomIconGroup: IconGroup<"default"> = createIconGroup(
  "broom",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
