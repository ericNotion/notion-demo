import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const codeScanIconGroup: IconGroup<"default"> = createIconGroup(
  "codeScan",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
