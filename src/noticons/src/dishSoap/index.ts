import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const dishSoapIconGroup: IconGroup<"default"> = createIconGroup(
  "dishSoap",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
