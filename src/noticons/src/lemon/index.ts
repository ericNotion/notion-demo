import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const lemonIconGroup: IconGroup<"default"> = createIconGroup(
  "lemon",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
