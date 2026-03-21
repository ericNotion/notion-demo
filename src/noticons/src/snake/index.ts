import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const snakeIconGroup: IconGroup<"default"> = createIconGroup(
  "snake",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
