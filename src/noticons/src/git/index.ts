import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const gitIconGroup: IconGroup<"default"> = createIconGroup(
  "git",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
