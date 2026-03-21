import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sendToIconGroup: IconGroup<"default"> = createIconGroup(
  "sendTo",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
