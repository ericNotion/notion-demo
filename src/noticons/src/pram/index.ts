import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pramIconGroup: IconGroup<"default"> = createIconGroup(
  "pram",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
