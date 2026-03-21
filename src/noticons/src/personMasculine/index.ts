import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const personMasculineIconGroup: IconGroup<"default"> = createIconGroup(
  "personMasculine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
