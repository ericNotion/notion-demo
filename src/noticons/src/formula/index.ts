import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const formulaIconGroup: IconGroup<"default"> = createIconGroup(
  "formula",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
