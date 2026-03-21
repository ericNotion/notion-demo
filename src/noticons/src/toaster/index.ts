import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const toasterIconGroup: IconGroup<"default"> = createIconGroup(
  "toaster",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
