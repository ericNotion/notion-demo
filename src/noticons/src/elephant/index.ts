import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const elephantIconGroup: IconGroup<"default"> = createIconGroup(
  "elephant",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
