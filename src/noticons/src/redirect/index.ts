import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const redirectIconGroup: IconGroup<"default"> = createIconGroup(
  "redirect",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
