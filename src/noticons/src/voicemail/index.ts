import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const voicemailIconGroup: IconGroup<"default"> = createIconGroup(
  "voicemail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
