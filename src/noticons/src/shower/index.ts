import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const showerIconGroup: IconGroup<"default"> = createIconGroup(
  "shower",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
