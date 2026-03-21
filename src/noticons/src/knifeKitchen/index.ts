import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const knifeKitchenIconGroup: IconGroup<"default"> = createIconGroup(
  "knifeKitchen",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
