import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const clarinetIconGroup: IconGroup<"default"> = createIconGroup(
  "clarinet",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
