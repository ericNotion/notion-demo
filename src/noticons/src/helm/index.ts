import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const helmIconGroup: IconGroup<"default"> = createIconGroup(
  "helm",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
