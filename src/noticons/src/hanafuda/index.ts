import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hanafudaIconGroup: IconGroup<"default"> = createIconGroup(
  "hanafuda",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
