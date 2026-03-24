import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gavelIconGroup: IconGroup<"default"> = createIconGroup(
  "gavel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
