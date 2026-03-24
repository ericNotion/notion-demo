import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mirrorIconGroup: IconGroup<"default"> = createIconGroup(
  "mirror",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
