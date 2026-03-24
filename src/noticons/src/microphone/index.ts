import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const microphoneIconGroup: IconGroup<"default"> = createIconGroup(
  "microphone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
