import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const libraryIconGroup: IconGroup<"default"> = createIconGroup(
  "library",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
