import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const barcodeIconGroup: IconGroup<"default"> = createIconGroup(
  "barcode",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
