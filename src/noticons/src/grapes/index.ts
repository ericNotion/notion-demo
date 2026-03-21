import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const grapesIconGroup: IconGroup<"default"> = createIconGroup(
  "grapes",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
