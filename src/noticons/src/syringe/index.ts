import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const syringeIconGroup: IconGroup<"default"> = createIconGroup(
  "syringe",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
