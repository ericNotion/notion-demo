import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const duckIconGroup: IconGroup<"default"> = createIconGroup(
  "duck",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
