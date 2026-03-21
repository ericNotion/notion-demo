import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sendIconGroup: IconGroup<"default"> = createIconGroup(
  "send",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
