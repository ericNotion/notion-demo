import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const exclamationMarkIconGroup: IconGroup<"default"> = createIconGroup(
  "exclamationMark",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
