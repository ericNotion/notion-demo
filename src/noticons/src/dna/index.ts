import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dnaIconGroup: IconGroup<"default"> = createIconGroup(
  "dna",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
