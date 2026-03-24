import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const receiptIconGroup: IconGroup<"default"> = createIconGroup(
  "receipt",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
