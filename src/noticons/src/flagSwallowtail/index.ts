import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const flagSwallowtailIconGroup: IconGroup<"default"> = createIconGroup(
  "flagSwallowtail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
