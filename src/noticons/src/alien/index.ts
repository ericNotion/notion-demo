import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const alienIconGroup: IconGroup<"default"> = createIconGroup(
  "alien",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
