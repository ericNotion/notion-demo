import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const questionMarkIconGroup: IconGroup<"default"> = createIconGroup(
  "questionMark",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
