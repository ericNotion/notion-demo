import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const microphoneOffIconGroup: IconGroup<"default"> = createIconGroup(
  "microphoneOff",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
