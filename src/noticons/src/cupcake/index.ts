import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cupcakeIconGroup: IconGroup<"default"> = createIconGroup(
  "cupcake",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
