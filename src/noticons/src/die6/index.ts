import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die6IconGroup: IconGroup<"default"> = createIconGroup(
  "die6",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
