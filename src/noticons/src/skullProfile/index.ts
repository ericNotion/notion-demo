import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const skullProfileIconGroup: IconGroup<"default"> = createIconGroup(
  "skullProfile",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
