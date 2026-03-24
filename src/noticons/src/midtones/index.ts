import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const midtonesIconGroup: IconGroup<"default"> = createIconGroup(
  "midtones",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
