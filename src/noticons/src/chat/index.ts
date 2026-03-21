import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const chatIconGroup: IconGroup<"default"> = createIconGroup(
  "chat",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
