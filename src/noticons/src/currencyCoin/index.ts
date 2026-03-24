import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const currencyCoinIconGroup: IconGroup<"default"> = createIconGroup(
  "currencyCoin",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
