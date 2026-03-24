import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const currencyIconGroup: IconGroup<"default"> = createIconGroup(
  "currency",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
