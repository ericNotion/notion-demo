import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const soapIconGroup: IconGroup<"default"> = createIconGroup(
  "soap",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
