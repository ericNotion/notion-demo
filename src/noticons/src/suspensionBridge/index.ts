import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const suspensionBridgeIconGroup: IconGroup<"default"> = createIconGroup(
  "suspensionBridge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
