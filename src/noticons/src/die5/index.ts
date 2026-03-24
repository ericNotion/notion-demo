import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const die5IconGroup: IconGroup<"default"> = createIconGroup(
  "die5",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
