import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const archBridgeIconGroup: IconGroup<"default"> = createIconGroup(
  "archBridge",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
