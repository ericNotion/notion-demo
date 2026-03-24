import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const movieIconGroup: IconGroup<"default"> = createIconGroup(
  "movie",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
